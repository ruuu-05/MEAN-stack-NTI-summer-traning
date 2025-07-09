import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import users from './users.json';

@Component({
  selector: 'app-test',
  imports: [CommonModule],
  templateUrl: './test.html',
  styleUrl: './test.css'
})
export class Test {
  users = users.slice(0, 4);
}