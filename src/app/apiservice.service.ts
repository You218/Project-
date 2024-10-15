import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  private registeredDataSubject = new BehaviorSubject<any[]>([]);
  registeredData$ = this.registeredDataSubject.asObservable();

  constructor(private http: HttpClient) {}

  getUserData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  updateRegisteredData(newData: any[]) {
    this.registeredDataSubject.next(newData);
  }
}