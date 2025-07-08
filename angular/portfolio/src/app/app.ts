import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './hero/hero.js';
import { Bio } from './bio/bio.js';
import { Skills } from './skills/skills.js';
import { Project } from './project/project.js';
import { Footer } from './footer/footer.js';





@Component({
  selector: 'app-root',
  imports: [RouterOutlet , Hero , Bio , Skills ,  Project  , Footer ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'portfolio';
}
