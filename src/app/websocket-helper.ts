export class WebSocketHelper{
    webSocket:WebSocket;
    constructor(url:string,onMessageCallBack:Function=null){
        this.webSocket=new WebSocket(url);

        this.webSocket.onopen=function(){
            alert('opened');
        }

        this.webSocket.onmessage=function(messageResponse){
            if(onMessageCallBack!=null){
                onMessageCallBack(messageResponse.data);
            }
        }
    }
    SendMessage(msg:string){
        this.webSocket.send(msg);
    }
}