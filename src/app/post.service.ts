import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostsService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content };
    this.http
      .post<{ name: string }>(
        'https://ng-complete-guide-54479-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
        postData,
        {
          // observe: 'body', // DEFAULT
          observe: 'response',
        }
      )
      .subscribe(
        (responseData) => {
          console.log(responseData);
          // console.log(responseData.body);
        },
        (error) => {
          this.error.next(error.message);
        }
      );
  }

  fetchPosts() {
    // multiple params
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');

    return this.http
      .get<{ [key: string]: Post }>(
        'https://ng-complete-guide-54479-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
        {
          headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
          // one param
          // params: new HttpParams().set('print', 'pretty'),
          // multiple params
          params: searchParams,
        }
      )
      .pipe(
        // this not working
        // map((responseData: { [key: string]: Post }) => {
        // so used this instead
        map((responseData) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        }),
        catchError((errorRes) => {
          // Send to analytics server
          return throwError(errorRes);
        })
      );
  }

  deletePosts() {
    return this.http
      .delete(
        'https://ng-complete-guide-54479-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
        {
          // observe: 'body',
          // observe: 'response',
          observe: 'events',
        }
      )
      .pipe(
        tap((event) => {
          console.log(event);
          if (event.type === HttpEventType.Response) {
            // ...
            // console.log(event)
          }
          if (event.type === HttpEventType.Response) {
            console.log(event.body);
          }
        })
      );
  }
}
