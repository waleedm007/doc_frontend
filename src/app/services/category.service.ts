import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient,) { }
  private getUrl = `${this.baseUrl}/category`;
  getData(): Observable<any> {
    return this.http.get(this.getUrl);
  }
}
