import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from 'services/data-service.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent {
  phnum:any
  cdata:any
constructor(private ds:DataServiceService, private ar:ActivatedRoute){}

ngOnInit(){
this.ar.params.subscribe((uid:any)=>{
  this.phnum=uid.id
  

})

this.ds.viewContact(this.phnum).subscribe((result:any)=>{
  this.cdata=result.serverResult
console.log(this.cdata)
})

}

}
