import { Component, OnInit } from '@angular/core';
import {CicService} from '../../service/cic.service';
import {Recipient} from "../../model/Recipient";
import {error} from "util";
import {Router} from "@angular/router";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-recipient',
  templateUrl: './recipient.component.html',
  styleUrls: ['./recipient.component.css']
})
export class RecipientComponent implements OnInit {

  private  recipients:  Array<object> = [];
  recipientName: String;
  recipientEmail: String;
  errorMessage: String;
  recipient = new Recipient();

  constructor(private cicService: CicService, private router: Router, private appComponent: AppComponent) { }

  ngOnInit() {
    this.appComponent.urlString = this.router.url;
    console.log('The URL ' + this.appComponent.urlString);
    this.appComponent.checkLink('recipients', 'recipients');
    /**
     * Get recipients to display on load
     */
    this.getAllRecipients();
  }

  /**
   * Get all existing recipients
   */
  getAllRecipients() {
    this.cicService.getAllRecipients().subscribe((data:  Array<object>) => {
      this.recipients  =  data;
      console.log(data);
    });
  }
  getIdByEmail(email): number {
    return 1;
  }
  edit(id) {
    this.cicService.updateRecipient(id, this.recipient).subscribe(data => {
      this.recipientName = this.recipient.name;
      this.recipientEmail = this.recipient.emailAddress;
    }, edieError => this.errorMessage = 'Recipient was not updated');
  }
  delete(email) {
    const id = this.getIdByEmail(email);
    this.cicService.deleteRecipient(id).subscribe(data => {
      console.log(data);
    });
  }


}
