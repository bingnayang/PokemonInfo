import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokemon';
  pokemonName: Pokemon = new Pokemon();

  constructor(private router: Router) { }

  onSubmit(){
    console.log(this.pokemonName.name);
    this.router.navigate(['pokemon-detail',this.pokemonName.name]);
  }

}
