import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header.js';
import { CommonModule } from '@angular/common';
import { Test } from './test/test.js';


@Component({
  selector: 'app-root',
  imports: [ CommonModule , RouterOutlet, Header , Test],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Ang2';
}
