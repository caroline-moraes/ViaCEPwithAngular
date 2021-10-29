import { Component, OnInit } from '@angular/core';
import { CepService } from '../cep.service';
import { Cep } from './../cep.model';

@Component({
  selector: 'app-cep-read',
  templateUrl: './cep-read.component.html',
  styleUrls: ['./cep-read.component.css']
})
export class CepReadComponent implements OnInit {

  ceps!: Cep[] 
  displayedColumns = ['cep','logradouro','complemento','bairro','localidade','uf','ibge','gia','ddd','siafi']

  constructor(private cepService: CepService) { }

  ngOnInit(): void {
    this.cepService.read().subscribe(ceps => {
      this.ceps = ceps
      console.log(ceps)
    })
  }

}
