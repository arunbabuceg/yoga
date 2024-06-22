import {Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ClassesComponent} from "./classes/classes.component";
import {InstructorsComponent} from "./instructors/instructors.component";
import {ContactComponent} from "./contact/contact.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'classes', component: ClassesComponent},
  {path: 'instructors', component: InstructorsComponent},
  {path: 'contact', component: ContactComponent},
];
