socket = new WebSocket('ws://' + document.location.host + '/alfa_chat/socket');
const app = new Vue({
    el: ".chat_main_container",
    data: {
        message: [],
        text: '',
        isConnected: true,
        isClosed: false,
        visible: true,
        serverMessage: ''
    },
    mounted: function(){
        socket.onopen = function () {
            console.log('server connection established');
            app.serverMessage = 'connection is active'
        };
        socket.onmessage = function (e) {
            app.message.push(e.data);
        };
        socket.onerror = function(error) {
            console.log('error: ' + error);
            app.serverMessage = 'error: ' + error
        };
        socket.onclose = function (e) {
            console.log('server connection closed');
            app.serverMessage = 'connection closed'
        };
    },
    methods: {
        sendMessage: function() {
            socket.send(sessionStorage.name + ' : ' + app.text);
            app.text = '';
            let element = document.getElementById('messages_box');
            element.scrollTop = element.scrollHeight;
        },
        closed: function() {
            socket.onclose();
            socket.close();
        },
        connected: function() {
            socket.onopen();
        }

    }
});