import { Component, OnInit } from '@angular/core';

// Static content as component for later use...
// Sidebar contains a disabled form as a stub for the later assignment.
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
