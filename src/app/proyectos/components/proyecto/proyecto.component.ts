import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.scss'],
})
export class ProyectoComponent implements OnInit {
  faCoffee = faCoffee;

  constructor() {}

  ngOnInit(): void {}
}
