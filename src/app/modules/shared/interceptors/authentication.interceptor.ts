import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        request = request.clone({
                    setHeaders: {
                        //Authorization: `Bearer ${currentUser.jwtToken}`,                        
                        'Cache-Control': 'private, no-cache, no-store, max-age=0, proxy-revalidate, s-maxage=0, must-revalidate, post-check=0, pre-check=0',
                        'Pragma': 'no-cache',
                        'Expires': '0'
                    }                
                });
                
        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                return event;
            }));
    }
}
