import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './composants/home/home.component';
import { LoginComponent } from './composants/login/login.component';
import { RegisterComponent } from './composants/register/register.component';
import { ResetComponent } from './composants/reset/reset.component';
import { CategorieComponent } from './modules/categories/categorie/categorie.component';
import { CategoriesComponent } from './modules/categories/categories/categories.component';
import { LivreComponent } from './modules/livres/livre/livre.component';
import { LivresComponent } from './modules/livres/livres/livres.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "reset",
    component: ResetComponent
  },
  {
    path: "livres",
    component: LivresComponent 
  },
  {
    path: "livre",
    component: LivreComponent
  },
  {
    path: "categories",
    component: CategoriesComponent
  },
  {
    path: "categorie",
    component: CategorieComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
