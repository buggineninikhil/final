import { Component, OnInit } from '@angular/core';

import { user } from '../user.model';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AdminService } from '../admin.service';
import { admin } from '../admin.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  
  adminl: admin=new admin();

  info: user = new user();
  constructor(private router: Router, private adminService: AdminService) { }
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required), 
  });
  ngOnInit() {
  }
  adminLogin1(): void {
    
    this.adminService.loginCheck1(this.adminl)
         .subscribe( (data) => {
          this.info=data;
          console.log("work");
      
           if(this.info.status!=0)
           {
             this.router.navigate(['s1']);
           }
           else{
             this.router.navigate(['']);
           }
 
         });
       };





       

}
