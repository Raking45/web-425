import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayersComponent } from './players.component';

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /** Week 3: Unit Test */
  it('should create the players component', () => {
    expect(component).toBeTruthy();
  });

  /** Week 3: Unit Test */
  it('should correctly display a list of characters', () => {
    const compiled=fixture.nativeElement as HTMLElement;
    const characterItems=compiled.querySelectorAll('.character-card');
    expect(characterItems.length).toEqual(component.character.length);
  });
});
