import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MainServiceService } from '../providers/main-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  frm: FormGroup;
  message: any;
  showInputErrors: boolean;
  isbusy: boolean;
  isbusySub:boolean;
  hasFailed: boolean;
  showInputError:boolean;
  subscribe:any;
  successResult:any;
  errorResult:any;
  
  subForm:FormGroup;

  constructor(public formbuilder: FormBuilder,private router: Router, private userService:MainServiceService) {
    // this.isbusySub = false;
    this.frm = formbuilder.group({
      fullName: ["", Validators.required],
      email: ["", Validators.required],
      mobile:["", Validators.required]
    });

    this.subForm = formbuilder.group({emailsub:["", Validators.required]})
   }

  ngOnInit() {
  }

  public getInvolved() {
    // validate form
    if (this.frm.invalid) {
      this.showInputErrors = true;
      return;
    }
    // reset status
    this.isbusy = true;
    this.hasFailed = false;
    

    const fullName = this.frm.get("fullName").value;
    const email = this.frm.get("email").value;
    const mobile = this.frm.get("mobile").value;
    // console.log(username, password);
    this.message = {
      fullName: fullName,
      email: email,
      mobile:mobile
    };
 this.userService.getInvolved(this.message).subscribe(response => {
       const {data} = response;

       if(data == null || data == undefined){
        this.isbusy = false;
        this.errorResult = "Oops something went wrong";
        this.setHideOut(5000)
       }else{
        this.isbusy = false;
        this.frm.reset({});
        this.successResult ="Thank You, We will get back to you ASAP!!!";
        this.setHideOut(5000)
       }

      
     
    });
  }


  devotionSubscription(){
    
    if (this.subForm.invalid) {
      this.showInputError = true;
      return;
    }
    // reset status
    this.isbusySub = true;
    this.hasFailed = false;

    const email = this.subForm.get('emailsub').value;
    this.subscribe = {
      email:email
    }

    this.userService.devotionSubcription(this.subscribe).subscribe(response => {
      // this.userAuth.doSignIn(response.token,response.name)
      const {data} = response
      console.log('ddhdh',data);
      if(data == null || data == undefined){
        this.isbusySub = false;
        this.errorResult ="Oops! something went wrong!";
        
        this.setHideOut(5000);
      }else{
        this.isbusySub = false;
        this.successResult ="Thank you for subscribing to our daily devotion";
        this.subForm.reset({});

        this.setHideOut(5000);
      }

      this.subscribe = response;
      
    });

  }

  setHideOut( time:number){
    console.log(time)
    
    setTimeout(()=>{
      this.successResult =" ";
      this.errorResult=""
    }, time)
  }
}
