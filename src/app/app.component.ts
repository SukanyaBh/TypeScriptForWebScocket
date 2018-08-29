import { Component, OnInit } from '@angular/core';

import {NgxSpinnerService} from 'ngx-spinner';

import {WebSocketHelper} from './websocket-helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  syncMessenger : WebSocketHelper;
  constructor(private spinner : NgxSpinnerService){
    this.syncMessenger=new WebSocketHelper("wss://echo.websocket.org",this.MessageRecieved)
  }
  MessageRecieved(data){
    debugger;
  }
  WebSocketDemoTest(){
    this.syncMessenger.SendMessage("Done");
  }

  ngOnInit(){
    this.spinner.show();

    setTimeout(
      ()=>{this.spinner.hide();},5000
    )
  }
  title = 'AngularOverlay';
}
