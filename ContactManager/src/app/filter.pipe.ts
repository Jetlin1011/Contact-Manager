import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any[],filterString:any,propertyName:any): any {
    const result:any=[];

    if(!value || filterString=="" || propertyName==""){
      return value
    }
    else{
      value.forEach((contact:any)=>{
        if(contact[propertyName].trim().toLowerCase().includes(filterString.trim().toLowerCase())){
           result.push(contact)
        }
      })
      return result

    } 
  }

}
