import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: []
})
export class HeaderComponent implements OnInit {

  headerTitle: String = 'Student Maintenance System';

  constructor() { }

  ngOnInit() {
  }

}
