import { routes } from './app-routing.module';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let app;
  let fixture;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have navigation link underline element after onInit`, () => {
    app.ngOnInit();
    expect(app.underline).toBeTruthy();
  });

  it(`should have navigationMenu element after onInit`, () => {
    app.ngOnInit();
    expect(app.navigationMenu).toBeTruthy();
  });

  it(`function moveLinkActiveUnderline works`, () => {
    app.ngOnInit();
    app.moveLinkActiveUnderline(2);
    expect(app.underline.style.left).toBe(`${app.getNavigationLinkWidth()}px`);
  });

  it(`function getNavigationMenuActiveIndex works`, fakeAsync(() => {
    fixture.detectChanges();
    fixture.debugElement.query(By.css('[linkIndex="0"]')).nativeElement.click();
    expect(app.getNavigationMenuActiveIndex()).toBe(0);

    tick();
    fixture.debugElement.query(By.css('[linkIndex="1"]')).nativeElement.click();
    expect(app.getNavigationMenuActiveIndex()).toBe(1);
  }));
});
