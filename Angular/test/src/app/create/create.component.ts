import { Component } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  toDo: string = '';
  inputValid: boolean = true;

  submitForm(form: NgForm): void {
    if (form.valid){
      this.saveToDo(form.form.controls['to-do'].value);
      form.reset();
    } 
  }

  saveToDo(toDo: string) {
    let toDoList: string[] = [];
    let todo: string | null = localStorage.getItem('todo');
    if (todo) {
      toDoList = JSON.parse(todo);
      toDoList.push(toDo);
      localStorage.setItem('todo', JSON.stringify(toDoList));
    }
    else {
      toDoList.push(toDo);
      localStorage.setItem('todo', JSON.stringify(toDoList));
    }
  }
}