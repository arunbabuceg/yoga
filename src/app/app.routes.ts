import {Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ClassesComponent} from "./pages/classes/classes.component";
import {InstructorsComponent} from "./pages/instructors/instructors.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {Events2022Component} from "./pages/event-1/events-2022.component";
import {Events2023Component} from "./pages/event-2/events-2023.component";


export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'classes', component: ClassesComponent},
  {path: 'instructors', component: InstructorsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'event-1', component: Events2022Component},
  {path: 'event-2', component: Events2023Component},
];
