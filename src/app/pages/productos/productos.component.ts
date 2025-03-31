import { Component } from '@angular/core';
import { Cursos } from '../../utils/cursos';
import * as cursosData from '../../../../public/json/cursosData.json';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Renderer2 } from '@angular/core'; // Importa Renderer2

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

  cursos : Cursos[]=(cursosData as any).default;
  constructor(private router: Router, private renderer: Renderer2,) { }

  onClickProducto(curso: Cursos): void {
    this.router.navigate(['/producto', curso.id]);
  }
  goToProduct(id: number) {
    this.router.navigate(['/products', id]);
  }

}
