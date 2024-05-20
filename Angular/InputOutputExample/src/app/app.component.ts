import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  parentTitle:string="title from Parent";
  secondParentTitle:string="This is second title"
  styledChild:string=""

  nameChange(){
    this.parentTitle="changed name";
  }

  ChangeNameAndColor(){
    this.secondParentTitle="This name was changed by 2nd button";
    this.styledChild="color:red;"
  }


  parentTitleTwo:string="Title from parent two"


  updateTitle(param:string) {
    this.parentTitleTwo=param
  }
}