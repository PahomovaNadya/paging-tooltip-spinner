import { Http } from '@angular/http'; 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      console.log(data)
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/data_allscripts.json")
  }
}