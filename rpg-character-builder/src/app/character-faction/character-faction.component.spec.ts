import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterFactionComponent } from './character-faction.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('CharacterFactionComponent', () => {
  let component: CharacterFactionComponent;
  let fixture: ComponentFixture<CharacterFactionComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterFactionComponent, HttpClientTestingModule]
    }).compileComponents();

    httpTestingController = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(CharacterFactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
      httpTestingController.verify();
    });

    

  it('should create the character faction component', () => {
    expect(component).toBeTruthy();
  });

  // Test 1: Handle errors when data is not found.
  it('should handle errors when data is not found', () => {
    const expectedMessage = 'No available factions. Check back later.';
    component.ngOnInit();
    const req = httpTestingController.expectOne(`http://localhost:3000/api/character-factions/`);
    req.flush('Not found', { status: 404, statusText: 'Factions not found' });
    expect(component.errorMessage).toEqual(expectedMessage);
  });

  // Test 2: Correctly fetch a list of character factions.
  it('should correctly fetch a list of character factions', () => {
    const mockFactions = [
      {
        name: "The Iron Brotherhood",
        description: "The Iron Brotherhood is a faction of brave and honorable warriors. They value strength, courage, and loyalty above all else. Their members are known for their iron will and unbreakable spirit."
      },
      {
        name: "The Arcane Order",
        description: "The Arcane Order is a faction of powerful mages. They seek knowledge and wisdom, and their magic is a tool to understand the mysteries of the universe. They are respected and feared for their magical prowess."
      },
      {
        name: "The Silent Knives",
        description: "The Silent Knives is a faction of skilled rogues. They value stealth, cunning, and precision. Their members are masters of the shadows, using their skills for espionage and assassination."
      },
      {
        name: "The Nature's Guardians",
        description: "The Nature's Guardians is a faction of druids and rangers. They are the protectors of the natural world, using their abilities to maintain the balance between civilization and nature."
      }
    ];
    component.ngOnInit();
    const req = httpTestingController.expectOne(`http://localhost:3000/api/character-factions/`);
    req.flush(mockFactions);
    expect(component.factions).toEqual(mockFactions);
  });


  // Test 3: Update the DOM with faction cards when data is loaded.
  it('should update the DOM with faction cards when data is loaded', () => {
    const mockFactions = [
      { name: "The Iron Brotherhood", description: "A faction of brave and honorable warriors." },
      { name: "The Arcane Order", description: "A faction of powerful mages." },
      { name: "The Silent Knives", description: "A faction of skilled rogues." },
      { name: "The Nature's Guardians", description: "A faction of druids and rangers." }
    ];

    component.factions = mockFactions;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('.faction-card');

    expect(cards.length).toEqual(mockFactions.length);
    expect(cards[0].querySelector('h2')?.textContent).toContain("The Iron Brotherhood");
  });
});