import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  public newsHeadlines : any[] = [];
  public show = 5;
  
  constructor(private _dataService : DataServiceService ){}

  ngOnInit(){
    this._dataService.getNewsDataCountry().subscribe((oneNews) => {
      console.log(oneNews.articles);
      this.newsHeadlines = oneNews.articles;
    });
  }

}
