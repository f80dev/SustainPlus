import {AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnChanges,AfterViewInit {
    content_type: string="html"
    @Input() title:string=""
    @Input() content:any
    @Input() top:string="8px";
    @Input() color="gray"
    @Input() icon=""
    @Input() texttransform="none"
    @Input() expanded=false;
    @Output("onexpanded") on_expand: EventEmitter<any> =new EventEmitter();

    styles="<style>.img_icon {filter: invert(1)} ul {margin:0;margin-left:-10px;}</style>"

    constructor() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        // if(changes["content"]){
        //     this.content_type=typeof(changes["content"].currentValue)=="string" ? "html" : "object"
        // }
    }

    ngAfterViewInit(): void {
        this.content_type=typeof(this.content)=="string" ? "html" : "object"
    }


    record_expanded() {
        localStorage.setItem("last_expanded",this.title)
    }
}
