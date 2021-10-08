import { Routes } from "@angular/router";
import { LoginComponent } from "./components/auth/login/login.component";
import { RegisterComponent } from "./components/auth/register/register.component";
import { NotesComponent } from "./components/notes/notes.component";
import { UsersComponent } from "./components/users/users.component";

export const APP_ROUTES : Routes =[
  {path : '', redirectTo : 'register', pathMatch : 'full'},     // http://localhost:4200
  {path : 'login', component : LoginComponent},                 // http://localhost:4200/login
  {path : 'register', component : RegisterComponent},           // http://localhost:4200/register
  {path : 'users', component : UsersComponent},                 // http://localhost:4200/users
  {path : 'notes', component : NotesComponent},
  {path : '**', redirectTo : 'login', pathMatch : 'full'}       // http://localhost:4200/anyOtherPath
]
