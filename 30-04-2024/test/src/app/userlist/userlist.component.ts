import { Component } from '@angular/core';

interface IUser{
  name: string,
  phoneNumber: string|number,
  age: number|string,
}

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent {
  users:Array<IUser> = [
    {
      name:'John',
      phoneNumber:'592040213',
      age: '18',
    }
    ,
    {
      name:'Bob',
      phoneNumber:'5123207137',
      age: '23',
    }
    ,
    {
      name:'Renn',
      phoneNumber:'592877533',
      age: '21',
    }
  ]
}
