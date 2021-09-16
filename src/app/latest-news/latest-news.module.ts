import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LatestNewsRoutingModule } from './latest-news-routing.module';
import { LatestNewsComponent } from './latest-news.component';

@NgModule({
  declarations: [
    LatestNewsComponent
  ],
  imports: [
    CommonModule,
    LatestNewsRoutingModule
  ]
})
export class LatestNewsModule { }
