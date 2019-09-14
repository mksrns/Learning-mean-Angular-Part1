import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DayStaff } from '../../_models/day-staff';
import { DayStaffService } from '../../_services/dayStaff/day-staff.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logged:boolean = false;
  loginError:string;
  loginForm:FormGroup;

  constructor(private formbuilder: FormBuilder, private router:Router, public dayStaffServ:DayStaffService) { }

  ngOnInit() {
    
    this.loginForm = this.formbuilder.group({ 
      username:['', [Validators.required]],
      password: ['', [Validators.required]]
    });

    this.dayStaffServ.logout();
    
    // login form
    $(function(){
      $(".borderbtm input").on("focus", function(){
          $(this).addClass("focus");
      });
      $(".borderbtm input").on("blur", function(){
          if($(this).val()  == "")
              $(this).removeClass("focus");
      });
    });
  }

  onFormSubmit(){
    let dayStaff = this.loginForm.value;
     this.login(dayStaff);
  }

  login(dayStaff:DayStaff){
    this.dayStaffServ.login(dayStaff).subscribe(
        data => {
          localStorage.setItem('currentDayStaff', JSON.stringify(data.token));
          if(this.dayStaffServ.isLoggedIn()){
            this.router.navigate(['/daystaff/dashboard']);
          }
        },
        
        error => {this.logged = true, console.log(error)}
    );
  } 
}
