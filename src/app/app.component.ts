import { Component, OnInit } from '@angular/core';
import {AppareilService} from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  isAuth = false;
  
  appareils: any[];
  
  //lastUpdate = new Date();
  
  lastUpdate = new Promise(
    (resolve, rejet) =>{
        const date = new Date();
        setTimeout(
            () => {
                resolve(date);
                }, 2000
        )
    }
  );


  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit(){
    this.appareils = this.appareilService.appareils;
  }


  onAllumer(){
    console.log('On allume tout !');
    this.appareilService.switchOnAll();
  }

  onEteindre(){
    console.log('On éteint tout !');
    this.appareilService.switchOffAll();
  }
  
}
