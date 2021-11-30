import { Component, OnInit } from '@angular/core';
import { SpaceXApi } from 'src/app/models/types';
import { LaunchesService } from 'src/app/services/launches.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.page.html',
  styleUrls: ['./launches.page.scss'],
})
export class LaunchesPage implements OnInit {
  constructor(
    private launchesService: LaunchesService,
    private router: Router
  ) {}

  allLaunches: SpaceXApi.ILaunchSchema[] | undefined;

  ngOnInit() {
    this.launchesService.getAllLaunches().subscribe((launche) => {
      this.allLaunches = launche;
    });
    setTimeout(() => {
      console.log(this.allLaunches);
    }, 2000);
  }

  pushLauncheDetails(params: any) {
    this.router.navigate(['launches-details/' + params]);
  }
}
