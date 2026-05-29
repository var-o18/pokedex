import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonDetalle } from '../../models/pokemon.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  misPokemon: PokemonDetalle[] = [];
  textoBusqueda = '';

  constructor(
    private serv: PokemonService,
    private router: Router
  ) {
    this.serv.dameAleatorios(8).subscribe(data => {
      this.misPokemon = data;
    });
  }

  buscar() {
    const nombre = this.textoBusqueda.trim().toLowerCase();
    if (nombre !== '') {
      this.router.navigate(['/pokemon', nombre]);
    }
  }
}
