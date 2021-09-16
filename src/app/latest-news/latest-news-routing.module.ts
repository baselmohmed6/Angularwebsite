import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LatestNewsComponent } from './latest-news.component';

const routes: Routes = [
  {
    path:'',component:LatestNewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LatestNewsRoutingModule { }
