import { Component, OnInit } from '@angular/core';

import {NgxSpinnerService} from 'ngx-spinner';

import {WebSocketHelper} from './websocket-helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  syncMessenger:WebSocketHelper;
  constructor(private spinner:NgxSpinnerService) {
    this.syncMessenger=new WebSocketHelper('wss://echo.websocket.org',this.MessageRecieved);
  }
  MessageRecieved=(data)=>{
    if(data=='Loading'){
      this.spinner.show();
    }
    else{
      this.spinner.hide();
      alert(data);
    }
  }
  WebSocketDemoTest(message:string){
    this.syncMessenger.SendMessage(message);
  }
  ngOnInit(){
  }
  title = 'AngularOverlay';
}
