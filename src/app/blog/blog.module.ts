import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './components/post/post.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared.module';

const blogRoutes: Routes = [
  { path: '',  component: PostComponent }
];

export const blogRouting = RouterModule.forChild(blogRoutes);

@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    blogRouting,
    CommonModule,
    SharedModule
  ]
})
export class BlogModule { }
