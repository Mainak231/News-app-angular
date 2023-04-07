import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {

  public newsArr:any[] = [];
  constructor(private _DataService : DataServiceService) { }

  ngOnInit(): void {
    this._DataService.getNewsData().subscribe((newsData) => {
      console.log(newsData.articles);
      this.newsArr = newsData.articles;
    })
  }

}
