import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('Request is on its way');
    console.log(req.url);
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
  }
}
