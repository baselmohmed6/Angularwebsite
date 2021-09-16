import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

contactForm=new FormGroup({
 username: new FormControl('',Validators.required),
 email: new FormControl('',Validators.required),
 number: new FormControl('',Validators.required),
 message:new FormControl('',Validators.required)

});



  constructor() { }

  ngOnInit(): void {
  }
  get username(){
    return this.contactForm.get('username');

  }
  get email(){
    return this.contactForm.get('eamil');
    
  }
  get number(){
    return this.contactForm.get('number');
    
  }
  get message(){
    return this.contactForm.get('message');
    
  }

}
