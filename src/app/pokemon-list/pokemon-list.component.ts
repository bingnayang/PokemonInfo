import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemonList: any[] = []; 

  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit(): void {
    this.getPokemonList();
  }

  private getPokemonList(){
    this.pokemonService.getPokemonList().subscribe(data => {
      this.pokemonList = data['results'];
      console.log(this.pokemonList)
    })
  }

  viewDetail(name: string){
    this.router.navigate(['pokemon-detail',name])
  }
}
