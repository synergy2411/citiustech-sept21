import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [           // Custom component, directives, pipes
    AppComponent,
    UsersComponent

  ],
  imports: [                // Built-in & Custom Module
    BrowserModule
  ],
  providers: [],            // services
  bootstrap: [AppComponent]
})
export class AppModule { }
