import { Component, OnInit } from '@angular/core';
import {CicService} from '../../service/cic.service';
import {Recipient} from '../../model/Recipient';
import {Router} from '@angular/router';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  recipientName: String;
  recipientEmail: String;
  recipient = new Recipient();
  errorMessage: String;

  private sum = 10;

  get sumValue() {
    return this.sum;
  }


  constructor(private cicService: CicService, private router: Router, private appComponent: AppComponent) { }
    ngOnInit() {
     this.appComponent.urlString = this.router.url;
      console.log('The URL ' + this.appComponent.urlString);
      this.appComponent.checkLink('home', 'home');
    }
    /**
     * Add a new recipient
     */
    register() {
      this.cicService.register(this.recipient).subscribe(data => {
        this.recipientName = this.recipient.name;
        this.recipientEmail = this.recipient.emailAddress;
        console.log(data);
        console.log(this.recipientName);
        console.log('New recipient added');
        alert('Thank you for registering');
      }, error => this.errorMessage = 'The recipient was not added. \n ' +
        'Please provide an email that was not already added.');
    }
}
