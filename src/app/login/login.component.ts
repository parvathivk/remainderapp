import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm=this.fb.group({
    username:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    password:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  login(){
    
  }

}