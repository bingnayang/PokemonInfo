import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  pokemonName: string;
  pokemonDetail: any = {};
  pokemonType: any[] = [];
  weakAgainstList : any[] = [];
  strongAgainstList: any[] = [];
  resistantToList: any[] = [];
  vulnerableToList: any[] = [];
  typeObject: any[] = [];
  prePokemon: string;
  nextPokemon: string;
  currentPokemonId: number;
  pokemonTypeDetail: any[] = [
    {
      "type":"normal",
      "Strong Against":[],
      "Weak Against":["Rock","Ghost","Steel"],
      "Resistant To":["Ghost"],
      "Vulnerable To":["Fighting"]
    },
    {
      "type":"fighting",
      "Strong Against":["Normal","Rock","Steel","Ice","Dark"],
      "Weak Against":["Flying","Poison","Psychic","Bug","Ghost","Fairy"],
      "Resistant To":["Rock","Bug","Dark"],
      "Vulnerable To":["Flying","Psychic","Fairy"]
    },
    {
      "type":"flying",
      "Strong Against":["Fighting", "Bug","Grass"],
      "Weak Against":["Rock", "Steel", "Electric"],
      "Resistant To":["Fighting", "Ground", "Bug", "Grass"],
      "Vulnerable To":["Rock", "Electric", "Ice"]
    },
    {
      "type":"poison",
      "Strong Against":["Grass", "Fairy"],
      "Weak Against":["Poison", "Ground", "Rock", "Ghost", "Steel"],
      "Resistant To":["Fighting", "Poison", "Grass", "Fairy"],
      "Vulnerable To":["Ground", "Psychic"]
    },
    {
      "type":"ground",
      "Strong Against":["Poison", "Rock", "Steel", "Fire", "Electric"],
      "Weak Against":["Flying", "Bug", "Grass"],
      "Resistant To":["Poison", "Rock", "Electric"],
      "Vulnerable To":["Water", "Grass", "Ice"]
    },
    {
      "type":"rock",
      "Strong Against":["Flying", "Bug", "Fire", "Ice"],
      "Weak Against":["Fighting", "Ground", "Steel"],
      "Resistant To":["Normal", "Flying", "Poison", "Fire"],
      "Vulnerable To":["Fighting", "Ground", "Steel", "Water", "Grass"]
    },
    {
      "type":"bug",
      "Strong Against":["Grass", "Psychic", "Dark"],
      "Weak Against":["Fighting", "Flying", "Poison", "Ghost", "Steel", "Fire", "Fairy"],
      "Resistant To":["Fighting", "Ground", "Grass"],
      "Vulnerable To":["Flying", "Rock", "Fire"]
    },
    {
      "type":"ghost",
      "Strong Against":["Ghost", "Psychic"],
      "Weak Against":["Normal", "Dark"],
      "Resistant To":["Normal", "Fighting", "Poison", "Bug" ],
      "Vulnerable To":["Ghost", "Dark"]
    },
    {
      "type":"steel",
      "Strong Against":["Rock", "Ice", "Fairy"],
      "Weak Against":["Steel", "Fire", "Water", "Electric"],
      "Resistant To":["Normal", "Flying", "Poison", "Rock", "Bug", "Steel", "Grass", "Psychic", "Ice", "Dragon", "Fairy"],
      "Vulnerable To":["Fighting", "Ground", "Fire" ]
    },
    {
      "type":"fire",
      "Strong Against":["Bug", "Steel", "Grass", "Ice" ],
      "Weak Against":["Rock", "Fire", "Water", "Dragon"],
      "Resistant To":["Bug", "Steel", "Fire", "Grass", "Ice"],
      "Vulnerable To":["Ground", "Rock", "Water"]
    },
    {
      "type":"water",
      "Strong Against":["Ground", "Rock", "Fire"],
      "Weak Against":["Water", "Grass", "Dragon"],
      "Resistant To":["Steel", "Fire", "Water", "Ice"],
      "Vulnerable To":["Grass", "Electric"]
    },
    {
      "type":"grass",
      "Strong Against":["Ground", "Rock", "Water"],
      "Weak Against":["Flying", "Poison", "Bug","Steel", "Fire", "Grass", "Dragon"],
      "Resistant To":["Ground", "Water", "Grass", "Electric"],
      "Vulnerable To":["Flying", "Poison", "Bug", "Fire", "Ice"]
    },
    {
      "type":"electric",
      "Strong Against":["Flying", "Water"],
      "Weak Against":["Ground", "Grass", "Electric", "Dragon"],
      "Resistant To":["Flying", "Steel", "Electric"],
      "Vulnerable To":["Ground"]
    },
    {
      "type":"psychic",
      "Strong Against":["Fighting", "Poison"],
      "Weak Against":["Steel", "Psychic", "Dark"],
      "Resistant To":["Fighting", "Psychic"],
      "Vulnerable To":["Bug", "Ghost", "Dark"]
    },
    {
      "type":"ice",
      "Strong Against":["Flying", "Ground", "Grass", "Dragon"],
      "Weak Against":["Steel", "Fire", "Water", "Ice"],
      "Resistant To":["Ice"],
      "Vulnerable To":["Fighting", "Rock", "Steel", "Fire"]
    },
    {
      "type":"dragon",
      "Strong Against":["Dragon"],
      "Weak Against":["Steel", "Fairy"],
      "Resistant To":["Fire", "Water", "Grass", "Electric"],
      "Vulnerable To":["Ice", "Dragon", "Fairy"]
    },
    {
      "type":"fairy",
      "Strong Against":["Fighting", "Dragon", "Dark"],
      "Weak Against":["Poison", "Steel", "Fire"],
      "Resistant To":["Fighting", "Bug", "Dragon", "Dark"],
      "Vulnerable To":["Poison", "Steel"]
    },
    {
      "type":"dark",
      "Strong Against":["Ghost", "Psychic"],
      "Weak Against":["Fighting", "Dark", "Fairy"],
      "Resistant To":["Ghost", "Psychic", "Dark"],
      "Vulnerable To":["Fighting", "Bug", "Fairy"]
    }
  ];

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService, private router: Router) { 
    this.route.paramMap.subscribe(params => {
      this.ngOnInit();
    })
  }

  ngOnInit(): void {
    // this.pokemonName = this.route.snapshot.params['name'];
    this.route.params.subscribe(params => {
      // PARAMS CHANGED
      this.pokemonName = params["name"];
    })
    this.getPokemonDetail(this.pokemonName);
    this.getPokemonTypeDetail(this.pokemonName);

  }

  getPokemon(value: string){
    console.log(value)
    this.router.navigateByUrl(this.router.url.replace(this.pokemonName,value));
  }

  private getPokemonDetail(name: string){
    this.pokemonService.getPokemonDetail(name).subscribe(data => {
      this.pokemonDetail = data;

      // Get previous pokemon name by id
      this.currentPokemonId = this.pokemonDetail["id"]-1;
      console.log(this.currentPokemonId)
      this.pokemonService.getPokemonName(this.currentPokemonId).subscribe(data => {
        this.prePokemon = data["name"];
        console.log("PrePokemon")
        console.log(this.prePokemon);
      })

      // Get next pokemon name by id
      this.currentPokemonId = this.pokemonDetail["id"]+1;
      console.log(this.currentPokemonId)
      this.pokemonService.getPokemonName(this.currentPokemonId).subscribe(data => {
        this.nextPokemon = data["name"];
        console.log("NextPokemon")
        console.log(this.nextPokemon);
      })
    })
  }

  private getPokemonTypeDetail(name: string){
    this.pokemonService.getPokemonDetail(name).subscribe(data => {
      for(var i of data["types"]){
        this.typeObject = this.pokemonTypeDetail.find(e => e["type"] === i["type"]["name"])

        // console.log("Pokemon Strong Against")
        // console.log(this.typeObject["Strong Against"])
        this.typeObject["Strong Against"].forEach(element => {
          this.strongAgainstList.push(element);
        });

        // console.log("Pokemon Weak Against")
        // console.log(this.typeObject["Weak Against"])
        this.typeObject["Weak Against"].forEach(element => {
          this.weakAgainstList.push(element);
        });

        // console.log("Pokemon Resistant To")
        // console.log(this.typeObject["Resistant To"])
        this.typeObject["Resistant To"].forEach(element => {
          this.resistantToList.push(element);
        });

        // console.log("Pokemon Vulnerable To")
        // console.log(this.typeObject["Vulnerable To"])
        this.typeObject["Vulnerable To"].forEach(element => {
          this.vulnerableToList.push(element);
        });
      }
    })
  }

  public getColor(typeName: string){
    let type = typeName.toLocaleLowerCase();

    if(type === 'normal'){
      return '#A8A77A';
    }else if(type === 'fire'){
      return '#EE8130';
    }else if(type === 'water'){
      return '#6390F0';
    }else if(type === 'electric'){
      return '#F7D02C';
    }else if(type === 'grass'){
      return '#7AC74C';
    }else if(type === 'ice'){
      return '#96D9D6';
    }else if(type === 'fighting'){
      return '#C22E28';
    }else if(type === 'poison'){
      return '#A33EA1';
    }else if(type === 'ground'){
      return '#E2BF65';
    }else if(type === 'flying'){
      return '#A98FF3';
    }else if(type === 'psychic'){
      return '#F95587';
    }else if(type === 'bug'){
      return '#A6B91A';
    }else if(type === 'rock'){
      return '#B6A136';
    }else if(type === 'ghost'){
      return '#735797';
    }else if(type === 'dragon'){
      return '#6F35FC';
    }else if(type === 'dark'){
      return '#705746';
    }else if(type === 'steel'){
      return '#B7B7CE';
    }else if(type === 'fairy'){
      return '#D685AD';
    }
  }

}
