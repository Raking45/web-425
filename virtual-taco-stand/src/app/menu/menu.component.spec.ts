import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  /**Created by default when the component is generated
   * Unit Test 1
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  /**Unit Test 2 */
  it('should correctly display a list of tacos', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const menuItems = compiled.querySelectorAll('.menu-item');
    expect(menuItems.length).toEqual(component.menu.length)
  });
});
