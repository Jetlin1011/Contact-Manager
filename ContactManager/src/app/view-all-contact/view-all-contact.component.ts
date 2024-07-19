import { Component } from '@angular/core';
import { DataServiceService } from 'services/data-service.service';

@Component({
  selector: 'app-view-all-contact',
  templateUrl: './view-all-contact.component.html',
  styleUrls: ['./view-all-contact.component.css']
})
export class ViewAllContactComponent {

cdata:any={}
searchString:any=''

constructor(private ds: DataServiceService){}

ngOnInit(){
  this.ds.viewAllContacts().subscribe((data:any)=>{
    console.log(data.serverResult)
    this.cdata=data.serverResult
  })
}

}
