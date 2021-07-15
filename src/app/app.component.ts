import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  private underline;
  private navigationMenu;

  public navigationLinks = [
    {title: 'Proyectos', routerLink: '/blog'},
    {title: 'Blog', routerLink: '/proyectos'},
    {title: 'Contacto', routerLink: '/contacto'}
  ]

  ngOnInit(): void {
    this.underline = document.getElementById('LinkActiveUnderline');
    this.navigationMenu = document.getElementById('NavigationMenu');
    this.restartLinkActiveUnderline();
  }

  ngAfterViewInit() {
    window.dispatchEvent(new Event('resize'));  
  }

  moveLinkActiveUnderline(linkIndex: number) {
    this.underline.style.width = `${this.navigationMenu.children[0].offsetWidth}px`;
    let linkWidth = this.getNavigationLinkWidth() * linkIndex;
    this.underline.style.left = `${linkWidth}px`;
  }

  restartLinkActiveUnderline() {
    const navigationLinks = this.navigationMenu.childNodes;
    navigationLinks.forEach(function(item, index){
      if (item.classList && item.classList.contains('border-b')) {
        this.moveLinkActiveUnderline(index);
        return;
      }
    }.bind(this));
  }

  getNavigationLinkWidth() {
    return this.navigationMenu.offsetWidth / this.navigationLinks.length;
  }
}
