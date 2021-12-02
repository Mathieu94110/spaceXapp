import { Component, OnInit } from '@angular/core';
import { SpaceXApi } from 'src/app/models/types';
import { LaunchesService } from 'src/app/services/launches.service';
import { Router } from '@angular/router';
import { LaunchesNavParamService } from 'src/app/services/launches-nav-param.service';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.page.html',
  styleUrls: ['./launches.page.scss'],
})
export class LaunchesPage implements OnInit {
  constructor(
    private launchesService: LaunchesService,
    private router: Router,
    private navParamService: LaunchesNavParamService
  ) {}

  allLaunches: SpaceXApi.ILaunchSchema[] | undefined;

  ngOnInit() {
    this.launchesService.getAllLaunches().subscribe((launche) => {
      this.allLaunches = launche;
    });
  }

  pushLauncheDetails(params: any) {
    this.navParamService.setNavData(params);
    this.router.navigate(['launches-details']);
  }
}
