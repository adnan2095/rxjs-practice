import { Component, Input, OnInit } from '@angular/core';
import { Marble } from 'src/app/Utils/types';

@Component({
  selector: 'app-marble',
  templateUrl: './marble.component.html',
  styleUrls: ['./marble.component.scss']
})
export class MarbleComponent implements OnInit {
  @Input() marble: Marble = {
    color: 'red',
    number: 1,
    complete: false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
