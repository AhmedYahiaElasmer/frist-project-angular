import { CommonModule } from '@angular/common';
import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registeration',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './registeration.component.html',
  styleUrl: './registeration.component.css'
})
export class RegisterationComponent {

  nameValue="";
  ageValue="";
  pvalue=""
  Students:{name:string, age:string}[] = [];
  @Output() myEvent = new EventEmitter();

  add(){

    if(+this.nameValue.length > 3  && (+this.ageValue && (+this.ageValue>=20 || +this.ageValue<=30))){
      let newStudent={name:this.nameValue, age:this.ageValue}
      this.Students.push(newStudent);
      this.myEvent.emit(this.Students);
      console.log(this.Students[0].name);
    }
    
    
    

  }
}
