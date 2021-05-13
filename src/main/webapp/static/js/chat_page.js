socket = new WebSocket('ws://' + document.location.host + '/alfa_chat_war/socket');
const app = new Vue({
    el: ".chat_main_container",
    data: {
        message: [],
        text: '',
        isConnected: true,
        isClosed: false,
        visible: true
    },
    mounted: function(){
        socket.onopen = function () {
            console.log('server connection established');
        };
        socket.onmessage = function (e) {
            app.message.push(e.data);
        };
        socket.onerror = function(error) {
            console.log('error: ' + error);
        };
        socket.onclose = function (e) {
            console.log('server connection closed');
        };
    },
    methods: {
        sendMessage: function() {
            socket.send(localStorage.name + ' : ' + app.text);
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

    },
    computed: {
        count: function() {
            return this.text.length;
        }
    }

});