import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { AsyncComponent } from './components/async/async.component';
import { AuthComponent } from './components/auth/auth.component';
import { CounterComponent } from './components/counter/counter.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ChildComponent } from './components/parent/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ReversePipe } from './pipes/reverse.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    AuthComponent,
    AsyncComponent,
    ParentComponent,
    ChildComponent,
    ReversePipe,
    FilterPipe,
    HomeComponent,
    ProductsComponent,
    PageNotFoundComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
