import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TopNavComponent} from "./top-nav/top-nav.component";
import {HeroSectionComponent} from "./hero-section/hero-section.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopNavComponent, HeroSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'yoga-own';
}
