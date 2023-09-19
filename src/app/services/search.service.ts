import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private baseUrl = environment.apiUrl;
  constructor(private http:HttpClient) { }
  getSearch(data:string){
    return this.http.post(`${this.baseUrl}/search`,{
      'search_item':data
    });
  }
  
}
