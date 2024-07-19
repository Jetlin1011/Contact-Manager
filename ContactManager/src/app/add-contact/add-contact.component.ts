import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from 'services/data-service.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {

constructor(private ds:DataServiceService, private fb:FormBuilder,private router:Router){}

newContactForm =this.fb.group({
  name:['',[Validators.required]],
  photo:['',[Validators.required]],
  email:['',[Validators.required]],
  mobile:['',[Validators.required,Validators.pattern('[0-9]+')]],
  company:['',Validators.required],
  title:['',Validators.required]
})
  images=[
    {key:"male", value:"https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-512.png"},
    {key:"female", value:"https://cdn-icons-png.flaticon.com/512/4721/4721796.png"},
    {key:"office", value:"https://www.freeiconspng.com/thumbs/office-icon/office-icon--insharepics-11.png"},
    {key:"Shoppping", value:"https://cdn-icons-png.flaticon.com/512/641/641813.png"}


  ]

  selected:any=""
  selectedimg:any
  changeImg(e:any){
    this.selectedimg=e.target.value
    console.log(this.selectedimg)

  }
  addNewContact(){

let data={
  name:this.newContactForm.value.name,
  photo:this.newContactForm.value.photo,
  email:this.newContactForm.value.email,
  mobile:this.newContactForm.value.mobile,
  company:this.newContactForm.value.company,
  title:this.newContactForm.value.title

}

if(this.newContactForm.valid){
      this.ds.addContact(data).subscribe((result)=>{
        alert("New contact added")
this.router.navigateByUrl('/')
      },
      result=>{
        alert(result.error.msg)
      }
      
      )
  }}

}
