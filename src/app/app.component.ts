import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  isAuth = false;
  
  appareils = [
  {
    name: 'machine à laver',
    status: 'éteint'
  },
  {
    name: 'Television',
    status: 'allumé'
  },
  {
    name: 'Ordinateur',
    status: 'éteint'
  }
    
  ];
  
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


  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  onAllumer(){
    console.log('On allume tout !');
  }
  
}
