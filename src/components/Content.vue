<template>

        
    <div class="card content d-flex flex-column">
        <div class="d-flex flex-row ml-2">
            <img class="content_profile_picture" src="../assets/logo.png">
            <div class="d-flex flex-column">
                <div class="content_profile_name ml-2">Petar Kenic</div>
                <div class="content_profile_job ml-2">Software Engineer</div>
                <div class="content_profile_employer ml-2">AXYZ International Inc</div>
            </div>
        </div>
        <p class="content_text mt-2">{{data.text}}</p>
        <p v-if="isOverflow"></p>
        <div class="d-flex flex-row">
            <p class="content_likes">{{likeCount}} Likes</p>
            <div href="" class="content_comments ml-2">{{commentCount}} Comments</div>
        </div>
        <div class="content_footer">
            <button v-on:click="incrementLikes()" class="content_footer_button">Like</button>
            <button v-on:click="incrementComments()" class="content_footer_button" for="enter_comment">Comment</button>
        </div>
        <div v-if="writeComment">
            <textarea class="content_comment_write" id="enter_comment" v-model="newComment" v-on:keyup.enter="insertNewComment()"></textarea>
        </div>
        <div v-if="commentCount > 0" class="content_comments_section ">
            <div  v-on:click="showMoreComments()"class="content_comments_section_show">Show Comments</div>
            <div v-if="showComments" v-on:click="toggleShowComments()"class="content_comments_section_show">Hide Comments</div>
            <ul class="content_comment_list">
                <li v-if="showComments && n - 1 < commentsLimit && n-1 < comments.length"  v-for="n in commentsLimit" class="content_comment">
                    
                    <Comment  v-bind:data="comments[n-1 + commentsIndex]"></Comment>
                </li>
            </ul>
        </div>
    </div>
        
        
</template>
        
<script>
    import Comment from "./Comment"
    import Data from "./data"

    export default {
        name:"Content",
        components:{
            Comment
        },
        mixins: [Data],
        props:{
            type: {
                default: this.text,
                type: String
            },
            data: {
                type: Object
            }
        },
        data(){
            return{
                renderUtil: {
                    maxCount: 1,
                    count: 0
                },
                content_type:{
                    text: "text",
                    img: "img"
                },
                newComment: "",
                writeComment: false,
                showComments: false,
                postID: undefined,
                likeCount: 0,
                commentCount: 0,
                commentsIndex: 0,
                commentsLimit: 0,
                comments: [
                    
                ],
                isOverflow: false

            }
        },
        mounted: function(){
            console.log("mounted: " + this.likeCount);
            //alert("LikeCount: " + this.likeCount);
            this.likeCount = 0;
          // console.log(Data.posts[postID]);
        },
        updated: function(){
            console.log()
            //alert("UPDATED: " +this.likeCount);
        },
        methods:{
            incrementLikes: function(){
               // alert("LikeCount: " + this.likeCount);

                this.likeCount++;
            },
            incrementComments: function(){
                this.writeComment = !this.writeComment;
                
            },
            insertNewComment: function(){
                let author = "Petar Kenic";
                let text = this.newComment;
                let newComment = {
                    author: author,
                    text: text
                }
                let x = 4;
                this.commentCount++;
                this.comments.push(newComment);
                this.newComment = "";
            },
            showMoreComments: function(){
                
                this.showComments = true;
                this.commentsLimit += 3;
            },
            toggleShowComments: function(){
                this.showComments = false;
                this.commentsIndex = 0;
                this.commentsLimit = 0;
            }
        }
    }
</script>

<style >
    .content{
       background-color: rgb(242, 242, 242);
        min-height: 40px;
        padding: 2px 10px;
        
    }
    .content_text{
        font-size: 13px;
        text-align:left;
        max-height:75px;
        
        padding: 0px;
        margin-top: 2px;
        padding-bottom: 10px;
        overflow: hidden;
        margin-bottom: 5px;
    }
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
    .content_footer{
        border-top: 2px solid black;
    }
    .content_footer_button{
        border: 0px;
        font-size: 12px;
        background-color: #FFF;
        padding: 1px 15px;

    }
    .content_footer_button:hover {
        opacity: 0.5;
        background-color: rgb(221, 221, 221);
        
    }
    .content_likes{
        opacity: 0.5;
        font-size: 12px;
        margin-top: 5px;
    }
    .content_comments{
        color: black;
        opacity: 0.5;
        font-size: 12px;
        margin-top: 5px;
        cursor: pointer;
       
    }
    .content_comments:hover{
        color: black;
        opacity: 0.4;
        text-decoration: none;
    }
    .content_comments_section{
        margin: 0px;
        
    }
    .content_comments_section_show{
        margin: 0px;
        color: black;
        font-size: 12px;
        opacity: 0.8;
        cursor: pointer;
    }
    .content_comments_section_show:hover{
        opacity: 0.5;
        color: black;
        text-decoration: none;
        background-color: rgb(247, 247, 247)
    }
    .content_comment{
        list-style-type: none;
        
    }
    .content_comment_list{
        margin-top: 5px;
        margin-bottom: 5px;
        padding-left: 0px;
    }
    .content_comment_write{
        resize: none;
        font-size: 12px;
        width: 100%;
        border: none;
        margin-bottom: 10px;
        padding: 5px;
        outline: none;
        text-overflow: scroll;
        margin-top: 5px;
    }
</style >