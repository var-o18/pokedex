import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { ListaPokemon, PokemonDetalle } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  url = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  dameTodos(desde: number, limite: number): Observable<ListaPokemon> {
    const ruta = this.url + '/pokemon?offset=' + desde + '&limit=' + limite;
    return this.http.get<ListaPokemon>(ruta);
  }

  dameDetalle(nombreOId: string | number): Observable<PokemonDetalle> {
    const ruta = this.url + '/pokemon/' + nombreOId;
    return this.http.get<PokemonDetalle>(ruta);
  }

  dameAleatorios(cantidad: number): Observable<PokemonDetalle[]> {
    const peticiones = [];
    for (let i = 0; i < cantidad; i++) {
      const id = Math.floor(Math.random() * 1000) + 1;
      peticiones.push(this.dameDetalle(id));
    }
    return forkJoin(peticiones);
  }
}
