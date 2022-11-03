import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { of, delay, Observable, from, concatAll, fromEvent, switchMapTo, switchMap, share, count, scan, withLatestFrom, ConnectableObservable, interval, multicast, Subject, take } from 'rxjs';

@Component({
  selector: 'app-loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.scss']
})
export class LoadingBarComponent implements OnInit, AfterViewInit {
  @ViewChild('load', { static: true }) loadButton: ElementRef | undefined;
  @ViewChild('progress', { static: true }) progressBar: ElementRef | undefined;
  @ViewChild('data', { static: true }) content: ElementRef | undefined;

  constructor(public elementRef: ElementRef) { }

  ngOnInit(): void {
    this.simulateMulticasting();
  }

  ngAfterViewInit(): void {
    this.simulateLoadingBar();
  }

  simulateMulticasting() {
    const obs = interval(500).pipe(take(3));

    const shared = obs.pipe(
      multicast(() => new Subject())
    ) as ConnectableObservable<any>;

    shared.subscribe({
      next(v) { console.log(v) },
      complete() { console.log('complete') }
    });

    shared.connect();

    setTimeout(() => {
      shared.subscribe({
        next(v) { console.log(v) },
        complete() { console.log('complete') }
      });

      shared.connect();
    }, 2000);
  }

  simulateLoadingBar() {
    const requestOne = of('first').pipe(delay(500));
    const requestTwo = of('second').pipe(delay(800));
    const requestThree = of('third').pipe(delay(1100));
    const requestFour = of('fourth').pipe(delay(1400));
    const requestFive = of('fifth').pipe(delay(1700));

    if (this.loadButton && this.progressBar && this.content) {
      const loadButton = this.loadButton.nativeElement;
      const progressBar = this.progressBar.nativeElement;
      const content = this.content.nativeElement;

      const updateProgress = (progressRatio: any) => {
        progressBar.style.width = 100 * progressRatio + '%';
        if (progressRatio === 1) {
          progressBar.className += ' finished';
        } else {
          progressBar.className = progressBar.className.replace(' finished', '');
        }
      };

      const updateContent = (newContent: any) => {
        content.innerHTML += newContent;
      };

      const displayData = (data: any) => {
        updateContent(`<div class="content-item">${data}</div>`);
      };

      // simulate 5 separate requests that complete at variable length
      const observables: Array<Observable<string>> = [
        requestOne,
        requestTwo,
        requestThree,
        requestFour,
        requestFive
      ]

      const array$ = from(observables);
      const requests$ = array$.pipe(concatAll());
      const clicks$ = fromEvent(loadButton, 'click');

      const progress$ = clicks$.pipe(switchMap((newReq$: any) => requests$), share());

      // count number of emissions from array
      const count$ = array$.pipe(count());

      const ratio$ = progress$.pipe(
        scan(curr => curr + 1, 0),
        withLatestFrom(count$, (curr, count) => curr / count)
      );

      clicks$.pipe(switchMap((newratio$: any) => {
        console.log('old observable (pointer event in this case) is: ', newratio$);
        return ratio$;
      })).subscribe(updateProgress);

      progress$.subscribe(displayData);


    } else {
      console.log('not detected stuff')

    }

  }
}
