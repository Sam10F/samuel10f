import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared.module';

const proyectosRoutes: Routes = [{ path: '', component: ProyectoComponent }];

export const proyectosRouting = RouterModule.forChild(proyectosRoutes);

@NgModule({
  declarations: [ProyectoComponent],
  imports: [proyectosRouting, CommonModule, SharedModule],
})
export class ProyectosModule {}
