<template>
    <div>
            <div class="d-flex flex-row">
                    <img class="content_profile_picture " src="../assets/logo.png">
                    <div class="d-flex flex-column">
                        <div class="content_profile_name ml-2">Petar Kenic</div>
                        <div class="content_profile_job ml-2">Software Engineer</div>
                        <div class="content_profile_employer ml-2">AXYZ International Inc</div>
                    </div>
                </div>
        <div class="comment comment_text">
            {{data.text}}
        </div>
    </div>
        </template>
        
        <script>
            

            export default {
                name:"Comment",
                props:{
                    data: {
                        type: Object
                    }
                },
                components: {
                    
                },
                data(){
                    return{
                        
                    }
        
                }
                

            }
        </script>
        
        <style>
            .comment{
                border: 2px solid rgb(225, 225, 225);
                background-color: rgb(225, 225, 225);
                text-align: left;
                padding: 2px 4px;
            }
            .comment_text{
                font-size: 12px;
                
            }
        
        </style scoped>