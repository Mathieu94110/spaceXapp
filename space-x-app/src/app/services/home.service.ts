import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpaceXApi } from '../models/types';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getLatestLaunches(): Observable<any> {
    return this.http.get(`${this.baseUrl}/v5/launches/latest`);
  }

  getAllHistoryEvents(): Observable<any>{
     return this.http.get(`${this.baseUrl}/v4/history`);
  }
}
