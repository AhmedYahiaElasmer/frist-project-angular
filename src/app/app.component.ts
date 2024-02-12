import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './component/firstComponent/first/first.component';
import { SecondComponent } from './component/firstComponent/second/second.component';
import { RegisterationComponent } from './component/registeration/registeration.component';
import { StudentsComponent } from './component/students/students.component';
import { HomeComponent } from './component/day5/home/home.component';
import { UsersComponent } from './component/day5/users/users.component';
import { UsersDetailsComponent } from './component/day5/users-details/users-details.component';
import { ErrorComponent } from './component/day5/error/error.component';
import { HeaderComponent } from './component/day5/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,UsersComponent,UsersDetailsComponent,ErrorComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  dataFromRegisteration=""
  getData(data:any){
    this.dataFromRegisteration=data
  }

}
