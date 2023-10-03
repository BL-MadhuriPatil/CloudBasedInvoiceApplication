import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'https://invoice-backend-nodejs-production.up.railway.app/api';

  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/employee/login`, data, {
      observe: 'response',
      withCredentials: true,
    });
  }

  employeeInfo(data: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/employee/myinfo`, data);
  }

  update(data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/employee/update`, data);
  }

  delete(data: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/employee/delete`, data);
  }
}