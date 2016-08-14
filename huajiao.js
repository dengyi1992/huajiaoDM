/**
 * Created by dg on 2016/7/30.
 */
var WebSocketClient = require('websocket').client;

var client = new WebSocketClient();
/***
 * utils
 */
// var a = e.dcodeIO.ByteBuffer;
// var _sendHandshakePack = function () {
//     var e = this.config, t = 0, i = new a(12);
//     i.writeString(e.flag).writeInt8(e.protocolVersion << 4).writeInt8(e.clientVersion).writeInt16(e.appId).writeInt32(0).writeInt16(0);
//     t += i.view.byteLength, t += 4;
//     var n = this._newAddressBookRequestMessage(S.InitLoginReq, {init_login_req: this._newAddressBookMessage("InitLoginReq", {client_ram: r(10)})})
//         , o = l.encode(new Uint8Array(n.toArrayBuffer()), e.defaultKey);
//     t += o.byteLength;
//     i.writeInt32(t).append(o).flip();
//     return i.toArrayBuffer()
// };

client.on('connectFailed', function (error) {
    console.log('Connect Error: ' + error.toString());
});

client.on('connect', function (connection) {
    console.log('WebSocket Client Connected');
    connection.on('error', function (error) {
        console.log("Connection Error: " + error.toString());
    });
    connection.on('close', function () {
        console.log('echo-protocol Connection Closed');
    });
    connection.on('message', function (message) {
        if (message.type === 'utf8') {
            console.log("Received: '" + message.utf8Data + "'");
        }
    });
    // _sendHandshakePack();
    // function sendNumber() {
    //     if (connection.connected) {
    //         var number = Math.round(Math.random() * 0xFFFFFF);
    //         connection.sendUTF(number.toString());
    //         setTimeout(sendNumber, 1000);
    //     }
    // }
    //
    // sendNumber();
});

client.connect('ws://ws.api.huya.com/');