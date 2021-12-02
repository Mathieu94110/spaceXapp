import { Injectable } from '@angular/core';
import { SpaceXApi } from '../models/types';

@Injectable({
  providedIn: 'root',
})
export class LaunchesNavParamService {
  navData: SpaceXApi.ILaunchSchema | undefined;
  constructor() {}

  setNavData(navObj) {
    this.navData = navObj;
  }

  getNavData() {
    return this.navData;
  }
}
