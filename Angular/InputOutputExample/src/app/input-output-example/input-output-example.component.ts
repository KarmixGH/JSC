import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-output-example',
  templateUrl: './input-output-example.component.html',
  styleUrls: ['./input-output-example.component.scss']
})
export class InputOutputExampleComponent implements OnInit {
  @Input() title?:string;
  @Input() titleTwo?:string;
  @Input() colorChange?:string;



  @Output() emitTitle = new EventEmitter<string>();

  childTitle="title from child";

  ngOnInit(): void {
  }

  updateTitleTwo(){
    this.emitTitle.next(this.childTitle)
  }
}
