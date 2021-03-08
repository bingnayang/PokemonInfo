import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseURL = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20";
  private pokemonDetail = "https://pokeapi.co/api/v2/pokemon/";

  constructor(private httpClient: HttpClient) { }

  getPokemonList(): Observable<any>{
    return this.httpClient.get<any>(`${this.baseURL}`);
  }

  getPokemonDetail(name: string): Observable<any>{
    return this.httpClient.get<any>(`${this.pokemonDetail}${name}`)
  }
}
