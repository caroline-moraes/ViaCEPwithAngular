import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Cep } from './../cep.model';
import { CepService } from '../cep.service';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';


@Component({
  selector: 'app-cep-search',
  templateUrl: './cep-search.component.html',
  styleUrls: ['./cep-search.component.css']
})

export class CepSearchComponent implements OnInit {

  ceps$: Observable<Cep[]>;
  private searchTerms = new Subject<string>();

  constructor(private cepSevice: CepService) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.ceps$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.cepSevice.searchCeps(term)),
    )
  }

}
