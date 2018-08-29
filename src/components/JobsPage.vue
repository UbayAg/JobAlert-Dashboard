<template>
<div id="jobsPage" >
<!-- DATA TABLE-->
  <section class="p-t-20" style="min-height: 1vh">
      <div class="container">
          <div class="row">
              <div class="col-md-12">
                  <h3 class="title-4 m-b-35">Jobs</h3>                  
                  <div class="table-responsive ">
                      <table class="table table-data2">
                          
                          <tbody>
                              <tr class="tr-shadow">
                                  
                                  <td>Lori Lynch</td>
                                  
                                  <td class="desc">Samsung S8 Black</td>
                                  <td>2018-09-27 02:12</td>
                                  <td>
                                      <span class="status--process">Processed</span>
                                  </td>
                                  <td>$679.00</td>
                                  <td>
                                      <div class="table-data-feature">
                                          <button class="item" data-toggle="tooltip" data-placement="top" title="Send">
                                              <i class="zmdi zmdi-mail-send"></i>
                                          </button>
                                          <button class="item" data-toggle="tooltip" data-placement="top" title="Edit">
                                              <i class="zmdi zmdi-edit"></i>
                                          </button>
                                          <button class="item" data-toggle="tooltip" data-placement="top" title="Delete">
                                              <i class="zmdi zmdi-delete"></i>
                                          </button>
                                          <button class="item" data-toggle="tooltip" data-placement="top" title="More">
                                              <i class="zmdi zmdi-more"></i>
                                          </button>
                                      </div>
                                  </td>
                              </tr>
                              <tr class="spacer"></tr>
                              
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
      </div>
  </section>
  <!-- END DATA TABLE-->

</div>
</template>

<script>
import axios from "axios";
export default {
  name: "JobsPage",
  created(){
  },
  mounted() {
      this.auth();
      console.log('[AUTH2]: ', this.authenticated)
    if (this.authenticated !== true) {
      this.$router.replace({ name: "loginPage" });
      console.log('hola')
    }
    this.getJobs();
  },
  data() {
    return {
      jobsList: [],
      page: 0,
      authenticated: false
    };
  },
  methods: {
    getJobs() {
      console.log("GET A FUKING JOB!");
      axios
        .get("http://localhost:3000/data")
        .then(response => {
          (this.jobsList = response.data[0].jobs),
            console.log("Aqui tienes la mierda");
        })
        .catch(error => {
          console.log("ERROR:", error);
        });
    },
    auth() {
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
li {
  list-style: none;
}
</style>
