export default { 
userID: 0,
postID: 0,
currentUser: undefined,
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