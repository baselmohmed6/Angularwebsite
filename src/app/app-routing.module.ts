import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { ExploreComponent } from './explore/explore.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { StoreComponent } from './store/store.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DetailsComponent } from './details/details.component';
const routes: Routes = [
 {path:"",component:HomeComponent} ,
 
 {path:"explore",component:ExploreComponent} ,
 {path:"store",component:StoreComponent } ,
 {path:"news",loadChildren:
 ()=>import('./latest-news/latest-news.module').then(moduleClass=>moduleClass.LatestNewsModule)},
 {path:"contactus",component:ContactusComponent } ,
 {path:"details/:id",component:DetailsComponent},
 {path:"**",component:PagenotfoundComponent} ,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
