import {
  // HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
// import { tap } from 'rxjs/operators';

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // console.log('Request is on its way');
    // console.log(req.url);

    // you can work some magic here
    // if (req.) {}

    // modify request
    const modfiedRequest = req.clone({
      // url: 'some-new-url',
      // headers: req.headers.append(),
      // params: '',
      headers: req.headers.append('Auth', 'xyz'),
    });

    // return next.handle(req);
    return next.handle(modfiedRequest);
    // Response Interceptors
    // Here you can also use other operators map()
    // .pipe(
    //   tap((event) => {
    //     console.log(event);
    //     if (event.type === HttpEventType.Response) {
    //       console.log('Response arrived, body data: ');
    //       console.log(event.body);
    //     }
    //   })
    // )
  }
}
