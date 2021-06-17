import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { HomeComponent } from './composants/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './composants/login/login.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { BaseComponent } from './core/base/base.component';
import { RegisterComponent } from './composants/register/register.component';
import { ResetComponent } from './composants/reset/reset.component';
import { MenuComponent } from './core/menu/menu.component';
import { LivresComponent } from './modules/livres/livres/livres.component';
import { LivreComponent } from './modules/livres/livre/livre.component';
import { CategoriesComponent } from './modules/categories/categories/categories.component';
import { CategorieComponent } from './modules/categories/categorie/categorie.component';
import { AUsersComponent } from './modules/admin/a-users/a-users.component';
import { ALivresComponent } from './modules/admin/a-livres/a-livres.component';
import { AdminComponent } from './composants/admin/admin.component';
import { APayementsComponent } from './modules/admin/a-payements/a-payements.component';
import { UserComponent } from './modules/users/user/user.component';
import { UsersComponent } from './modules/users/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    BaseComponent,
    RegisterComponent,
    ResetComponent,
    MenuComponent,
    LivresComponent,
    LivreComponent,
    CategoriesComponent,
    CategorieComponent,
    AUsersComponent,
    ALivresComponent,
    AdminComponent,
    APayementsComponent,
    UserComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatExpansionModule,
    MatMenuModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
