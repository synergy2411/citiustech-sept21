import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { RegisterComponent } from './components/auth/register/register.component';
import { DataService } from './services/data.service';
import { CtrOneComponent } from './practice/components/ctr-one/ctr-one.component';
import { CtrTwoComponent } from './practice/components/ctr-two/ctr-two.component';
import { AsyncDemoComponent } from './practice/components/async-demo/async-demo.component';
import { ObservableDemoComponent } from './practice/components/observable-demo/observable-demo.component';
import { ObsOperatorsDemoComponent } from './practice/components/obs-operators-demo/obs-operators-demo.component';
import { ObsSubjectsDemoComponent } from './practice/components/obs-subjects-demo/obs-subjects-demo.component';
import { AlertComponent } from './components/alert/alert.component';
import { GlobalErrorHandlerService } from './services/global-error-handler.service';
import { NotesComponent } from './components/notes/notes.component';
import { AddNewNoteComponent } from './components/notes/add-new-note/add-new-note.component';

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
    CommentFormComponent,
    RegisterComponent,
    CtrOneComponent,
    CtrTwoComponent,
    AsyncDemoComponent,
    ObservableDemoComponent,
    ObsOperatorsDemoComponent,
    ObsSubjectsDemoComponent,
    AlertComponent,
    NotesComponent,
    AddNewNoteComponent
  ],
  imports: [                // Built-in & Custom Module
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  // providers: [DataService],            // services
  providers : [
    {provide : ErrorHandler, useClass : GlobalErrorHandlerService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
