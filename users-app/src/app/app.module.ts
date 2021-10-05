import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { UserImageComponent } from './components/users/user-image/user-image.component';
import { ParentComponent } from './practice/components/parent/parent.component';
import { ChildComponent } from './practice/components/parent/child/child.component';
import { DecoratorsDemoComponent } from './practice/components/decorators-demo/decorators-demo.component';
import { ChildDemoComponent } from './practice/components/decorators-demo/child-demo/child-demo.component';
import { LifeCycleDemoComponent } from './practice/components/life-cycle-demo/life-cycle-demo.component';
import { UserCommentComponent } from './components/users/user-comment/user-comment.component';
import { AttributeDemoComponent } from './practice/components/attribute-demo/attribute-demo.component';
import { HighlightDirective } from './directives/highlight.directive';
import { DelayDirective } from './directives/delay.directive';
import { StructuralDemoComponent } from './practice/components/structural-demo/structural-demo.component';
import { UnlessDirective } from './directives/unless.directive';
import { PipeDemoComponent } from './practice/components/pipe-demo/pipe-demo.component';
import { NationalCodePipe } from './pipes/national-code.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { LoginComponent } from './components/auth/login/login.component';
import { CommentFormComponent } from './components/user/user-comment/comment-form/comment-form.component';

@NgModule({
  declarations: [           // Custom component, directives, pipes
    AppComponent,
    UsersComponent,
    UserInfoComponent,
    UserImageComponent,
    ParentComponent,
    ChildComponent,
    DecoratorsDemoComponent,
    ChildDemoComponent,
    LifeCycleDemoComponent,
    UserCommentComponent,
    AttributeDemoComponent,
    HighlightDirective,
    DelayDirective,
    StructuralDemoComponent,
    UnlessDirective,
    PipeDemoComponent,
    NationalCodePipe,
    FilterPipe,
    SortPipe,
    LoginComponent,
    CommentFormComponent
  ],
  imports: [                // Built-in & Custom Module
    BrowserModule,
    FormsModule
  ],
  providers: [],            // services
  bootstrap: [AppComponent]
})
export class AppModule { }
