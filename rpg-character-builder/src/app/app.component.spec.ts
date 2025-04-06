import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { PlayersComponent } from './players/players.component';
import { ActivatedRoute, Routes, Router } from '@angular/router';

describe('AppComponent(Standalone)', () => {
    const routes:Routes = [
      { path:'players',component:PlayersComponent }
    ];

    beforeEach(async () => {
      const activatedRouteStub = {
        snapshot: {
          paramMap: {
            get: () => 'staticValue',
          },
        },
        queryParams: of({}),
      };

    await TestBed.configureTestingModule({
      imports: [AppComponent, PlayersComponent, RouterTestingModule.withRoutes(routes)],
      providers: [
        { provide:ActivatedRoute, useValue:activatedRouteStub },
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  /** Week 3: Unit Test */
  it('should have correct route for Player Component', () => {
    const router = TestBed.inject(Router);
    const route = router.config.find(r=>r.path==='players');
    expect(route).toBeDefined();
    if (route) {
      expect(route.component).toBe(PlayersComponent);
    }
  });
});
