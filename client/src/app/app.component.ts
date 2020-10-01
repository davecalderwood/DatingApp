import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Dating App';
  users: any;

  constructor(private http: HttpClient) {}

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.getUsers();
  }

  // tslint:disable-next-line: typedef
  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe(resposne => {
      this.users = resposne;
    }, error => {
      console.log(error);
    });
  }
}
