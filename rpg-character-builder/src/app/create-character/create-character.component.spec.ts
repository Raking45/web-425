import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateCharacterComponent } from './create-character.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { AuthService } from '../auth.service';

describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;
  let authServiceMock: any;

  beforeEach(async () => {
    authServiceMock = {
      isSignedIn: jasmine.createSpy('isSignedIn').and.returnValue(true),
      getAuthState: () => of(true)
    };

    await TestBed.configureTestingModule({
      imports: [CreateCharacterComponent, FormsModule],
      providers: [
        { provide: AuthService, useValue: authServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  

  // Test 1: Should create character component.
  it('should create the create character component', () => {
    expect(component).toBeTruthy();
  });
  
  // Test 2: Should add a character with correct customization.
  it('should add a character with correct customization', () => {
    component.name = 'Isabella';
    component.gender = 'Female';
    component.class = 'Druid';
    
    component.addCharacter();

    expect(component.characters.length).toBe(1);
    const char = component.characters[0];
    expect(char.name).toBe('Isabella');
    expect(char.gender).toBe('Female');
    expect(char.class).toBe('Druid');
  });

  // Test 3: Should reset form fields after resetForm is called.
  it('should reset form fields to default values after resetForm is called', () => {
    component.name = 'Robert';
    component.gender = 'Male';
    component.class = 'Wizard';

    component.resetForm();

    expect(component.name).toBe('');
    expect(component.gender).toBe('Male');
    expect(component.class).toBe('Warrior');
  });

  // Test 4: Should correctly rend index in table starting at 1.
  it('should display table index starting at 1', () => {
    component.characters = [
      { name: 'Isabella', gender: 'Female', class: 'Druid'},
      { name: 'Robert', gender: 'Male', class: 'Wizard'},
    ];
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    const firstIndex = rows[0].query(By.css('td')).nativeElement.textContent.trim();
    const secondIndex = rows[1].query(By.css('td')).nativeElement.textContent.trim();

    expect(firstIndex).toBe('1');
    expect(secondIndex).toBe('2');
  });

  // Test 5: Should generate a random character Id between 1 & 1000
  it('should generate a random character Id between 1 & 1000 without decimal places', () => {
    const id = component.generateRandomId();

    expect(id).toBeGreaterThanOrEqual(1);
    expect(id).toBeLessThanOrEqual(1000);
    expect(Number.isInteger(id)).toBeTrue();
  });
});
