<template>

        <div class="card mb-2 content_separator" id="">
                <div class="d-flex flex-row underline pb-2 ml-2 mr-2">
                    <img class="content_profile_picture" src="../assets/logo.png">
                    <div class="d-flex flex-column">
                        <div class="content_profile_name ml-2">Petar Kenic</div>
                        <div class="content_profile_job ml-2">Software Engineer</div>
                        <div class="content_profile_employer ml-2">AXYZ International Inc</div>
                    </div>
                </div>
            <div class="homefeed_write_post_title mt-2 mb-1">Write New Post</div>
            
            <textarea id="homefeed_write_post_textarea" placeholder="Write something!" v-model="text">{{text}}</textarea>
            <div id="homefeed_write_post_footer" class="d-flex flex-row-reverse pr-4 pt-2">
                <a href="#" class="homefeed_write_post_button p-1" v-on:click="createNewPost()">Post</a>
            </div>
        </div>
        
        </template>
        
        <script>
            import Data from "./data"
            import Config from "./config"
            export default {
                name:"Header",
                data(){
                    return{
                        text: ""
                    }
        
                },
                methods:{
                    createNewPost: function(){
                        let text = this.text;
                        let id = Data.posts.length;
                        let data = {
                            text: text,
                            id: id,
                            author: Data.currentUser.fullName
                        }
                        Data.posts.push(data);
                        Data.currentUser.posts.push(data);
                        this.text = "";

                        fetch(Config.post.createNewPost, {
                        headers: {
                            "Content-Type": "application/json"
                        },
                        method: "POST",
                        body: JSON.stringify(data)
                        })
                        .then(function(req, res){
                            return req.json();
                        })
                        .then(function(res){
                            console.log(res);
                        })
                        this.$emit('insertNewPost', data);
                    }
                }
            }
        </script>
        
        <style>
            .content_profile_picture{
                height:30px;
                margin: auto 0;
            }
            .content_profile_name{
                font-size: 12px;
                font-weight: bold;
                text-align:left;
            }
            .content_profile_job{
                font-size: 12px;
                line-height: 5px;
                text-align:left;
            }
            .content_profile_employer{
                font-size: 12px ;
                
                text-align:left;
            }
            #footer{
                width: 100%;
                background-color: rgb(233, 129, 129);
                padding: 10px 0px;
               
            }
            #footer_title{
                font-size: 20px; 
            }
            #homefeed_write_post_footer{
                padding-bottom: 5px;
                border-top: 2px solid rgb(245, 241, 241);
            }
            #homefeed_write_post_textarea{
                resize: none;
                font-size: 12px;
                width: 100%;
                border: none;
                margin-bottom: 10px;
                padding: 5px;
                outline: none;
                text-overflow: scroll;
            }
            .homefeed_write_post_title{
                font-size: 14px;
                text-align: left;
                margin-left: 5px;
            }
            .homefeed_write_post_button{
                background-color: rgb(233, 129, 129);
                border: none;
                color: black;
                text-decoration: none;
            }
            .homefeed_write_post_button:hover{
                text-decoration: none;
                color: black;
            }
        
        </style >