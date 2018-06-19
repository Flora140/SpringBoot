import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { SendEmailComponent } from './component/send-email/send-email.component';
import { RecipientComponent } from './component/recipient/recipient.component';
import { HomeComponent } from './component/home/home.component';
import { AppRoutingModule} from './app-routing.module';
import {CicService} from './service/cic.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SendEmailComponent,
    RecipientComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutingModule),
    NgbModule.forRoot()
  ],
  providers: [CicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
