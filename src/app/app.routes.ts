import { Routes } from '@angular/router';
import { HomeComponent } from './component/day5/home/home.component';
import { UsersComponent } from './component/day5/users/users.component';
import { UsersDetailsComponent } from './component/day5/users-details/users-details.component';
import { ErrorComponent } from './component/day5/error/error.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"users",component:UsersComponent},
    {path:"usersDetails/:id",component:UsersDetailsComponent},
    {path:"**",component:ErrorComponent},
];
