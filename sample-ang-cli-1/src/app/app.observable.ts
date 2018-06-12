import { Component, Input } from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/fromPromise';
import * as Rx from 'rxjs';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import { Comment } from './comment.interface';

@Component({
  selector: 'app-root',
  template: `
      <h3> ObservableTest Demo</h3>

      <button id='test' (click)='callNg()' >OK</button>
    `
})
export class ObservableTest {
  private _url: string = "https://jsonplaceholder.typicode.com/posts/1/comments";

  constructor(private _http: Http) {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>EmployeeService()>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  }

  callNg() {
    //Example -1 - Converting to observables
    //var obser =   Rx.Observable.of('foo', 'bar');
    //var obser = Rx.Observable.from([1,2,3]);
    // var obser = Rx.Observable.fromEvent(document.querySelector('button'), 'click');

  /*  const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('resolved!:'+new Date())
      }, 1000)
    });

    var obser = Rx.Observable.fromPromise(promise);

    obser.subscribe(
      (data) => console.log('Observable Date:', JSON.stringify(data)));*/
    /* obser.subscribe(
      (data) => console.log('Observable Date:', JSON.stringify(data)),
      (error) => console.log('Observable Erro:', JSON.stringify(error)),
      ()=>console.log('Observable Date Completed')
    );*/


    //Example -1 
    /*const hello = Observable.create(function(observer) {
        setTimeout( ()=>{observer.next('One');},
                    1000);
        setTimeout( ()=>{observer.next('Two');},
                    2000);
        setTimeout( ()=>{observer.next('THree');},
                    3000);            
      });
      const subscribe = hello.subscribe(val => console.log(val));*/
   
      var ob =  this._http.get(this._url);
        ob.subscribe(ss=>console.log(JSON.stringify(ss.status)));
     ob.subscribe(ss=>console.log(JSON.stringify(ss.json())));
  }
}