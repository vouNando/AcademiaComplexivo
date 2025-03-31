import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { warningsGuard } from './guards/warnings/warnings.guard';
import { LoginComponent } from './pages/login/login.component';
import { canActivate,redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { ProductFormComponent } from './pages/product-form/product-form.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { InscripcionComponent } from './pages/inscripcion/inscripcion.component';
import { GestionInscripcionesComponent } from './pages/gestion-inscripciones/gestion-inscripciones.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'producto', component: ProductoComponent },
    { path: 'producto/:id', component: ProductoComponent },
    {
        path: 'productos',
        component: ProductosComponent,
        ...canActivate(() => redirectUnauthorizedTo(["/login"]))
    },
    { path: 'product-form/:id', component: ProductFormComponent },
    { path: 'inscripcion', component: InscripcionComponent},
    { path: 'gestion', component: GestionInscripcionesComponent, ...canActivate(() => redirectUnauthorizedTo(["/login"]))},

  
    
];
