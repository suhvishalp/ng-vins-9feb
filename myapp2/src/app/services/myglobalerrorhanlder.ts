import { ErrorHandler, Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable()
export class MyHandler implements ErrorHandler{

    handleError(error: any): void {
        console.log('handling error globally...')
        //console.log(error)
            let errorMsg:string = ''
            if(error.status>=400 && error.status<500){
                errorMsg = error.message;
                throwError(errorMsg)
            }else{
              alert('Something went wrong..Server Error')
              //log the error using logger
            }
    }
}