import { Component,OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-trending-harry',
  templateUrl: './trending-harry.component.html',
  styleUrls: ['./trending-harry.component.css']
})
export class TrendingHarryComponent implements OnInit {
  trndingArr:any[]=[]
  constructor(private BooksService:BooksService,private spinner: NgxSpinnerService){}



  ngOnInit(): void {
    this.spinner.show();
    this.BooksService.sarch('harry').subscribe({
      next:(res)=>{
        this.trndingArr=res.docs.slice(0,10)
        console.log(this.trndingArr)
        this.spinner.hide();
      }
    })
  }

}
