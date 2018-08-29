<template>
<div id="dashboard">
    <!-- HEADER MOBILE-->
        <header class="header-mobile d-block d-lg-none">
            <div class="header-mobile__bar">
                <div class="container-fluid">
                    <div class="header-mobile-inner">
                        <a class="logo" href="index.html">
                            <img src="static/images/icon/logo.png" alt="CoolAdmin" />
                        </a>
                        <button class="hamburger hamburger--slider" type="button">
                            <span class="hamburger-box">
                                <span class="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <nav class="navbar-mobile">
                <div class="container-fluid">
                    <ul class="navbar-mobile__list list-unstyled">                        
                        <li>
                            <router-link to="/dashboard/Jobs">
                                <i class="fas fa-inbox"></i>Jobs</router-link>
                        </li>
                        <li>
                            <router-link to="/dashboard/Subs">
                                <i class="fas fa-copy"></i>Subscriptions</router-link>
                        </li>
                        <li>
                            <a>
                                <i class="fas fa-sign-out"></i>Sign Out</a>
                        </li>                        
                    </ul>
                </div>
            </nav>
        </header>
        <!-- END HEADER MOBILE-->

        <!-- MENU SIDEBAR-->
        <aside class="menu-sidebar d-none d-lg-block">
            <div class="logo">
                <a href="#">
                    <img src="static/images/icon/logo.png" alt="Cool Admin" />
                </a>
            </div>
            <div class="menu-sidebar__content js-scrollbar1">
                <nav class="navbar-sidebar">
                    <ul class="list-unstyled navbar__list">                        
                        <li>
                            <router-link to="/dashboard/Jobs">
                                <i class="fas fa-inbox"></i>Jobs</router-link>
                        </li>
                        <li>
                            <router-link to="/dashboard/Subs">
                                <i class="fas fa-copy"></i>Subscriptions</router-link>
                        </li>
                        <li >
                            <a @click="logOut">
                                <i  class="fas fa-sign-out"></i>Log Out</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
        <!-- END MENU SIDEBAR-->

<div class="page-container">
    <router-view></router-view>
</div>



</div>
</template>

<script>
import axios from "axios";
export default {
  name: "dashboard",
  mounted(){
      this.auth()
  if (this.authenticated === "true") {
      this.$router.replace({ name: "JobsPage" });
    };
  },
  created() {},
  data() {
    return {
      authenticated: false
    };
  },
  methods: {    
    logOut(){
      
      localStorage.setItem("auth", false);
      this.auth()
      localStorage.removeItem("user_email");
      localStorage.removeItem("user_password", "");
      localStorage.removeItem("user_id", "");
      this.$router.replace({ name: "loginPage" });
      console.log('replace')
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
