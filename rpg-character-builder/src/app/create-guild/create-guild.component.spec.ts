import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateGuildComponent } from './create-guild.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

describe('CreateGuildComponent', () => {
  let component: CreateGuildComponent;
  let fixture: ComponentFixture<CreateGuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateGuildComponent, ReactiveFormsModule, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateGuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have an invalid form initially', () => {
    expect(component.guildForm.valid).toBeFalse();
  });

  it('should validate form as valid when all fields are filled correctly', () => {
    component.guildForm.patchValue({
      guildName: 'Guild of Warriors',
      description: 'A guild for warriors.',
      type: 'Competitive',
      notificationPreference: 'Email',
      acceptTerms: true
    });
    expect(component.guildForm.valid).toBeTrue();
  });

  it('should not submit the form if form is invalid', () => {
    const initialGuildCount = component.guilds.length;
    component.onSubmit();
    expect(component.guilds.length).toBe(initialGuildCount);
    expect(component.submitted).toBeTrue();
  });

  it('should add a guild when form is valid and submitted', () => {
    component.guildForm.patchValue({
      guildName: 'Guild of Wizards',
      description: 'A guild for wizards.',
      type: 'Casual',
      notificationPreference: 'In-App',
      acceptTerms: true
    });
    component.onSubmit();
    expect(component.guilds.length).toBe(1);
    expect(component.guilds[0].guildName).toEqual('Guild of Wizards');
    expect(component.submitted).toBeFalse();
  });

  it('should disable the submit button when the form is invalid', () => {
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement;
    expect(button.disabled).toBeTrue;
  });

  it('should enable the submit button when the form is valid', () => {
    component.guildForm.patchValue({
      guildName: 'Guild of Barbarians',
      description: 'AAAAARRRRGGGGHHHH',
      type: 'Competitive',
      notificationPreference: 'SMS',
      acceptTerms: true
    });
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement;
    expect(button.disabled).toBeTruthy();
  });
});
