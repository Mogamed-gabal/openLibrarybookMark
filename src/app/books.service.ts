import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private _HttpClient:HttpClient) { }

 getAllBooks():Observable<any>
{
  return  this ._HttpClient.get(`https://openlibrary.org/subjects/love.json?details=true`)
}
sarch(param:any):Observable<any>
{
 return this._HttpClient.get(`https://openlibrary.org/search.json?q=${param}`)
}
sarchOnPages(param:any,pageNum:number):Observable<any>
{
 return this._HttpClient.get(`https://openlibrary.org/search.json?q=${param}&page=${pageNum}`)
}

}
