import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { PersonComponentComponent } from './person-component/person-component.component';

const routes: Routes = [
  {path:"persons", component: PersonComponentComponent},
  {path:"contacts", component: ContactComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
