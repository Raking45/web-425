import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuildListComponent } from './guild-list.component';
import { By } from '@angular/platform-browser';

describe('GuildListComponent', () => {
  let component: GuildListComponent;
  let fixture: ComponentFixture<GuildListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuildListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuildListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not display the section if guilds list is empty', () => {
    component.guilds = [];
    fixture.detectChanges();

    const section = fixture.debugElement.query(By.css('section'));
    expect(section).toBeNull();
  });

  it('should display a list of guilds', () => {
    const fixture = TestBed.createComponent(GuildListComponent);
    const component = fixture.componentInstance;
    component.guilds = [
      {
        guildName: 'Night Watch',
        description: 'Protectors of the Night.',
        type: 'Competitive',
        notificationPreferences: 'Email'
      },
      {
        guildName: 'Arcane Circle',
        description: 'Mages United.',
        type: 'Social',
        notificationPreferences: 'In-App'
      }
    ];
    fixture.detectChanges();
    const cards = fixture.nativeElement.querySelectorAll('.guild-card');
    expect(cards.length).toBe(2);
    expect(cards[0].textContent).toContain('Night Watch');
    expect(cards[1].textContent).toContain('Arcane Circle');
  });

  it('should display correct number of guild cards', () => {
    component.guilds = [
      {
        guildName: 'Knights',
        description: 'Preservers of Justice.',
        type: 'Competitive',
        notificationPreferences: 'Email'
      },
      {
        guildName: 'Barbarians',
        description: 'We Bash.',
        type: 'Competitive',
        notificationPreferences: 'In-App'
      },
    ];
    fixture.detectChanges();

    const cards = fixture.debugElement.queryAll(By.css('.guild-card'));
    expect(cards.length).toBe(2);
  });
});
