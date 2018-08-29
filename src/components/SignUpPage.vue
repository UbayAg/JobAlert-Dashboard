<template>
<div id="jobsPage">
<head>
    <!-- Required meta tags-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="au theme template">
    <meta name="author" content="EOI Projects">
    <meta name="keywords" content="au theme template">

    <!-- Title Page-->
    <title>Sign Up</title>
</head>
    <div class="page-wrapper">
        <div class="page-content--bge5">
            <div class="container">
                <div class="login-wrap">
                    <div class="login-content">
                        <div class="login-logo">
                            <a>
                                <img src="static/images/icon/logo.png" alt="CoolAdmin">
                            </a>
                            
                        </div>
                        <div class="login-logo">
                            <h3>Register</h3>
                            
                        </div>
                        <div class="login-form">
                            
                                <div class="form-group">
                                    <label>Email Address</label>
                                    <input v-model="S_email" class="au-input au-input--full" type="email" name="email" placeholder="Email">
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input v-model="S_password" class="au-input au-input--full" type="password" name="password" placeholder="Password">
                                </div>
                                <div class="login-checkbox">
                                    <!--<label>
                                        <input type="checkbox" name="aggree">Agree the terms and policy
                                    </label>-->
                                </div>
                                <button v-on:click="signUp" class="au-btn au-btn--block au-btn--green m-b-20" type="submit">register</button>
                                
                            
                            <div class="register-link">
                                <p>
                                    Already have account?
                                    <router-link to="login">Sign In</router-link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    

<!-- end document-->

</div>
</template>

<script>
import hash from 'hash.js'
import axios from "axios";
export default {
  name: "SignUpPage",
  created() {},
  mounted(){
  
  },
  data() {
    return {      
      S_data:{},
      S_email: "",
      S_password: "",
      authenticated: false
    };
  },
  methods: {
    signUp(){
      this.S_data = {
        email: this.S_email,
        password: hash.sha256().update(this.S_password).digest('hex')
      }
      const that = this;
      axios
        .post("http://34.253.84.43:3030/api/users", this.S_data)
        .then(function(response) {
            // handle success
            that.$router.replace({ name: "loginPage" });
        })
        .catch(function(error) {
          // handle error
        })
        .then(function() {
          // always executed
        });

    },
    auth(){
      this.authenticated = localStorage.getItem("auth");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
