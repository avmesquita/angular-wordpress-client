import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './error.interceptor';
import { AuthenticationInterceptor } from './authentication.interceptor';
import { DefaultInterceptor } from './default.interceptor';

export const httpInterceptorProviders = [
  //{ provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  //{ provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true },

];