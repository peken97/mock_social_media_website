<template>

        <nav id="header" class="d-flex flex-row">
            <div id="header_title">EduConnect</div>
            <div class="header_subtitles">
                <div class="d-flex flex-row-reverse mr-3 ">
                    <i class="material-icons header_icons">account_box</i>
                    <h5 class="welcome_username mr-3">Welcome {{currentUser.firstName}}</h5>
                </div>
            </div>
        </nav>
        
        </template>
        
        <script>
            import Data from "./data"
            export default {
                name:"Header",
                data(){
                    return{
                        currentUser: {
                            firstName: ""
                        }
                    }
        
                },
                mounted: function(){
                    
                    this.currentUser = Data.currentUser;
                    //alert(Data.currentUser.firstName)
                }
            }
        </script>
        
        <style>
            .welcome_username{
                font-size: 20px;
                
            }
            .header_icons{
                height:100%;
            }
            .header_icons:hover{
                opacity: 0.5;
                cursor: pointer;
            }
            #header{
                width: 100%;
                background-color: rgb(233, 129, 129);
                padding: 10px 0px;
               
            }
            #header_title{
                font-size: 20px; 
            }
            .header_subtitles{
                width:100%;
            }
            
        
        </style scoped>