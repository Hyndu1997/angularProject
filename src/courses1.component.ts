
import { Component } from '@angular/core';
@Component({
    selector:'courses1',
    template:'<h1>{{text}}</h1>'

})

export class courses1Component{
     courses=["java","python","sql","selenium"];
     Title:string="hello this is course component title";
     text="hello this is text";
}