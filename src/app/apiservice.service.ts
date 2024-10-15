import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }
    User():Observable<any>{
      return this.http.get<any>(this.url);
    }

}
