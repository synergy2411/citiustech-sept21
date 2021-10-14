import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

export const REVISED_ROUTES : Routes = [
  { path : "", redirectTo : "home", pathMatch : "full"},
  { path : "home", component : HomeComponent},
  { path : "lazy", loadChildren : () => import("./modules/lazy/lazy.module").then(m => m.LazyModule)},
  { path : "**", component : PageNotFoundComponent}

]
