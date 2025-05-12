import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DailySpecialComponent } from './daily-special.component';

describe('DailySpecialComponent', () => {
  let component: DailySpecialComponent;
  let fixture: ComponentFixture<DailySpecialComponent>;
  let httpTestingController:HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailySpecialComponent, HttpClientTestingModule]
    })
    .compileComponents();

    httpTestingController=TestBed.inject(HttpTestingController);

    fixture = TestBed.createComponent(DailySpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle error when daily special is not found', () => {
    const expectedMessage = 'No special today. Check back tomorrow!';
    const req = httpTestingController.expectOne(`http://localhost:3000/api/dailyspecials?day=${component.dayOfTheWeek}`);
    req.flush('Special not found', { status:404, statusText:'Not Found' });

    expect(component.noSpecialMessage).toEqual(expectedMessage);
  });

  it('should update dailySpecial when a daily special is found', () => {
    const mockSpecial = {
      day:'Monday',
      name:'Carnitas Taco',
      description:'Slow-cooked pork with fresh cilantro, onions, and salsa on a corn tortilla.',
      price:2.60
    }
    const req = httpTestingController.expectOne(`http://localhost:3000/api/dailyspecials?day=${component.dayOfTheWeek}`);
    req.flush(mockSpecial);

    expect(component.dailySpecial).toEqual(mockSpecial);
  });
});
