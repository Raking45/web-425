import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface CharacterItem {
  name: string;
  gender: string;
  race: string;
  class: string;
  level: number;
  experience: number;
  faction: string;
  startingLocation: string;
  funFact: string;
  image: string;
}

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="players-container">
      <h1>Meet the Heroes</h1>
      
      <ul class="character-container">
        @for (item of character;track character) {
        <li class="character-card">
        <div class="card">
          <img class="character-image" [src]="item.image" [alt]="item.name"/>
          <h2>{{ item.name }}</h2>
          <p><strong>Gender:</strong> {{ item.gender }}</p>
          <p><strong>Class:</strong> {{ item.class }}</p>
          <p><strong>Faction:</strong> {{ item.faction }}</p>
          <p><strong>Starting Location:</strong> {{ item.startingLocation }}</p>
          <p><strong>Level:</strong> {{ item.level }}</p>
          <p><strong>Experience:</strong> {{ item.experience }}</p>
          <p class="fun-fact"><strong>Fun Fact:</strong> {{ item.funFact }}</p>
          </div>
        </li>
        }
      </ul>
    </div> 
  `,
  styles: `
  @import url('https://fonts.googleapis.com/css2?family=MedievalSharp&family=Roboto:wght@300;700&display=swap');
  
  .character-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: center;
    padding: 2rem;
  }
  
  ul li {
    list-style-type: none;
  }

  .character-card {
    flex: 0 1 calc(28.33% - 20px);
    background-color: #0f3460;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 0 15px rgba(255, 215, 0, 0.3);
    text-align: left;
    min-height: 250px;
    margin: auto;
    margin-bottom: 25px;
  }
  
  .card {
    padding: 20px;
  }

  .character-card h2 {
    font-family: 'MedievalSharp', cursive;
    font-size: 1.8rem;
    color: #f1c40f;
    margin-bottom: 1rem;
  }
  
  .character-card p {
    font-family: 'Roboto', sans-serif;
    margin: 5px 0;
  }
  
  .character-card .character-image {
    position: relative;
    width: 60px;
    height: 70px;
    border-radius: 50%;
    border: 2px solid #f39c12;
    background-size: 100%;
  }
  
  h1 {
    font-family: 'MedievalSharp', cursive;
    font-size: 2.5rem;
    color: #f1c40f;
  }
  
  p {
    font-size: 1.1rem;
  }
  
  .fun-fact {
    font-style: italic;
    color: #f39c12;
  }
  `
})
export class PlayersComponent {
  character:CharacterItem[];
  constructor() {
    this.character=[
    {
      name:"Thorn",
      gender:"Male",
      race:"Dwarf",
      class:"Warrior",
      level: 12,
      experience: 3400,
      faction:"The Iron Brotherhood",
      startingLocation:"Ironhold",
      funFact:"Thorn once single-handedly defeated a dragon.",
      image:"./assets/warrior-male.png"
    },
    {
      name:"Lyra",
      gender:"Female",
      race:"Elf",
      class:"Mage",
      level: 10,
      experience: 2750,
      faction:"The Arcane Order",
      startingLocation:"Mystwood",
      funFact:"Lyra can cast spells without chanting.",
      image:"./assets/wizard-female.png"
    },
    {
      name:"Shadarian",
      gender:"Male",
      race:"Hafling",
      class:"Rogue",
      level: 9,
      experience: 2200,
      faction:"Silent Blades",
      startingLocation:"Dark Alley",
      funFact:"Shadarian has never been caught stealing.",
      image:"./assets/rogue-male.png"
    },
    {
      name:"Darius",
      gender:"Male",
      race:"Human",
      class:"Knight",
      level:15,
      experience:4500,
      faction:"King's Guard",
      startingLocation:"Castle Ardent",
      funFact:"Darius once blocked an arrow with his teeth.",
      image:"./assets/knight-male.png"
    },
    {
      name:"Mira Stonesong",
      gender:"Female",
      race:"Dwarf",
      class:"Bard",
      level:9,
      experience:2400,
      faction:"The Mountain Choir",
      startingLocation:"Hearthdeep Hall",
      funFact:"Her singing can literally cause minor earthquakes.",
      image:"./assets/rogue-female.png"
    },
    {
      name:"Fenric Hollowtide",
      gender:"Male",
      race:"Human",
      class:"Necromancer",
      level:13,
      experience:3600,
      faction:"The Bone Archive",
      startingLocation:"Blackmarsh",
      funFact:"Uses undead skeletons to help in the herb garden.",
      image:"./assets/wizard-male.png"
    },
    {
      name:"Kaelin Duskrun",
      gender:"Female",
      race:"Hafling",
      class:"Rogue",
      level:11,
      experience:3200,
      faction:"The Silent Blades",
      startingLocation:"Thieve's Hollow",
      funFact:"Once pickpocketed a ghost - somehow.",
      image:"./assets/rogue-female.png"
    },
    {
      name:"Elyra Windwhisper",
      gender:"Female",
      race:"Elf",
      class:"Ranger",
      level:10,
      experience:2950,
      faction:"The Emerald Wardens",
      startingLocation:"Sylvanreach",
      funFact:"Elyra can speak to animals - but only if they rhyme back.",
      image:"./assets/ranger-female.png"
    },
    {
      name:"Garrik Stoneshield",
      gender:"Male",
      race:"Human",
      class:"Knight",
      level:15,
      experience:4100,
      faction:"The Dawnlight Order",
      startingLocation:"Sunspire Citadel",
      funFact:"Garrik once debated a demon into giving up its soul.",
      image:"./assets/knight-male.png"
    },
  ];
}
}
