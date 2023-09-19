import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl = environment.apiUrl;
  constructor(private http:HttpClient) { }
  private getUrl=`${this.baseUrl}/sub_category`;
  getPostData(id:number){
    return this.http.get(this.getUrl+'/'+id);
  }
}
