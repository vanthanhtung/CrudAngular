import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/customers';

@Injectable({
    providedIn: 'root'
})

export class CustomerService {

    constructor(public http: HttpClient) { }

    getAll(): Observable<any> {
      return this.http.get(baseUrl);
    }

    getById(id: any): Observable<any>{
      return this.http.get(`${baseUrl}/${id}`);
    }

    create(data): Observable<any>{
      return this.http.post(baseUrl,data);
    }

    delete(id: any): Observable<any>{
      return this.http.delete(`${baseUrl}/${id}`);
    }

    update(id: any, data): Observable<any> {
      return this.http.put(`${baseUrl}/${id}`, data);
    }
}
