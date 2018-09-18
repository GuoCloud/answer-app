const socket = new WebSocket('ws://172.20.10.9:8888');

function subscribeToWeb(ck) {
    socket.onopen = function () {
        // Web Socket 已连接上，使用 send() 方法发送数据
        socket.send("发送数据");
        alert("数据发送中...");
    };

    socket.onmessage = function (evt) {
        alert("数据已接收...");
    };

    socket.onclose = function () {
        // 关闭 websocket
        alert("连接已关闭...");
    };
}

export { subscribeToWeb };