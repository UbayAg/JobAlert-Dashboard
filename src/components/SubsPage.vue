<template>
<div id="jobsPage">

<!-- DATA TABLE-->
  <section class="p-t-20" style="min-height: 1vh">
      <div class="container">
          <div class="row">
              <div class="col-md-12">
                  <h3 class="title-4 m-b-35">Subscriptions</h3>                  
                  <div class="table-responsive ">
                      <table class="table table-data2">
                          
                          <tbody v-for="sub in subsList" :key= "sub" :id="sub" class="tr-shadow">                              
                              <tr >
                                  <td><a class="title-2">{{sub}}</a></td>
                                  <td>
                                     <button v-on:click="unsubscribe(sub)" type="button" class="btn btn-danger btn-sm btn-block">
                                     <i class="fa fa-trash"></i>&nbsp; UNSUBSCRIBE</button>   
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
      authenticated: false,
      unsubs: ""

    };
  },
  methods: {
    getSubs() {
      axios
        .get("http://34.253.84.43:3030/api/subscriptions/"+localStorage.getItem("user_id"))
        .then(response => {
          this.subsList = response.data.subscriptions;
        })
        .catch(error => {
        });
    },
    unsubscribe(sub){
      let data = {
        "id": localStorage.getItem("user_id"),
        "subscription": sub
      }
      console.log(data);
      const that = this
      axios
        .delete("http://34.253.84.43:3030/api/subscriptions/unsubscribe", {data})
        .then(response => {
         console.log(response)

        })
        .catch(error => {
          console.log(error.response)
        });
                    console.log(
                      that.subsList = that.subsList.filter(sub=>{
                        if(sub !== data.subscription){
                          return sub
                      }
                  
                  })
                    )
    },
    auth(){
      this.authenticated = localStorage.getItem("auth");
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
