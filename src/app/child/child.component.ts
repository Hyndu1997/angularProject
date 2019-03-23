import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() myInput:string;
 @Output()myoutput:EventEmitter<string>=new EventEmitter();
 myoutputText="hello i am your child";
 sendData(){
   this.myoutput.emit(this.myoutputText);
 }
  constructor() { }

  ngOnInit() {
    console.log(this.myInput);
  }

}
