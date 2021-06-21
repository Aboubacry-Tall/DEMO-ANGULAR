import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './composants/admin/admin.component';
import { E404Component } from './composants/e404/e404.component';
import { FavorisComponent } from './composants/favoris/favoris.component';
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
import { AdminGuard, UserGuard, VisitorGuard } from './auth.guard';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  {
    path: "admin",
    component: AdminComponent,
    canActivate:[AdminGuard]
  },
  {
    path: "search",
    component: SearchComponent
  },
  {
    path: "achat",
    component: AchatComponent,
    canActivate:[UserGuard]
  },
  {
    path: "admin-livres",
    component: ALivresComponent,
    canActivate:[AdminGuard]
  },
  {
    path: "admin-users",
    component: AUsersComponent,
    canActivate:[AdminGuard]
  },
  {
    path: "admin-payements",
    component: APayementsComponent,
    canActivate:[AdminGuard]
  },
  {
    path: "login",
    component: LoginComponent,
    canActivate:[VisitorGuard]
  },
  {
    path: "register",
    component: RegisterComponent,
    canActivate:[VisitorGuard]
  },
  {
    path: "reset",
    component: ResetComponent,
    canActivate:[VisitorGuard]
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
    component: UserComponent,
    canActivate:[UserGuard]
  },
    {
    path: "favories",
    component: FavorisComponent
  },

  {
    path: "register",
    component: RegisterComponent
  },
  { path: "reset",  component: ResetComponent
  },
  { path: "livres", component: LivresComponent },
  { path: "livre/:id", component: LivreComponent },
  { path: "user", component: UserComponent },
  { path: "categories", component: CategoriesComponent },
  { path: "categorie/:categorie", component: CategorieComponent },
  { path: "**",  component: E404Component },
  { path: "erreur", component: E404Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
