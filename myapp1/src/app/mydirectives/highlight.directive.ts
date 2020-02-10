import { Directive, ElementRef, Input, OnInit, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[highlight]'
})
export class HighLightDirective implements OnInit {

    @Input()
    public highlight = 'orange';

    @HostBinding('style.backgroundColor')
    public bgColor: string = this.highlight;

    @HostListener('mouseover')
    public changeColorOnMouseOver() {
           this.bgColor = 'red';
    }

    @HostListener('mouseout')
    public changeColorOnMouseOut() {
        this.bgColor = 'orange';
    }

    constructor(public eleRef: ElementRef) {
        console.log('Object of HighLightDirective is created...');
        console.log(this.eleRef.nativeElement);

    }

    ngOnInit() {
        // this.eleRef.nativeElement.style.backgroundColor = this.highlight
    }
}
