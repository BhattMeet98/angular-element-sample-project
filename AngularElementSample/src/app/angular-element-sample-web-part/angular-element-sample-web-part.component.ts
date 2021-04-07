import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-angular-element-sample-web-part',
  templateUrl: './angular-element-sample-web-part.component.html',
  styleUrls: ['./angular-element-sample-web-part.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AngularElementSampleWebPartComponent implements OnInit {
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}
