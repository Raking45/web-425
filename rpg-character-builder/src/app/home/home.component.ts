import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div class="home-container">
      <h1>Welcome to RPG Character Builder</h1>
      <p class="intro">
        Embark on an epic journey where your imagination shapes the ultimate hero.  The RPG Character Builder allows you to create and customize unique characters, preparing them for grand adventures in a world of magic, mystery, and danger.  Whether you dream of becoming a fearless warrior, a wise and powerful wizard, or a cunning rogue lurking in the shadows, this tool provides everything you need to bring your fantasy persona to life.
      </p>
      <p class="intro">
        With an intuitive interface and deep customization options, you can define your character's strengths, weaknesses, and special abilities.  Choose their race, class, and attributes to craft a hero that fits your personal play style.  Will you build an unstoppable tank with immense strength and endurance, or a nimble rogue who strikes from the darkness with deadly precision?  Perhaps your destiny lies in the arcane arts, harnessing powerful spells to bend reality itself.
      </p>
      <p class="intro">
        Beyond stats and abilities, bring your character's personality to life with backstories, motivations, and unique traits.  Whether you are preparing for a tabletop campaign, a video game adventure, or crafting an original fantasy world, the RPG Character Builder is your gateway to unlimited storytelling possibilities.  Your legend begins here - what kind of hero will you become?
      </p>
      <!-- Barbarian Section -->
      <section class="character-class">
        <h2>Barbarian</h2>
        <div class="images">
          <img src="./assets/barbarian-male.png" alt="Male Barbarian">
          <img src="./assets/barbarian-female.jpg" alt="Female Barbarian">
        </div>
        <p class="description">
          Barbarians are fierce warriors driven by raw emotion and sheer physical power.  Their rage fuels them in battle, making them nearly unstoppable as they crush their enemies with brute force.
        </p>
        <ul class="stats">
          <li><strong>Strength:</strong> 20</li>
          <li><strong>Dexterity:</strong> 12</li>
          <li><strong>Constitution:</strong> 18</li>
          <li><strong>Intelligence:</strong> 8</li>
          <li><strong>Wisdom:</strong> 10</li>
          <li><strong>Charisma:</strong> 10</li>
        </ul>
      </section>

      <!-- Warrior Section -->
      <section class="character-class">
        <h2>Warrior</h2>
        <div class="images">
          <img src="./assets/warrior-male.png" alt="Male Warrior">
          <img src="./assets/warrior-female.png" alt="Female Warrior">
        </div>
        <p class="description">
          Warriors are the backbone of any adventuring party, excelling in combat with unparalleled strength and resilience. Trained in heavy armor and massive weapons, they charge into battle without fear, standing as the shield between their allies and danger.
        </p>
        <ul class="stats">
          <li><strong>Strength:</strong> 18</li>
          <li><strong>Dexterity:</strong> 12</li>
          <li><strong>Constitution:</strong> 16</li>
          <li><strong>Intelligence:</strong> 8</li>
          <li><strong>Wisdom:</strong> 10</li>
          <li><strong>Charisma:</strong> 10</li>
        </ul>
      </section>

      <!-- Knight Section -->
      <section class="character-class">
        <h2>Knight</h2>
        <div class="images">
          <img src="./assets/knight-male.png" alt="Male Knight">
          <img src="./assets/knight-female.png" alt="Female Knight">
        </div>
        <p class="description">
          Knights are noble warriors bound by honor and duty. Clad in heavy armor and wielding powerful weapons, they stand as paragons of valor and chivalry, defending the weak and upholding justice.
        </p>
        <ul class="stats">
          <li><strong>Strength:</strong> 18</li>
          <li><strong>Dexterity:</strong> 10</li>
          <li><strong>Constitution:</strong> 16</li>
          <li><strong>Intelligence:</strong> 12</li>
          <li><strong>Wisdom:</strong> 14</li>
          <li><strong>Charisma:</strong> 16</li>
        </ul>
      </section>

      <!-- Priest Section -->
      <section class="character-class">
        <h2>Priest</h2>
        <div class="images">
          <img src="./assets/priest-male.png" alt="Male Priest">
          <img src="./assets/priest-female.png" alt="Female Priest">
        </div>
        <p class="description">
          Priests are devoted to divine powers, channeling holy magic to heal and support their allies. Their faith grants them strength, allowing them to smite evil and restore hope in the darkest times.
        </p>
        <ul class="stats">
          <li><strong>Strength:</strong> 10</li>
          <li><strong>Dexterity:</strong> 10</li>
          <li><strong>Constitution:</strong> 12</li>
          <li><strong>Intelligence:</strong> 14</li>
          <li><strong>Wisdom:</strong> 18</li>
          <li><strong>Charisma:</strong> 16</li>
        </ul>
      </section>

      <!-- Wizard Section -->
      <section class="character-class">
        <h2>Wizard</h2>
        <div class="images">
          <img src="./assets/wizard-male.png" alt="Male Wizard">
          <img src="./assets/wizard-female.png" alt="Female Wizard">
        </div>
        <p class="description">
          Masters of the arcane arts, wizards harness the raw power of magic to shape the world around them. Whether wielding destructive fire or bending reality itself, wizards are the scholars of the battlefield, using intellect and strategy to overcome foes.
        </p>
        <ul class="stats">
          <li><strong>Strength:</strong> 8</li>
          <li><strong>Dexterity:</strong> 12</li>
          <li><strong>Constitution:</strong> 10</li>
          <li><strong>Intelligence:</strong> 18</li>
          <li><strong>Wisdom:</strong> 14</li>
          <li><strong>Charisma:</strong> 12</li>
        </ul>
      </section>

      <!-- Rogue Section -->
      <section class="character-class">
        <h2>Rogue</h2>
        <div class="images">
          <img src="./assets/rogue-male.png" alt="Male Rogue">
          <img src="./assets/rogue-female.png" alt="Female Rogue">
        </div>
        <p class="description">
          The shadows are a rogue's domain, where they strike unseen and vanish before retaliation. Masters of agility and deception, rogues can outmaneuver any foe, whether through sheer speed, stealth, or a well-placed dagger in the dark.
        </p>
        <ul class="stats">
          <li><strong>Strength:</strong> 12</li>
          <li><strong>Dexterity:</strong> 18</li>
          <li><strong>Constitution:</strong> 12</li>
          <li><strong>Intelligence:</strong> 14</li>
          <li><strong>Wisdom:</strong> 10</li>
          <li><strong>Charisma:</strong> 14</li>
        </ul>
      </section>

      <!-- Ranger Section -->
      <section class="character-class">
        <h2>Ranger</h2>
        <div class="images">
          <img src="./assets/ranger-male.png" alt="Male Ranger">
          <img src="./assets/ranger-female.png" alt="Female Ranger">
        </div>
        <p class="description">
          Rangers are expert hunters and survivalists, thriving in the wilds with unmatched precision and agility. Whether tracking enemies or striking from afar, they are masters of archery and guerrilla tactics.
        </p>
        <ul class="stats">
          <li><strong>Strength:</strong> 14</li>
          <li><strong>Dexterity:</strong> 18</li>
          <li><strong>Constitution:</strong> 14</li>
          <li><strong>Intelligence:</strong> 12</li>
          <li><strong>Wisdom:</strong> 14</li>
          <li><strong>Charisma:</strong> 10</li>
        </ul>
      </section>

      <!-- Druid Section -->
      <section class="character-class">
        <h2>Druid</h2>
        <div class="images">
          <img src="./assets/druid-male.png" alt="Male Druid">
          <img src="./assets/druid-female.png" alt="Female Druid">
        </div>
        <p class="description">
          Druids are guardians of nature, wielding primal magic to heal, protect, and transform. They command the forces of the wild, calling upon the earth, air, fire, and water to aid them in battle.
        </p>
        <ul class="stats">
          <li><strong>Strength:</strong> 10</li>
          <li><strong>Dexterity:</strong> 12</li>
          <li><strong>Constitution:</strong> 14</li>
          <li><strong>Intelligence:</strong> 14</li>
          <li><strong>Wisdom:</strong> 18</li>
          <li><strong>Charisma:</strong> 12</li>
        </ul>
      </section>
      </div>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=MedievalSharp&family=Roboto:wght@300;700&family=Playfair+Display:wght@500&display=swap');

    .home-container {
      text-align: center;
      padding: 2rem;
      background-color: #1a1a2e;
      color: #e0e0e0;
    }

    h1 {
      font-family: 'MedievalSharp', cursive;
      font-size: 2.5rem;
      color: #f1c40f;
    }

    .intro {
      font-family: 'Playfair Display', serif;
      font-size: 1.2rem;
      max-width: 800px;
      margin: 0 auto 2rem;
    }

    .character-class {
      background-color: #0f3460;
      padding: 1.5rem;
      margin: 1rem auto;
      border-radius: 10px;
      box-shadow: 0 0 15px rgba(255, 215, 0, 0.3);
      max-width: 800px;
    }

    h2 {
      font-family: 'MedievalSharp', cursive;
      font-size: 2rem;
      color: #f1c40f;
    }

    .images {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 1rem;
    }

    .images img {
      width: 45%;
      max-width: 300px;
      border: 3px solid #f39c12;
      border-radius: 8px;
    }

    .description {
      font-family: 'Playfair Display', serif;
      font-size: 1.1rem;
      margin-bottom: 1rem;
    }

    .stats {
      list-style: none;
      padding: 0;
      font-family: 'Roboto', sans-serif;
    }

    .stats li {
      font-size: 1rem;
      margin: 5px 0;
      padding: 5px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 5px;
      display: inline-block;
      min-width: 120px;
    }
    `]
})
export class HomeComponent {

}
