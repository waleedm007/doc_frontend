import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PostService } from './post.service';

@Injectable({
  providedIn: 'root'
})
export class PostDataShareService {

  constructor(private postService:PostService) { }
  private valueSubject = new BehaviorSubject<any>('');
  public post_value$: Observable<any> = this.valueSubject.asObservable();
  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  public isLoading$: Observable<boolean> = this.isLoadingSubject.asObservable();
  
  setValue(value: any) {
    
    this.isLoadingSubject.next(true);
  
    setTimeout(() => {
      
      this.postService.getPostData(value).subscribe(
        (response) => {
      
          this.isLoadingSubject.next(false);
          this.valueSubject.next(value);
        },
        (error) => {
          
          this.isLoadingSubject.next(false);
          console.error(error);
        }
      );
    }, 100);
  }
}
