import {Component,Input,Output,EventEmitter} from '@angular/core';
@Component({
    selector:'countercomponent',
    template:`
    <button (click)="decrement()">-</button>
    <span>{{counter}}</span>
    <button (click)="increment()">+</button>
    <br/>
    Child Component Value:{{counterValue}}
    `
})
export class  AppTBChildComponent {

    counterValue = 0;
    @Output() counterChange = new EventEmitter();
  
    @Input()
    get counter() {
        console.log('>>>>>>>>>>>> get counter() >>>>>>>>>>>>>>>');
        return this.counterValue;
    }
  
    set counter(val) {
        console.log('>>>>>>>>>>>> set counter(val) >>>>>>>>>>>>>>>:'+val);
        this.counterValue = val;
        this.counterChange.emit(this.counterValue);
    }
  
    decrement() {
        console.log('>>>>>>>>>>>>  decrement() >>>>>>>>>>>>>>>');
        this.counter--;
    }
  
    increment() {
        console.log('>>>>>>>>>>>>  increment() >>>>>>>>>>>>>>>');
        this.counter++;
    }

    }