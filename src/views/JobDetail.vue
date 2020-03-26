<template>
  <div class="job-detail">
    <Spinner />
    <div class="banner">
      <router-link to="/" class="link"><i class="fas fa-arrow-left"></i> Go back</router-link>
      <div class="img-container">
        <img class="logo" v-bind:src="viewDetail.company_logo"/>
      </div>
      <h1>{{ viewDetail.title }}</h1>
      <h2>{{ viewDetail.company }}</h2>
      <div class="info">
        <p>{{ viewDetail.type }} | </p>
        <p>{{ viewDetail.location }} | </p>
        <p>Posted: {{ getDate() }}</p>
      </div>
      <a class="apply-btn" v-bind:href="viewDetail.url" target="_blank"><Button msg="Apply for this job"/></a>

    </div>
    <div class="job-desc">
      <p class="job-desc-detail" v-html="viewDetail.description"></p>
      <a v-bind:href="viewDetail.url" target="_blank"><Button msg="Apply for this job"/></a>
      <router-link to="/" class="link">Go back</router-link>
    </div>
      
  </div>
</template>

<script>
import Button from "../components/Button.vue";
import Spinner from "../components/Spinner.vue";
// import { mapGetters } from "vuex";
// import { mapGetters, mapActions } from "vuex";
import axios from 'axios';

export default {
  name: "JobDetail",
  components: {
    Button,
    Spinner
  },
  props: ["id"],
  data() {
    return {
      viewDetail: "",
      loading: true
    }
  },
  methods: {
    // ...mapActions(["viewDetail"])
    getDate: function(){
      return this.viewDetail.created_at.split(" ").slice(1,3).join(" ")
    }
  },
  computed: {
    // ...mapGetters(["singleDetail"])
    
	},
  // created(){
  //   this.viewDetail()
  // },
  mounted() {
    const proxy = "https://cors-anywhere.herokuapp.com/"

    this.isLoading = true
    axios.get(`${proxy}https://jobs.github.com/positions/${this.id}.json`)
          .then(res => {
            this.viewDetail = res.data
            this.loading = false
            
            console.log(this.viewDetail)
          })
          .catch(err => {
            console.log(err)
          })
  }
};
</script>

<style lang="scss">

.job-detail {
  margin-top: 3rem;

  .link {
        color: #6072e1;
        align-self: flex-end;
      }

    .banner {
      padding: 0 5% 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media screen and (min-width: 768px) {
        padding: 0 15% 1.5rem;
      }

      h1 {
        font-size: 2.5rem;
        text-align: left;
      }
      h2 {
        text-align: left;
        margin-bottom: 0.5rem;
      }
      .img-container {
        display: flex;
        padding: 1rem 0;
        .logo {
          max-height: 100px;
          max-width: 180px;
        }
      }

      .info {
        display: flex;
          p {
            margin-right: 0.5rem;
          }
      }

      

      .apply-btn {
        align-self: flex-end;
        width: 12rem;
      }
    }
    .job-desc {
      background: #e0dede;
      padding: 1rem 5%;
      display: flex;
      flex-direction: column;

      @media screen and (min-width: 768px) {
        padding: 1rem 20%;
      }
      .job-desc-detail {
        font-size: 1.25rem;
        margin: 1.5rem 0 3rem;

        a {
          color: #6072e1;
        }

        p {
          margin-bottom: 1rem;
          text-align: left;
        }

        ul {
          li {
            text-align: left;
          }
        }
      }
      
      // .link {
      //   align-self: flex-end;
      // }
  }

  Button {
    align-self: flex-end;
    width: 12rem;
  }
}

</style>