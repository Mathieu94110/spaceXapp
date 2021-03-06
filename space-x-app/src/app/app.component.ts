import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { SpaceXApi } from './models/types';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  sideMenuList: SpaceXApi.IsideMenuList[];

  constructor(private menu: MenuController) {
    this.sideMenuList = [
      { title: 'Capsules', icon: 'mail', path: '/capsules' },
      { title: 'Cores', icon: 'mail', path: '/cores' },
      { title: 'Crew', icon: 'mail', path: '/crew' },
      { title: 'Dragons', icon: 'mail' },
      { title: 'Landpads', icon: 'mail' },
      { title: 'Launches', icon: 'mail' },
      { title: 'Launch-pads', icon: 'mail' },
      { title: 'Payloads', icon: 'mail' },
      { title: 'Roadster-info', icon: 'mail' },
      { title: 'Rockets', icon: 'mail' },
      { title: 'Ships', icon: 'mail' },
      { title: 'Starlink', icon: 'mail' },
    ];
  }

  onMenuClick(item: string) {
    console.log(item + 'cliked');
    this.menu.close();
  }
  ionDidOpen(event: any) {
    console.log(event);
  }
}
