import { BooksService } from './../books.service';
import { Component,OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books:any[]=[]
  searchResult:any[]=[]
  authors:any[]=[]
  authrName:string=''
  booksLength:number=0
  constructor(private BooksService:BooksService,private spinner: NgxSpinnerService){}

  search()
{
  this.BooksService.sarch('java').subscribe({
    next:(res)=>{
      this.searchResult=res.docs
      console.log(this.searchResult)
      
    }
  })
}
  ngOnInit(): void {
    this.spinner.show()
    this.search()
    this.BooksService.getAllBooks().subscribe({
      next:(res)=>{
        this.books=res.works
        this.booksLength= this.books.length
        // this.books.map((book)=>{
        //   this.authors=book.authors
        //   this.authors.map((nam)=>{
        //    this.authrName=nam.name
        //    this.books.push(this.)
        //   })
          
        // })
       
        console.log(this.books)
        this.spinner.hide()
      }
    })
    
  }

}
