import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html'
})
export class PageNotFoundComponent implements OnInit {

    title = 'TasKitty - 404 Page';

  constructor() { }

  ngOnInit(): void {
  }

}
