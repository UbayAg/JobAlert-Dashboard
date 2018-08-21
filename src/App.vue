<template>
  <div id="app">
    <!--TOP MENU-->
  <div id="MenuBar">
<div class="w3-teal " style="">
  <div class="w3-bar w3-content w3-center w3-display-container" style="max-width: 1200px;">
    <a href="index.html" class="w3-bar-item w3-button w3-display-middle w3-wide w3-hover-green"><b>JobAlert</b></a>
    <a href="about.html" class="w3-bar-item w3-button w3-hide-small w3-right w3-hover-green">About</a>
    <router-link to="/Subs" class="w3-bar-item w3-button w3-hide-small w3-left w3-hover-green">Subscribtions</router-link>
    <router-link to="/Jobs" class="w3-bar-item w3-button w3-hide-small w3-left w3-hover-green">Jobs</router-link>
    <a href="javascript:void(0)" class="w3-bar-block w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium w3-hover-green" @click="hamburgerMenu">&#9776;</a>
  </div>
</div>
  
  <!--Hidden MENU-->
  <div id="hamburger" class="w3-bar-block w3-teal w3-hide w3-hide-large w3-hide-medium w3-animate-top">
    <router-link to="/Jobs" class="w3-bar-item w3-button w3-center w3-hover-green">Jobs</router-link>
    <router-link to="/Subs" class="w3-bar-item w3-button w3-center w3-hover-green">Subscribtions</router-link>
    <a href="about.html" class="w3-bar-item w3-button w3-center w3-hover-green">About</a>
  </div>
</div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  
  data(){
    return{
      x:""
    }
  },
  methods: {
      // Script to open and close sidebar
    hamburgerMenu() {
      this.x = document.getElementById("hamburger");
      if (this.x.className.indexOf("w3-show") == -1) {
          this.x.className += " w3-show";
      } else { 
          this.x.className = this.x.className.replace(" w3-show", "");
      }
  }
    }
}
</script>

<style>

</style>
