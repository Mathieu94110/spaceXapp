import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-launches-details',
  templateUrl: './launches-details.page.html',
  styleUrls: ['./launches-details.page.scss'],
})
export class LaunchesDetailsPage implements OnInit {
  data: any;

  constructor(public route: ActivatedRoute) {}

  ngOnInit() {
    this.data = this.route.snapshot.paramMap.get('dataObj');
  }
}
