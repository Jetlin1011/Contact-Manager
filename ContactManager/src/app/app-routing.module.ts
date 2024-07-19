import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAllContactComponent } from './view-all-contact/view-all-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { SpinnerComponent } from './spinner/spinner.component';

const routes: Routes = [
  {path:'',component:ViewAllContactComponent},
  {path:'view/:id',component:ViewContactComponent},
  {path:'add',component:AddContactComponent},
  {path:'delete/:id',component:DeleteContactComponent},
  {path:'edit/:id',component:EditContactComponent},
  {path:'spinner',component:SpinnerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
