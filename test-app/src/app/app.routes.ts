import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { ProductsComponent } from "./components/products/products.component";

export const APP_ROUTES  : Routes = [
  {path : "", redirectTo : 'home', pathMatch : 'full'},
  {path : "home", component : HomeComponent},
  {path : "products", component : ProductsComponent},
  {path : "product-detail/:id", component : ProductDetailComponent},
  {path : "**", component : PageNotFoundComponent}
]
