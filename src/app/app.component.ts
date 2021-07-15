import { Component, OnInit } from '@angular/core';
import { faHome, faIdCard } from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  faHome = faHome;
  faIdCard = faIdCard;
  title = 'samuel10f';
  private underline;

  public navigationLinks = [
    {title: 'Proyectos', routerLink: '/proyectos'},
    {title: 'Blog', routerLink: '/blog'},
    {title: 'Contacto', routerLink: '/contacto'}
  ]

  ngOnInit(): void {
    this.underline = document.getElementById('LinkActiveUnderline');
  }

  setLinkHoverAnimation(linkIndex: number) {
    let linkWidth = 151  * linkIndex;
    this.underline.style.left = `${linkWidth}px`;
  }
}
