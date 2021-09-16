import { Component, OnInit } from '@angular/core';
import { LatestnewsService } from '../latestnews.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

private  id:any;
specificNew :any={};

  constructor(public activatedroute:ActivatedRoute,
    public news:LatestnewsService) { }

  ngOnInit(): void {
this.id=this.activatedroute.snapshot.paramMap.get("id");
this.news.getTechNews().subscribe((result:any)=>{
  this.specificNew=result.articles[this.id];
})
  }

}
