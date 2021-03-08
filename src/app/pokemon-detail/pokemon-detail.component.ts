import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  pokemonName: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pokemonName = this.route.snapshot.params['name'];
    console.log(this.pokemonName)
  }

}
