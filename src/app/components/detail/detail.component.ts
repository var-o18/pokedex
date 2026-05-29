import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonDetalle } from '../../models/pokemon.model';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  pokemon: PokemonDetalle | null = null;
  cargando = true;
  error = false;

  constructor(
    private route: ActivatedRoute,
    private serv: PokemonService
  ) {
    const id = this.route.snapshot.params['id'];
    this.serv.dameDetalle(id).subscribe({
      next: data => {
        this.pokemon = data;
        this.cargando = false;
      },
      error: () => {
        this.error = true;
        this.cargando = false;
      }
    });
  }

  colorTipo(tipo: string): string {
    const colores: Record<string, string> = {
      fire: '#f08030',
      water: '#6890f0',
      grass: '#78c850',
      electric: '#f8d030',
      ice: '#98d8d8',
      fighting: '#c03028',
      poison: '#a040a0',
      ground: '#e0c068',
      flying: '#a890f0',
      psychic: '#f85888',
      bug: '#a8b820',
      rock: '#b8a038',
      ghost: '#705848',
      dragon: '#7038f8',
      dark: '#705848',
      steel: '#b8b8d0',
      fairy: '#ee99ac'
    };
    return colores[tipo] ?? '#777';
  }
}
