import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterListComponent } from './character-list.component';
import { By } from '@angular/platform-browser';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a list of characters', () => {
    const fixture = TestBed.createComponent(CharacterListComponent);
    const component = fixture.componentInstance;
    component.characters = [
      { name: 'Arthas', gender: 'Male', class: 'Knight'},
      { name: 'Jaina', gender: 'Female', class: 'Wizard'}
    ];
    fixture.detectChanges();

    const rows = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(rows.length).toBe(2);
    expect(rows[0].textContent).toContain('Arthas');
    expect(rows[1].textContent).toContain('Jaina');
  });

  it('should display correct number of character rows', () => {
    component.characters = [
      { name: 'Arthas', gender: 'Male', class: 'Knight'},
      { name: 'Jaina', gender: 'Female', class: 'Wizard'}
    ];
    fixture.detectChanges();
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(2);
  });
});
