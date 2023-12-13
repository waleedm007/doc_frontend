import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValueServiceService {

  constructor() { }
  private valueSubject = new BehaviorSubject<any>('');
  private valueSubject1 = new BehaviorSubject<any>('');
  public value$: Observable<any> = this.valueSubject.asObservable();
  public value1$: Observable<any> = this.valueSubject1.asObservable();
  setValue(value: any, isCategory: boolean) {
    setTimeout(() => {
      this.valueSubject.next(value);
      this.valueSubject1.next(isCategory);
      
    }, 100);
  }
}
