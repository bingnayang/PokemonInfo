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
  pokemonTypeDetail: any[] = [
    {
      "type":"Normal",
      "Strong Against":[],
      "Weak Against":["Rock","Ghost","Steel"],
      "Resistant To":["Ghost"],
      "Vulnerable To":["Fighting"]
    },
    {
      "type":"Fighting",
      "Strong Against":["Normal","Rock","Steel","Ice","Dark"],
      "Weak Against":["Flying","Poison","Psychic","Bug","Ghost","Fairy"],
      "Resistant To":["Rock","Bug","Dark"],
      "Vulnerable To":["Flying","Psychic","Fairy"]
    },
    {
      "type":"Flying",
      "Strong Against":["Fighting", "Bug","Grass"],
      "Weak Against":["Rock", "Steel", "Electric"],
      "Resistant To":["Fighting", "Ground", "Bug", "Grass"],
      "Vulnerable To":["Rock", "Electric", "Ice"]
    },
    {
      "type":"Poison",
      "Strong Against":["Grass", "Fairy"],
      "Weak Against":["Poison", "Ground", "Rock", "Ghost", "Steel"],
      "Resistant To":["Fighting", "Poison", "Grass", "Fairy"],
      "Vulnerable To":["Ground", "Psychic"]
    },
    {
      "type":"Ground",
      "Strong Against":["Poison", "Rock", "Steel", "Fire", "Electric"],
      "Weak Against":["Flying", "Bug", "Grass"],
      "Resistant To":["Poison", "Rock", "Electric"],
      "Vulnerable To":["Water", "Grass", "Ice"]
    },
    {
      "type":"Rock",
      "Strong Against":["Flying", "Bug", "Fire", "Ice"],
      "Weak Against":["Fighting", "Ground", "Steel"],
      "Resistant To":["Normal", "Flying", "Poison", "Fire"],
      "Vulnerable To":["Fighting", "Ground", "Steel", "Water", "Grass"]
    },
    {
      "type":"Bug",
      "Strong Against":["Grass", "Psychic", "Dark"],
      "Weak Against":["Fighting", "Flying", "Poison", "Ghost", "Steel", "Fire", "Fairy"],
      "Resistant To":["Fighting", "Ground", "Grass"],
      "Vulnerable To":["Flying", "Rock", "Fire"]
    },
    {
      "type":"Ghost",
      "Strong Against":["Ghost", "Psychic"],
      "Weak Against":["Normal", "Dark"],
      "Resistant To":["Normal", "Fighting", "Poison", "Bug" ],
      "Vulnerable To":["Ghost", "Dark"]
    },
    {
      "type":"Steel",
      "Strong Against":["Rock", "Ice", "Fairy"],
      "Weak Against":["Steel", "Fire", "Water", "Electric"],
      "Resistant To":["Normal", "Flying", "Poison", "Rock", "Bug", "Steel", "Grass", "Psychic", "Ice", "Dragon", "Fairy"],
      "Vulnerable To":["Fighting", "Ground", "Fire" ]
    },
    {
      "type":"Fire",
      "Strong Against":["Bug", "Steel", "Grass", "Ice" ],
      "Weak Against":["Rock", "Fire", "Water", "Dragon"],
      "Resistant To":["Bug", "Steel", "Fire", "Grass", "Ice"],
      "Vulnerable To":["Ground", "Rock", "Water"]
    },
    {
      "type":"Water",
      "Strong Against":["Ground", "Rock", "Fire"],
      "Weak Against":["Water", "Grass", "Dragon"],
      "Resistant To":["Steel", "Fire", "Water", "Ice"],
      "Vulnerable To":["Grass", "Electric"]
    },
    {
      "type":"Grass",
      "Strong Against":["Ground", "Rock", "Water"],
      "Weak Against":["Flying", "Poison", "Bug","Steel", "Fire", "Grass", "Dragon"],
      "Resistant To":["Ground", "Water", "Grass", "Electric"],
      "Vulnerable To":["Flying", "Poison", "Bug", "Fire", "Ice"]
    },
    {
      "type":"Electric",
      "Strong Against":["Flying", "Water"],
      "Weak Against":["Ground", "Grass", "Electric", "Dragon"],
      "Resistant To":["Flying", "Steel", "Electric"],
      "Vulnerable To":["Ground"]
    },
    {
      "type":"Psychic",
      "Strong Against":["Fighting", "Poison"],
      "Weak Against":["Steel", "Psychic", "Dark"],
      "Resistant To":["Fighting", "Psychic"],
      "Vulnerable To":["Bug", "Ghost", "Dark"]
    },
    {
      "type":"Ice",
      "Strong Against":["Flying", "Ground", "Grass", "Dragon"],
      "Weak Against":["Steel", "Fire", "Water", "Ice"],
      "Resistant To":["Ice"],
      "Vulnerable To":["Fighting", "Rock", "Steel", "Fire"]
    },
    {
      "type":"Dragon",
      "Strong Against":["Dragon"],
      "Weak Against":["Steel", "Fairy"],
      "Resistant To":["Fire", "Water", "Grass", "Electric"],
      "Vulnerable To":["Ice", "Dragon", "Fairy"]
    },
    {
      "type":"Fairy",
      "Strong Against":["Fighting", "Dragon", "Dark"],
      "Weak Against":["Poison", "Steel", "Fire"],
      "Resistant To":["Fighting", "Bug", "Dragon", "Dark"],
      "Vulnerable To":["Poison", "Steel"]
    },
    {
      "type":"Dark",
      "Strong Against":["Ghost", "Psychic"],
      "Weak Against":["Fighting", "Dark", "Fairy"],
      "Resistant To":["Ghost", "Psychic", "Dark"],
      "Vulnerable To":["Fighting", "Bug", "Fairy"]
    }
  ];

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
