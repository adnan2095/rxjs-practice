import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-usage-container',
  templateUrl: './usage-container.component.html',
  styleUrls: ['./usage-container.component.scss']
})
export class UsageContainerComponent implements OnInit {
  @Input() tools: any[] = [];
  @Input() usageGuide: string = '';
  @Input() usageCode: string = '';

  @Output() emmitter: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  transformMarbles() {
    this.emmitter.emit();
  }

}
