import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  imports: [],
  templateUrl: './scroll-top.html',
  standalone: true,
  styleUrl: './scroll-top.css'
})
export class ScrollTop {

  constructor(private viewportScroller: ViewportScroller) {
  }

  scrollToTop() {
    this.viewportScroller.scrollToPosition([ 0, 0 ]);
  }
}
