import { Component, OnInit } from '@angular/core';
import { SpaceXApi } from 'src/app/models/types';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss'],
})
export class CompanyInfoComponent implements OnInit {
  constructor(private homeService: HomeService) {}
  companyInfo: SpaceXApi.ICompanyInfoSchema;

  ngOnInit() {
    this.homeService.getAllCompanyInfo().subscribe((data) => {
      this.companyInfo = data;
    });
  }
}
