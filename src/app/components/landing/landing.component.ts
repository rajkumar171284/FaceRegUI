import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  providers:[FormBuilder]
})
export class LandingComponent implements OnInit {
  userDetails: any;
  loginForm = this.fb.group({
    userName: ['', Validators.required],
    passCode: ['', Validators.required]
  })
  loading: any;
  @ViewChild('video') video: any;
  

  constructor(private fb: FormBuilder,private router:Router) { }

  ngOnInit(): void {
  }

  loginFn(){

    this.router.navigate(['admin'])

  }

  loadPage(type:any){

  }
}
