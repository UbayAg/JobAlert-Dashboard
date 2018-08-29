<template>
<div id="jobsPage">

<!-- !PAGE CONTENT! -->
<div class="w3-main w3-content w3-padding" style="max-width:1200px">

    <h1 class="w3-center">Subscribtions</h1>
  <!-- Subs Grid-->
  <div class="w3-row-padding w3-center w3-display-container" id="subs">
    <div v-for="sub in subsList" :key= "sub" :id="sub" class="w3-third">
      <div>
      <h3 class="w3-padding-16 w3-card-4">{{sub}}</h3>
      <button class="w3-button w3-block w3-red w3-card-4">UNSUBSCRIBE</button>
      </div>
    </div>
    
    
  </div>
  

  <!-- Pagination -->
  <div class="w3-center w3-padding-32">
    <div class="w3-bar">
      <a href="#" class="w3-bar-item w3-button w3-hover-black">«</a>
      <a href="#" class="w3-bar-item w3-black w3-button">1</a>
      <a href="#" class="w3-bar-item w3-button w3-hover-black">2</a>
      <a href="#" class="w3-bar-item w3-button w3-hover-black">3</a>
      <a href="#" class="w3-bar-item w3-button w3-hover-black">4</a>
      <a href="#" class="w3-bar-item w3-button w3-hover-black">»</a>
    </div>
  </div>
  
  

<!-- End page content -->
</div>

</div>
</template>

<script>
import axios from "axios";
export default {
  name: "SubsPage",
  created() {
    this.auth();
    if (this.authenticated !== "true") {
      this.$router.replace({ name: "loginPage" });
    };
    this.getSubs();
  },
  data() {
    return {
      subsList: [],
      authenticated: false

    };
  },
  methods: {
    getSubs() {
      axios
        .get("http://localhost:3000/data")
        .then(response => {
          console.log(response.data);
          this.subsList = response.data[0].subscriptions;
          console.log(this.subsList)
        })
        .catch(error => {
          console.log("ERROR:", error);
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
