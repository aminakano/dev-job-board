<template>
  <div>
		<Spinner />
    <ul class="jobs">
			<li v-for="(job, i) in allJobs" 
					:key="i" 
					@click="viewDetail(job.id)">				
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
		<Button msg="View more" />
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import Spinner from "../components/Spinner.vue";
import Button from "../components/Button.vue";

export default {
	name: "Jobs",
	components: {
		Spinner,
		Button
  },
	methods: {
		...mapActions(["fetchJobs"]),
		viewDetail(id){
				this.$router.push({
				path: `job/${id}`,
			});
			console.log(id)
		}
	},
	computed: {
		...mapGetters(["allJobs"]),
		...mapState({
        loading: state => state.loading
      })
	},
	created(){
		this.fetchJobs();
		// this.$store.commit("loading", false);
	},
	mounted(){
		// this.$store.commit("loading", true);
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
Button {
	width: 10rem;
}
</style>