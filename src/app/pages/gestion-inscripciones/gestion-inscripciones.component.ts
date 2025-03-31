import { Component, inject} from '@angular/core';
import { Firestore, collection, collectionData, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-gestion-inscripciones',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './gestion-inscripciones.component.html',
  styleUrl: './gestion-inscripciones.component.css'
})
export class GestionInscripcionesComponent {
  private firestore: Firestore = inject(Firestore);
  inscripciones$: Observable<any[]>;
  inscripcionForm: FormGroup;
  editando: boolean = false;
  idActual: string | null = null;

  constructor(private fb: FormBuilder) {
    const inscripcionesRef = collection(this.firestore, 'inscripciones');
    this.inscripciones$ = collectionData(inscripcionesRef, { idField: 'id' });

    this.inscripcionForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      curso: ['', Validators.required],
    });
  }

  cargarDatos(inscripcion: any) {
    this.inscripcionForm.patchValue(inscripcion);
    this.idActual = inscripcion.id;
    this.editando = true;
  }

  async actualizarInscripcion() {
    if (!this.idActual || this.inscripcionForm.invalid) return;

    try {
      const inscripcionRef = doc(this.firestore, `inscripciones/${this.idActual}`);
      await updateDoc(inscripcionRef, this.inscripcionForm.value);
      alert('Inscripción actualizada con éxito');
      this.inscripcionForm.reset();
      this.editando = false;
      this.idActual = null;
    } catch (error) {
      console.error('Error al actualizar inscripción:', error);
    }
  }

  async eliminarInscripcion(id: string) {
    if (!confirm('¿Estás seguro de que deseas eliminar esta inscripción?')) return;
    try {
      const inscripcionRef = doc(this.firestore, `inscripciones/${id}`);
      await deleteDoc(inscripcionRef);
      alert('Inscripción eliminada con éxito');
    } catch (error) {
      console.error('Error al eliminar inscripción:', error);
    }
  }
}
