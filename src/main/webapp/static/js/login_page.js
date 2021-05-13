const app = new Vue({
    el: '.login_container',
    data: {
        name: ''
    },
    mounted() {
        if (localStorage.name) {
            this.name = localStorage.name;
        }
    },
    methods: {
        persist() {
            if(this.name.length != 0) {
                localStorage.name = this.name;
                window.location.href = "static/html/chat_page.html"
            }
        }
    }
})