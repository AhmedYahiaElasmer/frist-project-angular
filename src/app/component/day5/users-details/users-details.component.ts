import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-details',
  standalone: true,
  imports: [],
  templateUrl: './users-details.component.html',
  styleUrl: './users-details.component.css'
})
export class UsersDetailsComponent {
  ID = 0;
  constructor(myActivated:ActivatedRoute){
    this.ID = myActivated.snapshot.params["id"];
   
  }
}
