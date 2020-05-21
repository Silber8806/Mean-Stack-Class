import { Component, OnInit, Input } from '@angular/core';

// Static content as component for later use...
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // wanted to test input and so I did it for the site name...
  @Input() sitename;

  constructor() { 
  	// just default to 404 if no title found (lame, but why not)
  	this.sitename = '404 HTML - Page Not Found';
  }

  ngOnInit(): void {
  }

}
