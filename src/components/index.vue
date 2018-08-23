<template>
<div id="jobsPage">

<!-- !PAGE CONTENT! -->
<div class="w3-main w3-content w3-padding" style="max-width:1200px">

  <!-- SIGN IN -->
          <div class="w3-section w3-display-container">
            <h2 class="w3-center">Login</h2>
            <label>
              <b>Email</b>
            </label>
            <input class="w3-input w3-border w3-round w3-margin-bottom" placeholder="Enter Email" v-model="email" type="email">
            <label>
              <b>Password</b>
            </label>
            <input class="w3-input w3-border w3-round" placeholder="Enter Password" v-model="password" type="password">
            <button v-on:click="login" class="w3-button w3-block w3-green w3-hover-teal w3-round w3-section w3-padding" type="submit">Sign in</button>
            <!-- Error Message -->
            <div id="loginError" class="ErrorMessage w3-modal w3-display-container w3-padding w3-deep-orange w3-margin-bottom">
              <span class="w3-padding">Email o contraseña incorrectos</span>
              <span onclick="document.getElementById('loginError').style.display='none'" class="w3-button w3-transparent w3-display-bottomright w3-hover-red" title="Close Alert">×</span>
            </div>
            <!-- end Error Message -->

            <div class="w3-container w3-padding-16 w3-light-grey">
              <button href="#" class="w3-button w3-padding w3-round w3-orange w3-hover-amber">Forgot password?</button>
              <button onclick="document.getElementById('signUp').style.display='block'" class="w3-button w3-blue w3-hover-green w3-round w3-right w3-padding">Do not have an account yet?</button>
            </div>
          </div>
    <!-- end SIGN IN -->

   <!-- SIGN UP -->       

    <div id="signUp" class="w3-modal">
        <div class="w3-modal-content w3-card-4 w3-animate-zoom" style="max-width:600px">
    
        <div class="w3-center"><br>
            <h2 class="w3-center">Create Account</h2>
            <span onclick="document.getElementById('signUp').style.display='none'" class="w3-button w3-xlarge w3-transparent w3-display-topright" title="Close Modal">×</span>
        </div>

            <div class="w3-section w3-container">
            <label><b>Email</b></label>
            <input class="w3-input w3-border w3-round w3-margin-bottom" type="email" placeholder="Repeat Email" v-model="S_email" required>
            <label><b>Password</b></label>
            <input class="w3-input w3-border w3-round" type="password" placeholder="Enter Password" v-model="S_password" required>
            <button v-on:click="signUp" class="w3-button w3-block w3-green w3-hover-teal w3-round w3-section w3-padding" type="submit">Sign Up</button>
            </div>      

        <div class="w3-container w3-border-top w3-padding-16 w3-light-grey">
            <button onclick="document.getElementById('signUp').style.display='none'" type="button" class="w3-button w3-deep-orange w3-hover-red w3-round">Cancel</button>
        </div>

        </div>
    </div>
<!-- end SIGN UP -->
        
      
  
  

<!-- End page content -->
</div>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "SubsPage",
  created() {},
  data() {
    return {
      subsList: [],
      data: {},
      email: "",
      password: "",
      S_data:{},
      S_email: "",
      S_password: ""
    };
  },
  methods: {
    resetData(){
      this.data = {};
      this.email = "";
      this.password = "";
    },
    login() {
      console.log(this.email);
      console.log(this.password);
      this.data = {
        email: this.email,
        password: this.password
      }
      console.log(this.data);
      axios
        .post("http://localhost:3333/api/sign", this.data)
        .then(function(response) {
          console.log(response);
          

        })
        .catch(function(error) {
          console.log(error);
          
          document.getElementById('loginError').classList.remove("w3-modal")
        })
        .then(function() {
          // always executed
        });
        this.resetData();
    },
    signUp(){
      this.S_data = {
        email: this.S_email,
        password: this.S_password
      }
      console.log(this.S_data);
      axios
        .post("http://localhost:3333/api/users", this.S_data)
        .then(function(response) {
          // handle success
          console.log(response);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        })
        .then(function() {
          // always executed
        });
        this.resetData();

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Karma", sans-serif;
}
.w3-bar-block .w3-bar-item {
  padding: 20px;
}
</style>
