<template>
        <div class="front_page">
        <div >
            
        </div>
        <form  class="card p-4 front_page">
            <div class="form-group">
                <label for="input_email">Email address</label>
                <input type="email" class="form-control" id="input_email" aria-describedby="emailHelp" placeholder="Enter email" v-model="information.email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="input_password">Password</label>
                <input type="password" class="form-control" id="input_password" v-on:click="" placeholder="Password" v-model="information.password">
            </div>
            <div v-if="!alreadyUser" class="form-inline underline mb-2">
                
                    <label class="m-2" for="input_first_name">First Name</label>
                    <input type="text" class="form-control m-2" id="input_first_name" v-on:click="" placeholder="First Name" v-model="information.firstName">
                    <label class="m-2" for="input_last_name">Last Name</label>
                    <input type="text" class="form-control m-2" id="input_last_name" v-on:click="" placeholder="Last Name" v-model="information.lastName">
                
            </div>
            <label class="form_label_already_user"  v-on:click="loginForm()">{{prompt}}</label>
            <div class="d-flex flex-row justify-content-center">
                <button v-if="!alreadyUser" type="button" id="button_signup" v-on:click="signUp()" class="btn btn-primary mr-4">Sign Up</button>
                <button v-if="alreadyUser" type="button" id="button_login" v-on:click="login()" class="btn btn-primary ml-4">Login</button>
            </div>
            <div id="form_message">
                <div v-if="flag.state == 1" v-bind:class="{loginError: flag.active != 0 }">
                    {{flag.accountDoesNotExist}}
                </div>
                <div v-if="flag.state == 2" v-bind:class="{loginError: flag.active != 0 }">
                        {{flag.wrongCredentials}}
                </div>
                <div v-if="flag.state == 3" v-bind:class="{loginError: flag.active != 0 }">
                        {{flag.unacceptableInformation}}
                </div>
                <div v-if="flag.state == 4" v-bind:class="{loginSuccess: flag.active != 0 }">
                        {{flag.successfullSignUp}}
                </div>
                <div v-if="flag.state == 5" v-bind:class="{loginError: flag.active != 0 }">
                        {{flag.accountExists}}
                </div>
            </div>
        </form>
    </div>
</template>
<script>

import Data from "./data"
import Config from "./config"

export default {
    name:"SignUpForm",
    data(){
        return{
            alreadyUser: false,
            prompt: "Already a user? Click here to login!",
            information: {
                email: "",
                password: "",
                firstName: "",
                lastName: ""
            },
            flag:{
                state: 0,
                accountDoesNotExist: "The account does not exist!",
                wrongCredentials: "Wrong Credentials!",
                unacceptableInformation: "Please enter a password that is longer than 6 characters!",
                successfullSignUp: "Successfully signed up!",
                accountExists: "This account already exists!"
            }
        }
    },
    methods:{
        loginForm: function(){
            this.alreadyUser = !this.alreadyUser;
            if(this.prompt == "Already a user? Click here to login!"){
                this.prompt = "Not a user? Click here to sign up!"
            }
            else{
                this.prompt = "Already a user? Click here to login!"
            }
        },
        signUp: function(){
            if(this.validInformation() == false){
                this.flag.state = 3;
                return;
            }
            
            var user = new Data.user();
            let i = Data.userID;
            user.id = i;
           // Data.userID += 1;
            user.email = this.information.email;
            user.password = this.information.password;
            user.firstName = this.information.firstName;
            user.lastName = this.information.lastName;
           // Data.users.push(user)
           // this.flag.state = 4
            var flagState = this;
            
            fetch(Config.post.signUp, {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify(user)
            })
            .then(function(req, res){
                return req.json();
            })
            .then(function(res){
                if(res.status == 0){
                    flagState.flag.state = 4
                }
                else{
                    flagState.flag.state = 5
                }
            })
            
        },
        validInformation: function(){
            if(this.information.email == ""){
                return false;
            }
        },
        login: function(){
           
            var loginInformation = this.information;
            var emitEvent = this;

            fetch(Config.get.login, {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify(loginInformation)
            })
            .then(function(res){
                
                return res.json();
            })
            .then(function(res){
            
                Data.currentUser = res;
                emitEvent.$emit('changePage', "Home");
                 
            })
            
            
            
           


        },
        accountExists: function(x, y){
            if(x.password != y.password && x.email == y.email){
                return true;
            }
        },
        authenticate: function(x, y){
            if(x.password == y.password && x.email == y.email){
                return true;
            }
            return false;
        }
    }

}

</script>
<style>
    .form_label_already_user{
        font-size: 16px;
    }
    .form_label_already_user:hover{
        color: rgb(90, 142, 220);
        cursor: pointer;
    }
     .underline{
                border-bottom: 2px solid rgb(226, 225, 225);
            }
    #form_message{
        margin-top: 10px;
    }
    .front_page {
        margin: 0px auto;
        
        
    }
    .loginError{
        background-color: rgb(255, 197, 197);
    }
    .loginSuccess{
        background-color: rgb(197, 255, 207);
    }
</style>