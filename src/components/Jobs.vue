<template>
  <div>
    <ul>
			<li v-for="(job, i) in allJobs" :key="i">
				<img v-bind:src="job.company_logo">
				<h2>{{job.title}}</h2>
				<p>{{job.location}}</p>
			</li>
		</ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
	name: "Jobs",
	methods: {
		...mapActions(["fetchJobs"])
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
			width: 20%;
			border: 1px solid #e0dede;
			border-radius: 5px;
			padding: 1.5rem 0.5rem 0.5rem;
			margin: 0.5rem;

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