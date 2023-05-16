import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { TrendingJavaComponent } from './trending-java/trending-java.component';
import { TrendingHtmlComponent } from './trending-html/trending-html.component';
import { TrendingCssComponent } from './trending-css/trending-css.component';
import { TrendingCryptoComponent } from './trending-crypto/trending-crypto.component';
import { TrendingHarryComponent } from './trending-harry/trending-harry.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    NotfoundPageComponent,
    SearchComponent,
    TrendingJavaComponent,
    TrendingHtmlComponent,
    TrendingCssComponent,
    TrendingCryptoComponent,
    TrendingHarryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
