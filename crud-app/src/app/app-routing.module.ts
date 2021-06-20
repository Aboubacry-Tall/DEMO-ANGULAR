import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './composants/admin/admin.component';
import { E404Component } from './composants/e404/e404.component';
import { HomeComponent } from './composants/home/home.component';
import { LoginComponent } from './composants/login/login.component';
import { RegisterComponent } from './composants/register/register.component';
import { ResetComponent } from './composants/reset/reset.component';
import { SearchComponent } from './composants/search/search.component';
import { AchatComponent } from './modules/achats/achat/achat.component';
import { ALivresComponent } from './modules/admin/a-livres/a-livres.component';
import { APayementsComponent } from './modules/admin/a-payements/a-payements.component';
import { AUsersComponent } from './modules/admin/a-users/a-users.component';
import { CategorieComponent } from './modules/categories/categorie/categorie.component';
import { CategoriesComponent } from './modules/categories/categories/categories.component';
import { LivreComponent } from './modules/livres/livre/livre.component';
import { LivresComponent } from './modules/livres/livres/livres.component';
import { UserComponent } from './modules/users/user/user.component';

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
    path: "admin",
    component: AdminComponent
  },
  {
    path: "search",
    component: SearchComponent
  },
  {
    path: "achat",
    component: AchatComponent
  },
  {
    path: "admin-livres",
    component: ALivresComponent
  },
  {
    path: "admin-users",
    component: AUsersComponent
  },
  {
    path: "admin-payements",
    component: APayementsComponent
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
    path: "user/:id",
    component: UserComponent
  },
  {
    path: "categories",
    component: CategoriesComponent
  },
  {
    path: "categorie",
    component: CategorieComponent
  },
  {
    path: "**",
    component: E404Component
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
