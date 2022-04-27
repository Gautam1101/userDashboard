import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UsersListComponent } from './users-list/users-list.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  getData()
  {
    let url="https://reqres.in/api/users";
    return this.http.get(url);
    
  }
}
