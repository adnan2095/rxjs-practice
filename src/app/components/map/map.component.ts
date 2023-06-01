import { Component, OnInit } from '@angular/core';
import { Subject, concatMap, map, takeUntil, timer } from 'rxjs';
import { Marble } from 'src/app/Utils/types';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  marbles: Marble[] = [];
  mappedMarbles: Marble[] = [];
  private unsubscribe$ = new Subject<void>();
  beginExecution = false;

  usageDetails: string = `We're using the RXJS map operator to transform the contents of observables. Each marble represents an observable having the number as its value/response, and once you execute the process, it will transform each observable value by multiplying it by 3`;

  tools: any[] = [
    {
      title: 'Array',
      content: 'reduce (starting value as timer(0))',
    },
    {
      title: 'RxJS',
      content: 'concatMap, timer',
    },
  ]
  ngOnInit() {
    this.retrieveMarbles();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private retrieveMarbles(): void {
    this.marbles = [
      { number: 1, color: 'bg-red', complete: false },
      { number: 2, color: 'bg-blue', complete: false },
      { number: 3, color: 'bg-yellow', complete: false },
    ];
  }

  public transformMarbles(): void {
    this.beginExecution = true;
    this.mappedMarbles = [];
  
    this.marbles
      .reduce(
        (prev, curr) =>
          prev.pipe(
            concatMap((_) =>
              timer(1000).pipe(
                takeUntil(this.unsubscribe$),
                map(() => {
                  const newValue: Marble = {
                    number: curr.number * 3,
                    color: curr.color,
                    complete: true
                  }
                  this.mappedMarbles.push(newValue);
                  return _; // Return the emitted value to continue the sequence
                })
              )
            )
          ),
        timer(0)
      )
      .subscribe();
  }

  restartExecution() {
    this.beginExecution = false;
    this.mappedMarbles = [];
    this.transformMarbles();
  }
}
