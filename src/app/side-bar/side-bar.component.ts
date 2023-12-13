import { Component, OnInit } from '@angular/core';
import { ValueServiceService } from '../services/value-service.service';
import { CategoryService } from '../services/category.service';
import { PostService } from '../services/post.service';
import { PostDataShareService } from '../services/post-data-share.service';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  // public isActive:boolean = true;
  constructor(private valueService: ValueServiceService, 
    private categoryService: CategoryService,
    private postService:PostService,
    private sherePost:PostDataShareService) { }
   
  getValue(myLink: any, isCategory: boolean) {
    const linkText = myLink;
    const isCate = isCategory;
    // console.log('Span Value:', isCate);
    this.valueService.setValue(linkText,isCate);
  }
  categoryData: any = [];
  ngOnInit(): void {
    this.categoryService.getData().subscribe((data: any) => {
      this.categoryData = data.data;
      // console.log(data);

    });
  }
  getPost(id:number){
    this.postService.getPostData(id).subscribe((data)=>{
      
      this.sherePost.setValue(data);

    
    });
  }
  activeSubCategory: any = null; 

  setActiveSubCategory(sub: any) {
    this.activeSubCategory = sub;
  }
}
