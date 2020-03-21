<template>
  <div class="job-detail">
    <div class="banner">
      <h1>Full-stack Developer</h1>
      <h2>CompuGroup Medical</h2>
      <div class="info">
        <p>Full time</p>
        <p>Amsterdam</p>
      </div>
      <Button msg="Apply for this job"/>
      <router-link to="/" class="link">Go back</router-link>
    </div>
    <div class="job-desc">
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates consequuntur accusamus dicta itaque dolor pariatur neque hic cumque velit minima culpa dolore, incidunt odio recusandae nulla et? Dicta, temporibus sapiente.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates consequuntur accusamus dicta itaque dolor pariatur neque hic cumque velit minima culpa dolore, incidunt odio recusandae nulla et? Dicta, temporibus sapiente.

      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates consequuntur accusamus dicta itaque dolor pariatur neque hic cumque velit minima culpa dolore, incidunt odio recusandae nulla et? Dicta, temporibus sapiente.

      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates consequuntur accusamus dicta itaque dolor pariatur neque hic cumque velit minima culpa dolore, incidunt odio recusandae nulla et? Dicta, temporibus sapiente.

      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates consequuntur accusamus dicta itaque dolor pariatur neque hic cumque velit minima culpa dolore, incidunt odio recusandae nulla et? Dicta, temporibus sapiente.

      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates consequuntur accusamus dicta itaque dolor pariatur neque hic cumque velit minima culpa dolore, incidunt odio recusandae nulla et? Dicta, temporibus sapiente.

      </p>
    </div>
      
  </div>
</template>

<script>
import Button from "../components/Button.vue"
export default {
  name: "JobDetail",
  components: {
    Button
  }
};
</script>

<style lang="scss">

.job-detail {
  margin-top: 3rem;


    .banner {
      height: 40vh;
      padding: 1.5rem 15%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h1 {
        font-size: 2.5rem;
        text-align: left;
      }
      h2 {
        text-align: left;
      }
      .info {
        display: flex;
        width: 20%;
        justify-content: space-between;
      }
      Button {
        align-self: flex-end;
        width: 12rem;
      }
      .link {
        color: #6072e1;
      }
    }
    .job-desc {
      background: #e0dede;
      padding: 1rem 20%;

      p {
        font-size: 1.25rem;
      }
  }
}

</style>