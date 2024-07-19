import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

ngOnInit(){}

viewAllContacts(){
 return this.http.get('http://localhost:3000/')
}

viewContact(id:any){
  return this.http.get('http://localhost:3000/view/'+id)
}
addContact(data:any){
  return this.http.post('http://localhost:3000/add',data)
}

editContact(id:any,data:any){
  return this.http.put('http://localhost:3000/edit/'+id,data)
}

deleteContact(id:any){
  return this.http.delete('http://localhost:3000/delete/'+id)
}

}
