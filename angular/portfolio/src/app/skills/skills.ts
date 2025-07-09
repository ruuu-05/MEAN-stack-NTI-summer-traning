import { Component } from '@angular/core';
import { Skill } from './skill/skill.js';


@Component({
  selector: 'app-skills',
  imports: [Skill],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {

}
