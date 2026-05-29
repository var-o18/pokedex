import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonBasico } from '../../models/pokemon.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent {
  lista: PokemonBasico[] = [];
  desde: number = 0;
  total: number = 0;

  constructor(private serv: PokemonService) {
    this.cargar();
  }

  cargar() {
    this.serv.dameTodos(this.desde, 20).subscribe(res => {
      this.lista = res.results;
      this.total = res.count;
    });
  }

  siguiente() {
    if (this.desde + 20 < this.total) {
      this.desde = this.desde + 20;
      this.cargar();
    }
  }

  anterior() {
    if (this.desde > 0) {
      this.desde = this.desde - 20;
      this.cargar();
    }
  }
}
