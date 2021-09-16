import { Component, OnInit } from '@angular/core';
import { LatestnewsService } from '../latestnews.service';
@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit {

  news:any[ ]=[ ];
  constructor(public latestnews: LatestnewsService) { }

  ngOnInit(): void {
    this.latestnews.getTechNews().subscribe((data:any)=>{
      this.news=data.articles;
     // console.log(this.news);
      
    })
  }

}
