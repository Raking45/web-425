import { Routes } from '@angular/router'; 
import { HomeComponent } from './home/home.component'; 
import { PlayersComponent } from './players/players.component';
import { SigninComponent } from './signin/signin.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { CreateGuildComponent } from './create-guild/create-guild.component';
import { CharacterFactionComponent } from './character-faction/character-faction.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [ 
{ 
  path: '', 
  component: HomeComponent 
}, 
{ 
  path: 'home', 
  component: HomeComponent 
},
{
  path: 'players',
  component: PlayersComponent
},
{
  path: 'signin',
  component: SigninComponent
},
{
  path: 'create-character',
  component: CreateCharacterComponent,
  canActivate: [authGuard]
},
{
  path: 'create-guild',
  component: CreateGuildComponent,
  canActivate: [authGuard]
},
{
  path: 'character-faction',
  component: CharacterFactionComponent
}
];