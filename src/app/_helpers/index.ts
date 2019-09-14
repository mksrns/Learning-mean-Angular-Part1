import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './superAdmin/jwt-interceptor';
//import { JwtInterceptor } from './staff/jwt-interceptor';

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
    //{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
]