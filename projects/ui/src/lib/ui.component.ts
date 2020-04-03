import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ui',
  template: `
    <mat-card>
      <p>
        {{ text }}
      </p>
    </mat-card>
  `,
  styleUrls: [
    './ui.style.scss'
  ],
})
export class UiComponent implements OnInit {

  @Input() text = 'ui works!';

  constructor() { }

  ngOnInit(): void {
  }

}
