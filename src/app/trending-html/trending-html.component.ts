import { Component,OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-trending-html',
  templateUrl: './trending-html.component.html',
  styleUrls: ['./trending-html.component.css']
})
export class TrendingHtmlComponent implements OnInit {
  // arrey of responce data
  trndingArr:any[]=[]
  constructor(private BooksService:BooksService,private spinner: NgxSpinnerService){}

  ngOnInit(): void {
    this.spinner.show();
    // get data from api
  this.BooksService.sarch('html').subscribe({
    next:(res)=>{
      this.trndingArr=res.docs.slice(0,10)
      console.log(this.trndingArr)
      this.spinner.hide();
    }
  })
  }
}
