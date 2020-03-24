import axios from "axios";
const proxy = "https://cors-anywhere.herokuapp.com/";
const baseUrl = "https://jobs.github.com/positions.json";
const singleJob = `https://jobs.github.com/positions/`;
// ?page=3&search=code
// const baseUrl = "http://api.indeed.com/";
const headers = { 'Content-Type': 'application/x-www-form-urlencoded', 'x-li-format': 'json'}

const state = {
  jobs: [],
  loading: true,
  detail: {}
};

const getters = {
  allJobs: state => state.jobs,
  singleDetail: state => state.detail
};

const actions = {
  async fetchJobs ({ commit }) {
		const response = await axios.get(`${proxy}${baseUrl}`, headers);
    commit("setJobs", response.data);
    commit("loading", false)
		console.log(response.data)
  },
  async viewDetail ({ commit }, id) {
    const response = await axios.get(`${proxy}${singleJob}${id}.json`, headers); 
    commit("setDetail", response.data);
    console.log(response.data);
  },
  // async moreJobs ({ commit }) {
  //   const response = await axios.get(`${proxy}${baseUrl}?page=1`, headers);
  // }
};

const mutations = {
  setJobs: (state, jobs) => (state.jobs = jobs),
  setDetail: (state, detail) => (state.detail = detail),
  loading: (state, loading) => {
    state.loading = loading;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
