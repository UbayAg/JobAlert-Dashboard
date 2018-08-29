<template>
  <div id="app">
    <router-view/>
    
</div>
</template>

<script>
export default {
  name: "App",
  created(){
  this.auth()
  },
  mounted() {
    if (!this.authenticated) {
      this.$router.replace({ name: "loginPage" });
    }
  },
  data() {
    return {
      authenticated: false,
      x: ""
    };
  },
  methods: {
    auth(){
      this.authenticated = localStorage.getItem("auth");
    },
    logOut(){
      
      localStorage.setItem("auth", false);
      this.authenticated = localStorage.getItem("auth");

      localStorage.removeItem("user_email");
      localStorage.removeItem("user_password", "");
      localStorage.removeItem("user_id", "");
      this.auth()
      this.$router.replace({ name: "loginPage" });
    },    
  }
};
</script>

<style>
</style>
