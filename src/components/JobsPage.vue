<template>
<div id="jobsPage">
<!-- !PAGE CONTENT! -->
<div class="w3-main w3-content w3-padding" style="max-width:1200px">

  <h1 class="w3-center">Jobs</h1>

  <!-- Jobs List-->
  <li v-for="job in jobsList" :key= "job.id" :id="job.id" class="w3-bar w3-card-4 w3-margin-top w3-display-container">
      <div class="w3-bar-item">
        <span class="w3-large">{{job.title}}</span><br>
        <span>{{job.description}}</span>
        </div>  
        <a href="job.url" class="w3-block w3-button w3-teal w3-hover-green" >See More</a>
    </li>
    
  

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
  
  
  <!-- Footer -->
  <footer class="w3-row-padding w3-padding-32">
      <h3>FOOTER</h3>
      <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
      <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
  </footer>

<!-- End page content -->
</div>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: 'JobsPage',
  created(){
    this.getJobs()
  },
  data () {
    return {
      jobsList: [],
      page: 0
      
    }
  }, methods:{
    getJobs(){
      console.log("GET A FUKING JOB!")
      axios.get('http://localhost:3000/data')
        .then((response) =>  {this.jobsList = response.data[0].jobs, console.log("Aqui tienes la mierda")}
          
        )
        .catch(error => {
          console.log("ERROR:", error)
        });

    }
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body,h1,h2,h3,h4,h5,h6 {font-family: "Karma", sans-serif}
.w3-bar-block .w3-bar-item {padding:20px}
li {
  list-style: none;
}
</style>
