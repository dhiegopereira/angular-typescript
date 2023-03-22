import { PokemonModule } from './app/modules/pokemon/pokemon.module';
import { PokemonComponent } from './app/components/pokemon/pokemon.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'pokemon', component: PokemonModule },
];
