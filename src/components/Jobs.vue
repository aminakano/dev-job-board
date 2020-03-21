<template>
  <div>
    <ul class="jobs">
			<li v-for="(job, i) in allJobs" :key="i">				
				<div class="icon-container">
					<img v-bind:src="job.company_logo">
				</div>
				<div class="title-container">
					<h2 v-if="job.title.length > 35">{{job.title.slice(0,35)}}...</h2>
					<h2 v-else>{{job.title}}</h2>
					<p>{{job.location}}</p>
				
				</div>
				
			</li>
		</ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
	name: "Jobs",
	methods: {
		...mapActions(["fetchJobs"]),
	},
	computed: {
		...mapGetters(["allJobs"])
	},
	created(){
		this.fetchJobs();
	}

}
</script>

<style lang="scss" scoped>
ul {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding-left: 0;

	li {
		list-style: none;
		border: 1px solid #e0dede;
		border-radius: 5px;			

		a {
			text-decoration: none;
		}

			&:hover {
				cursor: pointer;
			}

			img {
				max-height: 60px;
				max-width: 130px;
				width: auto;
				height: auto;
			}
	}
}
</style>