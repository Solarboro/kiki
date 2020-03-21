import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  urlList: MyUrl[];
  constructor() { }

  ngOnInit() {
    this.urlList = [
      {url:'home', urlDesc:'Home', urlIcon:'icon home'},
      {url:'trip', urlDesc:'Trip', urlIcon:'icon globe'},
      {url:'member', urlDesc:'Member', urlIcon:'icon users'},
      {url:'fa', urlDesc:'Finance', urlIcon:'icon yen sign'},
      {url:'about', urlDesc:'About', urlIcon:'icon info'},

    ]
  }

}

class MyUrl{

  constructor(
    public url:string,
    public urlDesc: string,
    public urlIcon: string    
    ){

      this.url = url;
      this.urlDesc = urlDesc;
      this.urlIcon = urlIcon;
  }
}
