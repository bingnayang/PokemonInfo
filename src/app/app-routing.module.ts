import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonErrorComponent } from './pokemon-error/pokemon-error.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

const routes: Routes = [
  {path: 'pokemon-list', component: PokemonListComponent},
  {path: 'pokemon-detail/:name', component: PokemonDetailComponent},
  {path: 'pokemon-error/:name', component: PokemonErrorComponent},
  {path: '', redirectTo: 'pokemon-list', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
