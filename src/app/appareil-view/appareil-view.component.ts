import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

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
