import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import {UserService} from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public users: Array<User> = [];
 
  constructor(private userServ: UserService) { }


  ngOnInit(): void {
    this.users = this.userServ.getAll();
  }

}
