import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: 'starComponent',
    templateUrl: './star.component.html',
    styleUrls : ['./star.component.css']
    
})
export class StarComponent implements OnChanges{
    @Input()rating: number= 0;
    cropWidth : number = 75; 
    
    ngOnChanges(changes: SimpleChanges): void {
       this.cropWidth = this.rating * 75/5;
    }

    onClick(): void{
        console.log (`here I can log ${this.cropWidth}` )
    };
}