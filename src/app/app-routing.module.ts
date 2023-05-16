import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';
import { SearchComponent } from './search/search.component';
import { TrendingJavaComponent } from './trending-java/trending-java.component';
import { TrendingHtmlComponent } from './trending-html/trending-html.component';
import { TrendingCssComponent } from './trending-css/trending-css.component';
import { TrendingCryptoComponent } from './trending-crypto/trending-crypto.component';
import { TrendingHarryComponent } from './trending-harry/trending-harry.component';

const routes: Routes = [
  {path:'',redirectTo:'Home',pathMatch:'full',title:'Home'},
  {path:"nav",component:NavComponent,title:'nav'},
  {path:"search",component:SearchComponent,title:"search"},
  {path:"Home",component:HomeComponent,title:'Home',children:[
    {path:'SearchResult',component:SearchComponent}
  ]},
  {path:'JavaScript',component:TrendingJavaComponent,title:'trndingJavaScript'},
  {path:'Html',component:TrendingHtmlComponent,title:'trndingHtml'},
  {path:'Css',component:TrendingCssComponent,title:'trndingCss'},
  {path:'Crypto',component:TrendingCryptoComponent,title:'trndingJavaScript'},
  {path:'HarryPoter',component:TrendingHarryComponent,title:'trndingJavaScript'},
  {path:'**',component:NotfoundPageComponent,title:'notfoundPage'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
