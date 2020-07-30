import { User } from '../models/User.model';
import { Subject } from 'rxjs/Subject';

export class UserService {

 //tableau d'utilisateur
  private users: User[] =[
    {
      firstName: 'James',
      lastName: 'Smith',
      email: 'james@smith.com',
      drinkPreference: 'Coca',
      hobbies: [
        'coder',
        'la degustation de café'
      ]

    }
  ];
  //méthode des subject pour la gestion des données 
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}