import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ILogout } from './notes.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  style = { 'width': '400px', 'margin': '2em', 'height': 'calc(100vh - 6em)', background: '#111633' };

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    console.log(document.cookie);
    this.getNotes();
  }

  logout() {
    this.http.get<ILogout>('/auth/logout').subscribe((res: ILogout) => {
      if (res.status) {
        this.router.navigate(['login']);
      }
    });
  }

  getNotes() {
    this.http.get('/api/notes').subscribe((res: any) => {
      console.log(res);
    });
  }

}
