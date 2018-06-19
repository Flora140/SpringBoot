import {HomeComponent} from './component/home/home.component';
import {RecipientComponent} from './component/recipient/recipient.component';
import {SendEmailComponent} from './component/send-email/send-email.component';

export const AppRoutingModule = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent, children: [
      {path: '', component: HomeComponent}
    ]
  },
  {
    path: 'recipients', component: RecipientComponent, children: [
      {path: '', component: RecipientComponent}
    ]
  },
  {
    path: 'send-email', component: SendEmailComponent, children: [
      {path: '', component: SendEmailComponent}
    ]
  }
  ];
