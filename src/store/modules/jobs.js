import axios from "axios";
const proxy = "https://cors-anywhere.herokuapp.com/";
const baseUrl = "https://jobs.github.com/positions.json";
// ?page=3&search=code
// const baseUrl = "http://api.indeed.com/";
const headers = { 'Content-Type': 'application/x-www-form-urlencoded', 'x-li-format': 'json'}

const state = {
  jobs: []
};

const getters = {
  allJobs: state => state.jobs
};

const actions = {
  async fetchJobs ({ commit }) {
		const response = await axios.get(`${proxy}${baseUrl}`, headers);
    commit("setJobs", response.data);
		console.log(response.data)
		// console.log(response.data[3].title.slice(0,35)+ "...")
	}
};

const mutations = {
  setJobs: (state, jobs) => (state.jobs = jobs)
};

export default {
  state,
  getters,
  actions,
  mutations
};
