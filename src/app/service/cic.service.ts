import { Injectable } from '@angular/core';
import {server} from '../app.values';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Recipient} from '../model/Recipient';
import {Cic} from '../model/Cic';

const HttpUploadOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
@Injectable({
  providedIn: 'root'
})
export class CicService {

  constructor(private  httpClient:  HttpClient) {}
  getAllRecipients() {
    return  this.httpClient.get(`${server}/getallrecipients`);

  }
  register(recipient: Recipient) {
    return this.httpClient.post(`${server}`, recipient, HttpUploadOptions);
  }
  getIdByEmail(email) {
    return this.httpClient.get(`${server}/getid/` + email, HttpUploadOptions);
  }
  sendEmail(id, cic: Cic) {
    return this.httpClient.post(`${server}/` + id + `/` + `send`, cic, HttpUploadOptions);
  }
  updateRecipient(id, recipient: Recipient) {
    return this.httpClient.put(`${server}/edit`, recipient, HttpUploadOptions);
  }

  deleteRecipient(id) {
    return this.httpClient.delete(`${server}/delete` + id, HttpUploadOptions);
  }
}
