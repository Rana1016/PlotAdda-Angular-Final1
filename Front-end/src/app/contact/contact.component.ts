import { Component } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private _service:AuthServiceService){}
  isAgent:boolean=false;
  personType(){
    this.isAgent = true
    console.log(this.isAgent)
  }
  cityList=this._service.city_list
}
