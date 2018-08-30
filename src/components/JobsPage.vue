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
                              <tr>
                                  <td>
                                    <tr><a class="title-2">{{job.title}}</a></tr>
                                    <tr><a></a> </tr>
                                    <tr class="empresa title-5">{{job.company}}</tr>
                                    </td>
                                  
                                 <td>
                                    <tr>{{job.location}}</tr>
                                    <hr>
                                    <tr><a>j{{job.date}}</a></tr>
                                  </td>
                                  
                                  
                                  <td>
                                      
                                          
                                            <a target="_blank" :href="job.url" class="btn btn-success btn-sm btn-block">
                                            <i class="fa fa-suitcase"></i>&nbsp; SEE OFFER</a>
                                          
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
    if (this.authenticated !== true) {
      this.$router.replace({ name: "loginPage" });
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
      axios
        .get("http://34.253.84.43:3030/api/jobs/"+localStorage.getItem("user_id"))
        .then(response => {
          (this.jobsList = response.data)
        })
        .catch(error => {
        });
    },
    jobDate(date){
      console.log('Esto funka¿?')

    },
    auth() {
      this.authenticated = localStorage.getItem("auth");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.empresa{
color: rgb(50, 87, 167);
}
</style>
