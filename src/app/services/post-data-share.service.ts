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
    // Show loading indicator
    this.isLoadingSubject.next(true);
  
    setTimeout(() => {
      // Simulate an API call with a delay (5 seconds in this case)
      // Replace this with your actual API call
      this.postService.getPostData(value).subscribe(
        (response) => {
          // Handle API response here
          // Once the API call is complete, hide the loading indicator
          this.isLoadingSubject.next(false);
          this.valueSubject.next(value);
        },
        (error) => {
          // Handle API error here
          // Don't forget to hide the loading indicator in case of an error
          this.isLoadingSubject.next(false);
          console.error(error);
        }
      );
    }, 500);
  }
}
