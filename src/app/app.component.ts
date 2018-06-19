import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loading = false;
  urlString: string;
  ngOnInit() {
    console.log('Test');
    console.log(this.urlString);
  }
  checkLink(link, id) {
    if (this.urlString === '/' + link) {
      document.getElementById(id).style.backgroundColor = '#000';
    }
  }
  onActivate(event) {
    window.scroll(0, 0);
  }

}
