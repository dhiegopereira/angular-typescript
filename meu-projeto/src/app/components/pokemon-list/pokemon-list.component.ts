import { PokemonService } from './../../services/pokemon.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {

  pokemons: any[] = [];

  constructor(private pokemonService: PokemonService) {
    this.getPokemons();
  }


  getPokemons() {
    this.pokemonService.getAll().subscribe(pokemons => {
      this.pokemons = pokemons;
    });
  }



}
