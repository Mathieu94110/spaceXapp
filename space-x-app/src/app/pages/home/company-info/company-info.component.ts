import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { SpaceXApi } from 'src/app/models/types';
@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss'],
})
export class CompanyInfoComponent implements OnInit {
  constructor(private homeService: HomeService) {}
  companyInfo: SpaceXApi.ICompanyInfoSchema | undefined;
  
  ngOnInit() {
    this.homeService.getAllCompanyInfo().subscribe((data) => {
      console.log(data);
      this.companyInfo = data
    });
  }

  
}
