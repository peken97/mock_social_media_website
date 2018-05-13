const express = require('express');
const app = express();
const cors = require("cors")
var bodyParser = require('body-parser')

var Data = {
    currentUser: undefined,
    postID: 0,
    user : function(id, first_name, last_name, job_name, employer, email){
        this.id = "";
        this.firstName = "";
        this.lastName = "";
        this.fullName = "";
        this.jobName = "";
        this.employer = "";
        this.employers = Array();
        this.email =  "";
        this.password = "";
        this.posts = [];


    },

    employer: function(name){
        name = "";
    },
    users: [

    ],
    posts: [

    ],
    post: {
        id: undefined,
        author: undefined,
        text: undefined
    },
    comment: {
        author: "",
        text: ""
    }
}

const responseStatus = {
    success: {
        status: 0
    },
    fail: {
        status: 1
    }
}
app.use(bodyParser.json())
app.use(cors());


app.use("/createNewPost", function(req, res, next){
    console.log("Entered middleware")
    Data.postID += 1;
    next();
});


app.get('/', function(req, res){
   
    res.send('hello')
})

app.post('/SignUp', function(req, res){
    
    var user = req.body;
    for(var i = 0; i < Data.users.length; i++){
        if(user.email == Data.users[i].email){
            console.log("Already Exists");
            res.json(responseStatus.fail);
            return;
        }
    }
    Data.users.push(user);
    console.log("Success");
    res.json(responseStatus.success);
})
app.post('/Login', function(req, res){
    
    var user = req.body;
    for(var i = 0; i < Data.users.length; i++)
    {
        if(Data.users[i].email == user.email && Data.users[i].password == user.password){
            res.json(Data.users[i])
            i  = Data.users.length;
        }
    }
    //console.log(Data.currentUser)
})
app.post('/createNewPost', function(req, res){
    console.log(req.body);
    var post = req.body;
    Data.posts.push(post);
    
    res.send("");
})



app.listen(3000, () => console.log("Listening"));

