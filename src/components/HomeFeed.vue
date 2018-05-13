<template>

        <ul id="homefeed">
            <CreateNewPost v-on:insertNewPost="insertNewPost($event)"></CreateNewPost>
            <div v-for="content in contents" :key="content.id" class="content_separator">
                
                <Content v-bind:data="content"></Content>
            </div>
        </ul>
        
        </template>
        
        <script>
            import Content from "./Content"
            import CreateNewPost from "./CreateNewPost"
            import Data from "./data"
            import Config from "./config"

            export default {
                name:"HomeFeed",
                components: {
                    Content,
                    CreateNewPost
                },
                mounted: function(){
                    console.log(Data.currentUser);
                    for(var i = 0; i < Data.posts.length; i++){
                        this.contents.push(Data.posts[i]);
                    }
                },
                data(){
                    return{
                        contents: [
                            
                            
                        ]
                    }
                },
                methods:{
                    insertNewPost: function(data){
                        
                        this.contents.splice(0, 0, data);
                      /*  fetch(Config.post.createNewPost, {
                        headers: {
                            "Content-Type": "application/json"
                        },
                        method: "POST",
                        body: JSON.stringify(data)
                        })
                        .then(function(res){
                            console.log("res: ")
                            console.log(res)
                            //return res.json();
                        })
                        .then(function(res){
                            console.log("res2: ")
                            console.log(res)
                            
                            
                            
                            
                        })*/
                            //this.contents.push(data);
                    console.log(this.contents);

                    }
                }
            }
        </script>
        
        <style>
            #homefeed{
                max-width: 90%;
                width: 400px;
                margin: 0 auto;
            }
           
            .underline{
                border-bottom: 2px solid rgb(226, 225, 225);
            }
            .content_separator{
                margin: 5px 0px;
            }
        
        </style scoped>