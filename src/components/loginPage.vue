<template>
<div id="loginPage">
    <div class="page-wrapper">
        <div class="page-content--bge5">
            <div class="container">
                <div class="login-wrap">
                    <div class="login-content">
                        <div class="login-logo">
                            <a href="#">
                                <img src="static/images/icon/logo.png" alt="CoolAdmin">
                            </a>
                        </div>
                        <div class="login-form">
                            
                                <div class="form-group">
                                    <label>Email Address</label>
                                    <input class="au-input au-input--full" type="email" v-model="email" placeholder="Email">
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input class="au-input au-input--full" type="password" v-model="password" placeholder="Password">
                                </div>
                                <div class="login-checkbox">
                                    <label>
                                        <input type="checkbox" name="remember">Remember Me
                                    </label>
                                    <label>
                                        <a href="#">Forgotten Password?</a>
                                    </label>
                                </div>
                                <button v-on:click="login" class="au-btn au-btn--block au-btn--green m-b-20" type="submit">sign in</button>
                            
                            <div class="register-link">
                                <p>
                                    Don't you have account?
                                    <router-link to="signup">Sign Up Here</router-link>
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
  name: "loginPage",
  mounted(){
      this.auth();
  if (this.authenticated === "true") {
      this.$router.replace({ name: "JobsPage" });
    };
  },
  created() {},
  data() {
    return {
      data: {},
      email: "",
      password: "",
      userData: {},
      authenticated: false
    };
  },
  methods: {
    login() {
      this.data = {
        email: this.email,
        password: hash.sha256().update(this.password).digest('hex')
        //password: this.password
      }
      const that = this;
      console.log("[USER DATA]: ",this.data);
      axios
        .post("http://34.253.84.43:3030/api/sign", this.data)
        .then(function(response) {
         
          that.userData = {
            user_email: response.data.email,
            user_password: that.data.password,
            user_id: response.data.id
          }

          localStorage.setItem("user_email", that.userData.user_email);
          localStorage.setItem("user_password", that.userData.user_password);
          localStorage.setItem("user_id", that.userData.user_id);
          
          localStorage.setItem("auth", true);

          that.$router.replace({ name: "JobsPage" });
        })
        .catch(function(error) {
          console.log(error);
        })
        .then(function() {
          // always executed
        });
    },
    auth(){
      this.authenticated = localStorage.getItem("auth");
      console.log("[AUTH]: ", this.authenticated);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
