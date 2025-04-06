import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { MenuComponent } from './menu/menu.component';
import { Routes, Router } from '@angular/router';

describe('AppComponent(StandAlone)', () => {
  beforeEach(async () => {
    const activatedRouteStub = {
      snapshot: {
        paramMap: {
          get: () => 'staticValue',
        },
      },
      queryParams: of({}),
    };
    const routes:Routes = [
      {path:'menu',component:MenuComponent}
    ]

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        MenuComponent
      ],
      providers: [
        {provide:ActivatedRoute,useValue:activatedRouteStub},
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  /**Week 3: Unit Test 3 */
  it('should have correct route for Menu Component', () => {
    const router=TestBed.inject(Router);
    const route=router.config.find(r => r.path === 'menu');
    expect(route).toBeDefined();
    if(route) {
      expect(route.component).toBe(MenuComponent);
    }
  });
});
