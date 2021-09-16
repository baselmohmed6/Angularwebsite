import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
servicesData=[
  {
    icon:"fab fa-apple-pay fa-7x",
    heading:"Apple pay",

  },
  {
    icon:"fab fa-paypal fa-4x mt-4 pb-4",
    heading:"Pay pal",
  
  },
  {
    icon:"fab fa-cc-mastercard fa-5x mt-4 pb-4",
    heading:"Mastercard",
   
  },
  {
    icon:"fab fa-bitcoin fa-5x mt-4 pb-4",
    heading:"Bitcoin",
  
  }
];
exploreData=[
  {img:"../../assets/img/a.jpg" ,
   title:"Only the essentials"
},
{img:"../../assets/img/coffee-792113_640.jpg" ,
title:"Just a click away"
}
]
  constructor() { }

  ngOnInit(): void {
  }

}
