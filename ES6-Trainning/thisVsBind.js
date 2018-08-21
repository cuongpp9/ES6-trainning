var blog = {
    domain : "terralogic.com",
    author : "cuongpp",
    showWebsite : function (callbackFunction){
        callbackFunction();
    },
    render : function(){
        //const thisNormal = this;
        this.showWebsite(function(){
            console.log(this.domain);
            console.log(this.author);
        }.bind(blog));//or this
    }
};

blog.render();