import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-error',
  templateUrl: './pokemon-error.component.html',
  styleUrls: ['./pokemon-error.component.css']
})
export class PokemonErrorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.router.navigate(['pokemon-list']);
  }
}
