import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators{
   
    public static shouldNotContainSpaces(control:AbstractControl):ValidationErrors | null{
        if((control.value as string).indexOf(' ')>0){
          return {shoudNotContainSpaces:true}
        }
  
        return null;
    }

    public static checkUser(control:AbstractControl):Promise<ValidationErrors|null>{
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                if((control.value as string) === 'admin@gmail.com')
                    resolve({userAlreadyExits:true})
                else
                    resolve(null)
            }, 9000);
        })
    }
}