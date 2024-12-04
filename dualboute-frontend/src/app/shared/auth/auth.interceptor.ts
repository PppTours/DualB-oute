import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem("Token") ?? '';
  if (token) {
    // Clone the request and add the Authorization header with the token
    req = req.clone({
      setHeaders: {
        Authorization: token ? `Token ${token}` : '',
      }
    });
  }
  return next(req);
};
