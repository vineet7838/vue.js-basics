let app = new Vue({
    el: '#app',
    data:{
        title: "ToDo List",
        username:""
    },
    methods:{
    titleUpperCase(){
        this.title=this.title.toUpperCase()
    },
    titleLowerCase(){
        this.title=this.title.toLowerCase()
    }
    }
})