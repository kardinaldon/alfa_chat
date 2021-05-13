const app = new Vue({
    el: '.login_container',
    data: {
        name: ''
    },
    mounted() {
        if (sessionStorage.name) {
            this.name = sessionStorage.name;
        }
    },
    methods: {
        persist() {
            if(this.name.length != 0) {
                sessionStorage.name = this.name;
                window.location.href = "static/html/chat_page.html"
            }
        }
    }
})