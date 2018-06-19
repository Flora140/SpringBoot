import { Component, OnInit } from '@angular/core';
import {Cic} from '../../model/Cic';
import {CicService} from '../../service/cic.service';
import {Recipient} from '../../model/Recipient';
import {AppComponent} from '../../app.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {
  messageBody: String;
  messageSubject: String;
  createdDate: String;
  recipientId;
  cic = new Cic();
  recipient = new Recipient();
  errorMessage;
  constructor(private cicService: CicService, private appComponent: AppComponent, private router: Router) { }

  ngOnInit() {
    this.appComponent.urlString = this.router.url;
    console.log('The URL ' + this.appComponent.urlString);
    this.appComponent.checkLink('send-email', 'send');
  }
  /**
   * Send an email
   */
  sendEmail(email) {
    this.cicService.getIdByEmail(email).subscribe(data => {
      this.recipientId = data;
       console.log('The is where we need it '+ this.recipientId)
      this.newMailData(this.recipientId);
      console.log(data);
    });
  }
  newMailData(id) {
    this.cic.type = 'e-mail';
    this.cic.sourceSystem = 'marketing';
    console.log('My id is :' + this.recipientId);
    this.cicService.sendEmail(id, this.cic).subscribe(data => {
      this.messageBody = this.cic.body;
      this.messageSubject = this.cic.subject;
      this.createdDate = this.cic.createdDate;
      console.log(data);
    }, error => this.errorMessage = 'Please provide a registered email');
  }
}

