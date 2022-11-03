import { Component, OnInit } from '@angular/core';
import { concatMap, filter, from, interval, map, mergeMap, of, race, startWith, take, tap } from 'rxjs';
import { RxjsHttpService } from 'src/app/services/rxjs-http.service';

export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  posts: Post[] = [];
  takeLimit = 50;
  constructor(public rxjsHttp: RxjsHttpService) { }

  ngOnInit(): void {
    this.rxjsHttp.get('posts').pipe(
      map((response: any) => {
        return (response.response as Post[]).filter(post => {
          return post.id <= 99;
        });
      }),
    ).subscribe({
      next: (response) => {
        this.posts = response;
        // this.rxjsOperation();
        // this.ofPosts();
        // this.startWith();
      }
    });
    this.racingApis();
  }

  rxjsOperation() {
    const posts$ = from(this.posts);
    posts$.pipe(
      filter((post) => {
        return post.id <= 40;
      }),
      take(this.takeLimit)
    ).subscribe(posts => {
      console.log('filter, take: ', posts);
    });
  }

  ofPosts() {
    const posts$ = of(this.posts);
    posts$.subscribe(posts => {
      console.log('of: ',posts);
    })
  }

  startWith() {
    const posts$ = from(this.posts);
    posts$.pipe(
      startWith({
        id: 69696,
        name: 'wowowowow'
      })
    ).subscribe(posts => {
      console.log('startwith: ', posts);
    })
  }

  racingApis() {
    const posts$ = this.rxjsHttp.get('albums');
    const comments$ = this.rxjsHttp.get('todos');

    race(posts$, comments$).subscribe(result => console.log(result));
  }

}
