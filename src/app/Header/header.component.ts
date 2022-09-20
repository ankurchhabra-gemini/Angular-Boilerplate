import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
 openNav() {

  document.getElementById("mySidenav")!.style.width = "250px";
  document.getElementById("main")!.style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
 closeNav() {
  document.getElementById("mySidenav")!.style.width = "0";
  document.getElementById("main")!.style.marginLeft = "0";
}

}
