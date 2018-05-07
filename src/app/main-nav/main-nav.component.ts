import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
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
      }
    ]
  }
}


export interface Control {
  name: string;
}