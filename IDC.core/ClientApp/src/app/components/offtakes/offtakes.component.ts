import { Component, OnInit } from '@angular/core';
import { fadeInOut } from '../../services/animations';

@Component({
  selector: 'app-offtakes',
  templateUrl: './offtakes.component.html',
  styleUrls: ['./offtakes.component.scss'],
  animations: [fadeInOut]
})
export class OfftakesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
