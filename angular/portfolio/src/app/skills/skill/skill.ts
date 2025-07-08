import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  imports: [],
  templateUrl: './skill.html',
  styleUrl: './skill.css'
})
export class Skill {
  @Input() title!: string;
  @Input() progress!: number;
}
