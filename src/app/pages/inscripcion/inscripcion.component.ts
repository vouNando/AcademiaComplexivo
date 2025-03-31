import { Component, inject} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inscripcion',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './inscripcion.component.html',
  styleUrl: './inscripcion.component.css'
})
export class InscripcionComponent {
  private firestore: Firestore = inject(Firestore);
  inscripcionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.inscripcionForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      curso: ['', Validators.required]
    });
  }

  async registrarInscripcion() {
    if (this.inscripcionForm.invalid) return;
    try {
      const inscripcionesRef = collection(this.firestore, 'inscripciones');
      await addDoc(inscripcionesRef, this.inscripcionForm.value);
      alert('Inscripción realizada con éxito');
      this.inscripcionForm.reset();
    } catch (error) {
      console.error('Error al registrar la inscripción:', error);
    }
  }
}
