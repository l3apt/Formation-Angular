import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';

// import des services
import {AppareilService} from './services/appareil.service';
import {AuthService} from './services/auth.service';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './services/auth-guard.service';

//import des view
import { AppareilViewComponent } from './appareil-view/appareil-view.component';

//import des routes
import {Routes, RouterModule} from '@angular/router';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

// définition des routes
const appRoutes: Routes = [
  { path: 'appareils', canActivate: [AuthGuard],       component: AppareilViewComponent },
  { path: 'auth',                                      component: AuthComponent },
  { path: '',                                          component: AppareilViewComponent },
  { path: 'appareils/:id', canActivate: [AuthGuard],   component: SingleAppareilComponent},
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
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
