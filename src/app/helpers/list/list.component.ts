import { Component, Input, OnInit } from '@angular/core';
import { Marble } from 'src/app/Utils/types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() marbles: Marble[] = [];
  @Input() title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
