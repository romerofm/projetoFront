import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.css']
})
export class TelaCadastroComponent implements OnInit {
  public user: User = new User();
  constructor(private rota: Router,  private userServ: UserService = new UserService) { }

  ngOnInit(): void {
  }
  public cadastrar () {
    this.userServ.add(this.user);
    this.rota.navigate(['/']);
  }

}
