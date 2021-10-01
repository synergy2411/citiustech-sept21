import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { UserImageComponent } from './components/users/user-image/user-image.component';
import { ParentComponent } from './practice/components/parent/parent.component';
import { ChildComponent } from './practice/components/parent/child/child.component';

@NgModule({
  declarations: [           // Custom component, directives, pipes
    AppComponent,
    UsersComponent,
    UserInfoComponent,
    UserImageComponent,
    ParentComponent,
    ChildComponent

  ],
  imports: [                // Built-in & Custom Module
    BrowserModule,
    FormsModule
  ],
  providers: [],            // services
  bootstrap: [AppComponent]
})
export class AppModule { }
