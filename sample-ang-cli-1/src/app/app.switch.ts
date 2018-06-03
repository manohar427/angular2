import { Component, Input,SimpleChanges } from '@angular/core'; 

@Component({
    selector: 'app-switch1',
    template: `Your selected value is :{{selValue}}`
})
export class Switch1{
    @Input() selValue: String;

    ngOnChanges(changes: SimpleChanges) {
        for (let propName in changes) {
          let chng = changes[propName];
          let cur  = JSON.stringify(chng.currentValue);
          let prev = JSON.stringify(chng.previousValue);
          console.log(`....ngOnChanges()......${propName}: currentValue = ${cur}, previousValue = ${prev}`);
        }
    }

    ngDoCheck() {
        console.log(`............................ngDoCheck()..............................................`);
    }

    ngOnInit() { 
        console.log('....................Switch1-ngOnInit().................');
      }

}

@Component({
    selector: 'app-switch2',
    template: `<h1>Your selected value is :{{selValue}}</h1>`,
    styles: ['h1 { font-weight: normal; }']
})
export class Switch2{
    @Input() selValue: String;
}

@Component({
    selector: 'app-switch3',
    template: `Your selected value is :{{selValue}}`
})
export class Switch3{
    @Input() selValue: String;
}

@Component({
    selector: 'app-switch4',
    template: `Your selected value is :{{selValue}}`
})
export class Switch4{
    @Input() selValue: String;
}

@Component({
    selector: 'app-switch5',
    template: `Your selected value is :{{selValue| uppercase | lowercase}}`
})
export class Switch5{
    @Input() selValue: String;
}

@Component({
    selector: 'test-switch',
    template: `Your selected value is :{{selValue| uppercase | lowercase}}`
})
export class testswitch{
    @Input() set sample(name: string) {
        console.log(">>>>>>>>>>>>>>>>>>>>>>sample()):"+name);
      }     
    //get name(): string { return this._name; }
}

export const SwitchComponents = [Switch3,Switch2,Switch1,Switch4,Switch5,testswitch];
