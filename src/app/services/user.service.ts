import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users: Array<User> = [
    {
      id: 0,
      nome: '',
      email: '',
      usuario: '',
      senha:''

    },
    {
      id: 1,
      nome: '',
      email: '',
      usuario: '',
      senha:''
    },
    {
      id: 2,
      nome: '',
      email: '',
      usuario: '',
      senha:''
    },
    {
      id: 3,
      nome: '',
      email: '',
      usuario: '',
      senha: ''
    }
  ];
  constructor() { }
  
  
  public add(user: User) {
    user.id = this.users.length;
    this.users.push(user);
  }
  public getAll(): Array<User>{
    return this.users;
  }
}
