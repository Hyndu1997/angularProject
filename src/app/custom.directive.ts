import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector:'[anydirective]'
})
export class customDirective{
    @HostBinding('style.backgroundColor')backgroundColor:string;

    constructor(e1:ElementRef){
        e1.nativeElement.style.background="green";
        e1.nativeElement.style.padding="20px";
        e1.nativeElement.style.border="2px solid black";

    }
    @HostListener('mouseenter')mouseEnter(){
        console.log('mouse entered');
        this.backgroundColor="red";
    }

    @HostListener('mouseleave')mouseLeave(){
        console.log('mouse leave');
        this.backgroundColor="green";
    }


    
}
