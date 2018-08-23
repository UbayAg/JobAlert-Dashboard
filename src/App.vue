<template>
  <div id="app">
    <!--TOP MENU-->
  <div id="MenuBar">
<div class="w3-teal " style="">
  <div class="w3-bar w3-content w3-center w3-display-container" style="max-width: 1200px;">
    <a href="" class="w3-bar-item w3-button w3-display-middle w3-wide w3-hover-green"><b>JobAlert</b></a>
    <router-link to="/Subs" class="w3-bar-item w3-button w3-hide-small w3-left w3-hover-green">Subscribtions</router-link>
    <router-link to="/Jobs" class="w3-bar-item w3-button w3-hide-small w3-left w3-hover-green">Jobs</router-link>
    <a href="" class="w3-bar-item w3-button w3-hide-small w3-right w3-hover-green">About</a>
    <a href="javascript:void(0)" class="w3-bar-block w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium w3-hover-green" @click="hamburgerMenu">&#9776;</a>
  </div>
</div>
  
  <!--Hidden MENU-->
  <div id="hamburger" class="w3-bar-block w3-teal w3-hide w3-hide-large w3-hide-medium w3-animate-top">
    <router-link to="/Jobs" class="w3-bar-item w3-button w3-center w3-hover-green">Jobs</router-link>
    <router-link to="/Subs" class="w3-bar-item w3-button w3-center w3-hover-green">Subscribtions</router-link>
    <a href="" class="w3-bar-item w3-button w3-center w3-hover-green">About</a>
  </div>
</div>
    <router-view/>
    <!-- Footer -->
    <div class="w3-light-grey">
    <div class="w3-bar w3-content w3-center w3-display-container" style="max-width: 1200px;">
      <footer class="w3-row-padding w3-padding-32">
          <h3 class="w3-wide"><b class="w3-center w3-teal w3-padding w3-round">JobAlert</b></h3>
          <h4>The new way to get a job</h4>          
      </footer>
    </div>
    </div>
</div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      x: ""
    };
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
};
</script>

<style>
</style>
