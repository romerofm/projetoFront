import { Injectable } from '@angular/core';
import { Filme } from '../models/filme.model';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  
  public filmes: Array<Filme> =[

    {
      id: 0,
      nome: 'Homem de Ferro',
      descricao: 'Tony Stark (Robert Downey, Jr.) é um industrial bilionário e inventor brilhante que realiza testes bélicos no exterior, mas é sequestrado por terroristas que o forçam a construir uma arma devastadora. Em vez disso, ele constrói uma armadura blindada e enfrenta seus sequestradores.',
      foto: './../../assets/images/homem-de-ferro.jpg'
    },

    {
      id: 1,
      nome: 'Capitão América',
      descricao: 'A trama do filme se passa quase toda na década de 40, onde a origem do icônico personagem acontece. Steve Rogers (Chris Evans) é um garoto mirrado que sonha em ser um soldado. Ele não quer fama ou dinheiro, quer apenas servir seu país, mas seu físico e seu histórico médico não ajudam.',
      foto: './../../assets/images/capitao-america-o-primeiro-vingador.jpg'
    },

    {
      id: 2,
      nome: 'Guardiões da Galáxia',
      descricao: 'Guardiões da Galáxia, com direção de James Gunn, traz como protagonista o Senhor das Estrelas (Chris Pratt), um terráqueo – ou quase isso – que se torna saqueador de planetas. Ao roubar uma esfera metálica em um planeta abandonado, ele se envolve numa grande encrenca, já que terríveis seres estão atrás do objeto.',
      foto: './../../assets/images/guardios-da-galaxia.jpg'
    },

    {
      id: 3,
      nome: 'O Menino que Descobriu o Vento',
      descricao: 'O Menino Que Descobriu o Vento uma história de resiliência e superação. O filme mostra a história de William KamKwamba, um garoto cujo maior sonho é poder estudar. Mas por conta de várias dificuldades que sua família vêm passando, os pais acabam por não poder pagar pelas mensalidades da escola.',
      foto: './../../assets/images/o-menino-que-descobriu-o-vento.jpg'
    },
  ]
  getAll(): Filme[] {
    return this.filmes;
  }

  constructor() { }
}
