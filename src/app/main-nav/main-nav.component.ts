import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  controls: Control[];
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.initialControls();
  }

  initialControls() {
    this.controls = [
      {
        name: 'text'
      },
      {
        name: 'textarea'
      },
      {
        name: 'radio'
      },
      {
        name: 'checkbox'
      },
      {
        name: 'dynamic-form'
      }
    ]
  }
}


export interface Control {
  name: string;
}