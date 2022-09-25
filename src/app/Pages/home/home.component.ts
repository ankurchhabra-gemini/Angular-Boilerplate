import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  slides = [
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4a1cVtOXPeRvtOiglZO5AV9PC_NNm4jtl8g&usqp=CAU',
    },
    { image: 'https://gsr.dev/material2-carousel/assets/demo.png' },
    { image: 'https://gsr.dev/material2-carousel/assets/demo.png' },
  ];
  constructor(private route: Router) {}

  ngOnInit(): void {}

  routeBtn() {
    this.route.navigate(['pages/employee-details']);
  }
}
