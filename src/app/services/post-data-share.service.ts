import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PostService } from './post.service';
import { finalize } from 'rxjs/operators';

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
  
    const subscription = this.postService.getPostData(value)
      .pipe(
        finalize(() => {
          this.isLoadingSubject.next(false);
          subscription.unsubscribe(); 
        })
      )
      .subscribe(
        (response) => {
          this.valueSubject.next(value);
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
