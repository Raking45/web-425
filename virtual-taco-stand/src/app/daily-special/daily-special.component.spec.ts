import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailySpecialComponent } from './daily-special.component';

describe('DailySpecialComponent', () => {
  let component: DailySpecialComponent;
  let fixture: ComponentFixture<DailySpecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailySpecialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailySpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
