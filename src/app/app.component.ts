import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Boilerplate';
  constructor(private ActRoute: ActivatedRoute, private route: Router) {}
  ngOnInit(): void {
    if (window.location.origin.includes('localhost')) {
      console.log('123');
      this.route.navigate(['home']);
    }
  }
}
