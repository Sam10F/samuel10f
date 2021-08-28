import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public underline;
  private navigationMenu;

  public navigationLinks = [
    {
      title: 'Proyectos',
      routerLink: '/proyectos',
    },
    {
      title: 'Blog',
      routerLink: '/blog',
    },
    {
      title: 'Contacto',
      routerLink: '/contacto',
    },
  ];

  ngOnInit(): void {
    this.underline = document.getElementById('LinkActiveUnderline');
    this.navigationMenu = document.getElementById('NavigationMenu');
    this.moveLinkActiveUnderline(0);
  }

  moveLinkActiveUnderline(linkIndex: number): void {
    const linkWidth = this.getNavigationLinkWidth() * linkIndex;
    this.underline.style.left = `${linkWidth}px`;
  }

  restartLinkActiveUnderline(): void {
    this.moveLinkActiveUnderline(this.getNavigationMenuActiveIndex());
  }

  getNavigationMenuActiveIndex(): number {
    let activeIndex = 0;

    const navigationLinks = this.navigationMenu.childNodes;
    navigationLinks.forEach((item, index: number) => {
      if (item.classList && item.classList.contains('border-b')) {
        activeIndex = index;
        return;
      }
    });
    return activeIndex;
  }

  getNavigationLinkWidth(): number {
    return this.navigationMenu.offsetWidth / this.navigationLinks.length;
  }
}
