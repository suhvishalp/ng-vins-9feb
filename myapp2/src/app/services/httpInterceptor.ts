import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export class MyInterceptor implements HttpInterceptor{
   
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Intercepted...')
        return next.handle(req).pipe(
            catchError(this.handleError)
        )
   }

    handleError(error:HttpErrorResponse){
        let message = '';
        if(error.error instanceof ErrorEvent){
            //client error 
            message = error.error.message;
        }else{
            //server error
            message = `Error Code: ${error.status}\nMessage: ${error.message}`;
            //log the errors 
        }
        return throwError(message)
    }
    
}