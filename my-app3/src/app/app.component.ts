import { Component } from '@angular/core';
import { interval, Observable, Observer, of } from 'rxjs';
import { map } from 'rxjs-compat/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title:string= 'my-app3'
  
  constructor(){
    // const myObservable = new Observable((observer:Observer<string>)=>{
    //       setTimeout(() => {
    //         observer.next("1st Data Packet")
    //       }, 5000);

    //       setTimeout(() => {
    //         observer.next("2nd Data Packet")
    //       }, 9000);

    //       setTimeout(() => {
    //         observer.error("Sample ERROR")
    //       }, 15000);

    //       setTimeout(() => {
    //         observer.next("3rd Data Packet")
    //       }, 20000);


    //       setTimeout(() => {
    //         observer.complete();
    //       }, 25000);
    // })

   

    // myObservable.subscribe(
    //   (data)=>{console.log('data received ' , data)},
    //   (error)=>{console.log('Error ', error)},
    //   ()=>{console.log('observable is complete')}
    // )


    // const myObservable = interval(2000)
    // myObservable.subscribe(
    //   (num)=>{
    //     console.log(num)
    //   }
    // )
  }

}
