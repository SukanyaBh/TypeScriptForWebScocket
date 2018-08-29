export class WebSocketHelper{
    webSocket:WebSocket;
    constructor(url:string,onMessageCallBack:Function=null){
        this.webSocket=new WebSocket(url);
        this.webSocket.onopen = function() {
           console.log("opened")
         };
         this.webSocket.onmessage=function(messageResponse){
                if(onMessageCallBack!=undefined){
                    onMessageCallBack(messageResponse.data);
                }
         }

    }
    SendMessage(message:string){
        this.webSocket.send(message);
    }    
}