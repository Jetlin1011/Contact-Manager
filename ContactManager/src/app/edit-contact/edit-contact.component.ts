import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from 'services/data-service.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent {

  selectedimg:any
  selected:any
  cid:any
  cdata:any

  constructor(private ds:DataServiceService,private fb:FormBuilder,private ar:ActivatedRoute, private router:Router){}

ngOnInit(){
this.ar.params.subscribe((contactid:any)=>{
  this.cid=contactid.id
})


  this.ds.viewContact(this.cid).subscribe((result1:any)=>{
this.cdata=result1.serverResult
console.log(result1)
  })
}

  images=[
    {key:"male", value:"https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-512.png"},
    {key:"female", value:"https://cdn-icons-png.flaticon.com/512/4721/4721796.png"},
    {key:"office", value:"https://www.freeiconspng.com/thumbs/office-icon/office-icon--insharepics-11.png"},
    {key:"Shoppping", value:"https://cdn-icons-png.flaticon.com/512/641/641813.png"}
  ]

  changeImg(e:any){
this.selectedimg=e.target.value
this.cdata.photo=this.selectedimg
  }

  // newContactForm =this.fb.group({
  //   name:['',[Validators.required]],
  //   photo:['',[Validators.required]],
  //   email:['',[Validators.required]],
  //   mobile:['',[Validators.required,Validators.pattern('[0-9]+')]],
  //   company:['',Validators.required],
  //   title:['',Validators.required]
  // })

  updateContact(){
  this.ds.editContact(this.cid,this.cdata).subscribe((result)=>{
    alert("contact updated");
    this.router.navigateByUrl('/')
  })
  }
}
