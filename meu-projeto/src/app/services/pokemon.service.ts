import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  searchPokemon(name: string): Observable<Pokemon> {
    const url = `${this.apiUrl}${name}`;
    return this.http.get<Pokemon>(url);
  }

  getAll(): Observable<Pokemon[]> {
    const url = `${this.apiUrl}?limit=150`;
    return this.http.get(url, { observe: 'response' })
      .pipe(
        map((response: HttpResponse<any>) => {
          return response.body.results.map((pokemon: any) => {
            return {
              name: pokemon.name,
              url: pokemon.url
            } as Pokemon;
          });
        })
      );
  }
}
