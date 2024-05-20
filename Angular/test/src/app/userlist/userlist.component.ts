import { Component, OnInit, Output } from '@angular/core';

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

export class UserlistComponent implements OnInit {
  ngOnInit(): void {
    this.getToDos("todos"); 
  }

  changeToDo(){
    this.getToDos("todo")
  }

  toDoList: IUser[] = []; 

  getToDos(key: string): void {
    let toDos: string | null = localStorage.getItem(key);
    if (toDos) { 
      this.toDoList = JSON.parse(toDos) as IUser[]; 
      console.log(this.toDoList);
    }
  }
}