import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LaunchesNavParamService } from 'src/app/services/launches-nav-param.service';
import { SpaceXApi } from 'src/app/models/types';

@Component({
  selector: 'app-launches-details',
  templateUrl: './launches-details.page.html',
  styleUrls: ['./launches-details.page.scss'],
})
export class LaunchesDetailsPage {
  data: SpaceXApi.ILaunchSchema | undefined;

  constructor(
    public route: ActivatedRoute,
    private navParamService: LaunchesNavParamService,
    private router: Router
  ) {
    this.data = this.navParamService.getNavData();
  }

  goBack() {
    this.router.navigate(['launches']);
  }
}
