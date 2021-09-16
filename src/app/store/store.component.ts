import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
workImages=[
  {imgUrl:"../../assets/img/dd.jpg"},
  {imgUrl:"../../assets/img/a.jpg"},
  {imgUrl:"../../assets/img/c.jpg"},
  {imgUrl:"../../assets/img/d.jpg"},
  {imgUrl:"../../assets/img/e.jpg"},
  {imgUrl:"../../assets/img/f.jpg"}
]
  constructor() { }

  ngOnInit(): void {
  }

}
