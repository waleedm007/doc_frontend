import { Component, OnInit, ElementRef } from '@angular/core';
import { ValueServiceService } from '../services/value-service.service';
import { CategoryService } from '../services/category.service';
import { PostService } from '../services/post.service';
import { PostDataShareService } from '../services/post-data-share.service';
import { delay } from 'rxjs';
import { SearchService } from '../services/search.service';
import { DomSanitizer } from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-right-content',
  templateUrl: './right-content.component.html',
  styleUrls: ['./right-content.component.css']
})
export class RightContentComponent implements OnInit {
  value: any = null;
  isCategory: any;
  categoryData: any = '';
  postDataApi: any = null;
  isLoading: boolean = false;
  highlightedText: any = '';
  constructor(
    private valueService: ValueServiceService,
    private categoryService: CategoryService,
    private postService: PostService,
    private sherePost: PostDataShareService,
    private search: SearchService,
    private el: ElementRef,) { }
  ngOnInit() {
    //Get The Category and subCategory Value..
    this.valueService.value$.subscribe((newValue) => {
      this.value = newValue;

    });
    //Subcategory Value..
    this.valueService.value1$.subscribe((newValue) => {
      this.isCategory = newValue;

    });
    //CategoryData
    this.categoryService.getData().subscribe((data: any) => {
      this.categoryData = data.data;

    });
    // Post Data
    this.sherePost.post_value$.subscribe((newData: any) => {
      this.postDataApi = newData;
      if (newData) {
        $(document).ready(function () {
          $(".search").trigger("change");
        });
      }
    });
    //Loading
    this.isLoading = true;

    this.sherePost.isLoading$.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });


  }
  getPost(id: number) {
    this.postService.getPostData(id).subscribe((data) => {

      this.sherePost.setValue(data);
    });

  }
  getValue(myLink: any, isCategory: boolean) {
    const linkText = myLink;
    const isCate = isCategory;
    // console.log('Span Value:', isCate);
    this.valueService.setValue(linkText, isCate);
  }
}
