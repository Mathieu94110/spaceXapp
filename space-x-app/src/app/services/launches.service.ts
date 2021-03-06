import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LaunchesService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getAllLaunches(): Observable<any> {
    return this.http.get(`${this.baseUrl}/v5/launches`);
  }
}
