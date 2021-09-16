import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
  
})
export class LatestnewsService {

  constructor(public httpClient:HttpClient) { }
  getTechNews()
  {
    try{
      return this.httpClient.get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=2c9e04901d494a139e7687cb6fcc8500") ;
    }
    catch(err){
      return err;
    }
  }
}
