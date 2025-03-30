import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { DailySpecialComponent } from './daily-special/daily-special.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SigninComponent } from './signin/signin.component';

export const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: 'daily-special',
    component: DailySpecialComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  }
];
