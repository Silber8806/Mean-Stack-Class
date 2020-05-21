import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html'
})
export class PageHomeComponent implements OnInit {

  title = 'TasKitty - Homepage';

  constructor() { }

  ngOnInit(): void {
  }

}
