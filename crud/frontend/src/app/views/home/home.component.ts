import { Component, OnInit } from '@angular/core';
import { Cep } from 'src/app/components/cep/cep.model';
import { CepService } from 'src/app/components/cep/cep.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ceps: Cep[] = [];

  constructor( private cepService: CepService) { }

  ngOnInit(): void {
    this.getCeps();
  }

  getCeps() : void {
    this.cepService.getCep("94859060").subscribe(ceps => ceps);
  }

}
