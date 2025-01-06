import { Component, ElementRef } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { FormGroup,FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _elementRef:ElementRef, private _service:AuthServiceService, private _fb:FormBuilder){}
  ngOnInit():void{
    this.getElement()
  }
  container:any;
  landloadChk:boolean =false;

  loginForm:FormGroup = this._fb.group({
    email:['', Validators.required ],
    password:['', Validators.required]
  })

  registerForm:FormGroup = this._fb.group({
    name:[''],
    email:[''],
    password:[''],
    role:['user'],
    city:[''],
    agency_name:[''],
    company_email:[''],
    agency_address:[''],
    phone:[''],
    profile_pic:['']
  })




 

  logIn(){
    if(this.loginForm.valid){
      this._service.login(this.loginForm.value).subscribe((data)=>{
        console.log(data)
      })
    }else{
      alert('check your email or password')
    }
  }
  register(){
    if(this.registerForm.valid){
      this._service.register(this.registerForm.value).subscribe((data)=>{
        console.log(data)
      })
    }else{
      alert('plz fill all the required fields')
    }
  }

  



  getElement(){
    return this.container = this._elementRef.nativeElement.querySelector(`#container`)
  }
  addClass(){
     console.log('in add', this.container)
     if(this.container != null)
     this.container.classList.add("right-panel-active");
   }
   removeClass(){
     if(this.container != null)
     this.container.classList.remove("right-panel-active");
   }
   landlordCheck(){
    this.landloadChk = !this.landloadChk
   }
   cityList = this._service.city_list
   
  
  
  


}
