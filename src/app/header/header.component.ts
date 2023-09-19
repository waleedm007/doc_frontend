import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ValueServiceService } from '../services/value-service.service';
import { AuthService } from '../auth/Service/auth.service';
import { Router } from '@angular/router';
import { SearchService } from '../services/search.service';
import { Pokedex } from '../interface/PostDataInter';
import { PostService } from '../services/post.service';
import { PostDataShareService } from '../services/post-data-share.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  value: any = '';
  isUserLogined: boolean = false;
  searchQuery:string = '';
  result: Pokedex = {
    code: 0,
    data: []
  };
  showResult = false;

  @Output() searchChange = new EventEmitter<string>();
  // searchTerm: string = '';
  constructor(private valueService: ValueServiceService,
    private Auth: AuthService,
    private router: Router,
    private searchService: SearchService,
    private postService:PostService,
    private sherePost:PostDataShareService) { }
  ngOnInit(): void {
    this.valueService.value$.subscribe((newValue) => {
      this.value = newValue;
      // console.log(this.value);

    });
    this.isUserLogined = this.Auth.isUserLogined();
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  onSearch() {
    if (this.searchQuery.length >= 3) {
      this.searchService.getSearch(this.searchQuery).subscribe((data: any) => {

        this.result = data;
        this.showResult = true;
      });
    } else {
      this.result = {
        code: 400,
        data: []
      };
      this.showResult = false;
    }
    
  }

  selectSuggestion(suggestion: string) {
    // this.searchQuery = suggestion;
    this.showResult = false;
  }
  getValue(myLink: any, isCategory: boolean) {
    const linkText = myLink;
    const isCate = isCategory;
    // console.log('Span Value:', isCate);
    this.valueService.setValue(linkText,isCate);
  }
  getPost(id:number){
    this.postService.getPostData(id).subscribe((data)=>{
      this.sherePost.setValue(data);
    
    });
  }
  
}
