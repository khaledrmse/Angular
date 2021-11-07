import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Pokemon } from './Pokemon';
import { POKEMONS } from './mock_pokemons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'pokemonapp';
  private pokemons: Pokemon[] = [];

  ngOnInit() {
    this.pokemons=POKEMONS;
  }

  selectPokemon(pokemon: Pokemon) {
    console.log('Vous avez selectionné ' + pokemon.name);
  }
}
