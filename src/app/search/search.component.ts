import { Component,OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  isLoading:Boolean=false
   // arrey of responce data
   booksLength:number=0
   pageLength:number=0
   searchResult:any[]=[]
   pages:number[]=[]
   searchTerm:string=''
   stratPageination:number=0
   end:number=10
   results:Boolean=false
   constructor(private BooksService:BooksService , private spinner: NgxSpinnerService){}
  //  pagination
  // next-page
   gitNextPage()
   {
    
    if(this.pageLength=0)
    {
      alert('there is no more results')
    }else
    {
     this.stratPageination=this.stratPageination+10
    this.end=this.end+10
    this.onSearch()
    console.log(this.searchResult)
    }
   
   }
  //  last page
   gitLastPage()
   {
    this.stratPageination=this.stratPageination-10
    this.end=this.end-10
    if(this.end!=0)
    {
      this.onSearch()
    console.log(this.searchResult)
    }else
    {
      alert('this is the lastPage')
    }
    
   }
  //  search results
   onSearch()
   {
    this.spinner.show();
      this.isLoading=true
    this.BooksService.sarch(this.searchTerm).subscribe({
      next:(res)=>{
        // this.pages=new Array(10).fill(0).map((x,i)=>i)
        this.searchResult=res.docs.slice(`${this.stratPageination}`,`${this.end}`)
        this.booksLength=res.docs.length
        this.pageLength=this.searchResult.length
        this.results=true
        console.log(this.searchResult)
        this.isLoading=false
        this.spinner.hide();
        

      }
    })
   }

  
  ngOnInit(): void {
   
  }
}
