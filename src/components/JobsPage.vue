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
                          
                          <tbody v-for="job in jobsList" :key= "job.id" :id="job.id" class="tr-shadow">                              
                              <tr >
                                  <td><a class="title-2">{{job.title}}</a></td>
                                  
                                  <td class="desc">{{job.description}}</td>
                                  
                                  <td>{{job.location}}</td>
                                  
                                  <td>
                                      
                                          
                                            <button type="button" class="btn btn-success btn-sm btn-block">
                                            <i class="fa fa-suitcase"></i>&nbsp; APPLY</button>
                                          
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
        .get("http://34.253.84.43:3030/api/jobs/"+localStorage.getItem("user_id"))
        .then(response => {
          (this.jobsList = response.data),
            console.log(response);
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
