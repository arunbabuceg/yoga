import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {TopNavComponent} from "./pages/top-nav/top-nav.component";
import {HeroSectionComponent} from "./pages/hero-section/hero-section.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopNavComponent, HeroSectionComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'yoga-own';
}
