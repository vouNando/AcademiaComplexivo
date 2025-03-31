import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Cursos } from '../../utils/cursos';
import { ActivatedRoute } from '@angular/router';
import * as cursosData from '../../../../public/json/cursosData.json';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [NgIf,RouterLink,RouterLinkActive],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  id: number = 0;
  curso?: Cursos;

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      console.log(this.id);

      // Find the product by ID
      this.curso = ((cursosData as any).default as Cursos[])
        .find(curso => curso.id === this.id);
    });
  }

}
