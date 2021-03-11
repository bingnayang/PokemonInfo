import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  pokemonName: string;
  pokemonDetail: any = {};

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonName = this.route.snapshot.params['name'];
    console.log(this.pokemonName)
    this.getPokemonDetail(this.pokemonName);
  }

  private getPokemonDetail(name: string){
    this.pokemonService.getPokemonDetail(name).subscribe(data => {
      this.pokemonDetail = data;
      console.log(this.pokemonDetail)
    })
  }

}
