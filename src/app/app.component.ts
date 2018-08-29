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
  isLoading : boolean;
  constructor(private spinner : NgxSpinnerService){
    this.syncMessenger=new WebSocketHelper("wss://echo.websocket.org",this.MessageRecieved);
  }
  MessageRecieved=(data)=>{
    debugger;
    if(data=='Loading'){
      this.isLoading=true;
      this.spinner.show();
    }
    else{
      this.isLoading=false;
      this.spinner.hide();
      alert(data);
    }
  }
  WebSocketDemoTest(msg:string){
    this.syncMessenger.SendMessage(msg);
  }

  ngOnInit(){
    if(this.isLoading==true)
      this.spinner.show();
    else
      this.spinner.hide();

    // setTimeout(
    //   ()=>{this.spinner.hide();},5000
    // )
  }
  title = 'AngularOverlay';
}
