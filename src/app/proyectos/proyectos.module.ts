import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const proyectosRoutes: Routes = [{ path: '', component: ProyectosComponent }];

export const proyectosRouting = RouterModule.forChild(proyectosRoutes);

@NgModule({
  declarations: [ProyectosComponent],
  imports: [proyectosRouting, CommonModule, SharedModule],
})
export class ProyectosModule {}
