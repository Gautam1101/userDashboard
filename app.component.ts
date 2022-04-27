import { Component, OnInit } from '@angular/core';
import {UserService} from './user.service';

import { UsersListComponent } from './users-list/users-list.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'USER';
  data:any
 


  constructor(private user:UserService)
  {
  }
  ngOnInit() {
  
    this.user.getData().subscribe((result)=>
    {
      console.log(result);
      this.data=result;
      
    })
  
  }
  
  

  


}
