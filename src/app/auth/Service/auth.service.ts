import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.apiUrl;
  constructor(private http:HttpClient,private router:Router,private toastr: ToastrService) { }
  userLogin(data:any){
    this.http.post(`${this.baseUrl}/user/login`,data).subscribe((result:any)=>{
      console.log(result);
      if(result && result.data){
        console.log("User Logged In");
        localStorage.setItem('user',JSON.stringify(result.data));
        this.router.navigate(['home']);  
      }else{
        this.toastr.error('Username and Password', 'Worng!',{
          timeOut: 3000,
        });
      }
      
    });
  }
 
  isUserLogined(){
    if(localStorage.getItem('user') !=null){
     
        return true;
      
    }else{
      return false;
    }
  }
}


