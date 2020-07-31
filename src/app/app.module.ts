import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//communication avec serveur
import { HttpClientModule } from '@angular/common/http';

//import des modules de formulaire
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

// import des services
import {AppareilService} from './services/appareil.service';
import {AuthService} from './services/auth.service';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './services/auth-guard.service';
import { UserService } from './services/user.service';

//import des views et components
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';

//import des routes
import {Routes, RouterModule} from '@angular/router';
import { NewUserComponent } from './new-user/new-user.component';




// définition des routes
const appRoutes: Routes = [
  { path: 'appareils', canActivate: [AuthGuard],       component: AppareilViewComponent },
  { path: 'users',                                     component: UserListComponent},  
  { path: 'new-user',                                  component: NewUserComponent}, 
  { path: 'auth',                                      component: AuthComponent },
  { path: '',                                          component: AppareilViewComponent },
  { path: 'appareils/:id', canActivate: [AuthGuard],   component: SingleAppareilComponent},
  { path: 'edit', canActivate: [AuthGuard],            component: EditAppareilComponent},  
  { path: 'not-found',                                 component: FourOhFourComponent},
  /* mettre la redirection à la fin, car ** signifie tous les chemins*/
  { path: '**', redirectTo: '/not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
