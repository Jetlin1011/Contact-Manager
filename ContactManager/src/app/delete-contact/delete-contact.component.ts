import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from 'services/data-service.service';

@Component({
  selector: 'app-delete-contact',
  templateUrl: './delete-contact.component.html',
  styleUrls: ['./delete-contact.component.css']
})
export class DeleteContactComponent {

  cid:any

constructor(private ds:DataServiceService, private router:Router, private ar:ActivatedRoute){}

ngOnInit(){
  this.ar.params.subscribe((id:any)=>{
    this.cid=id.id
  })
  this.ds.deleteContact(this.cid).subscribe((result:any)=>{
    if(result){
      this.router.navigateByUrl('/')
      alert("Contact deleted")
    }
  },
  error=>{
  alert(error.error.message)
  }
  )
}

}
