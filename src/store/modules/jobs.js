import axios from "axios";
const proxy = "https://cors-anywhere.herokuapp.com/";
const baseUrl = "https://jobs.github.com/positions.json";
const singleJob = `https://jobs.github.com/positions/`;
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
    let resultCount = 1, onPage = 0;
    const allJobs = [];

    while(resultCount > 0) {

      const response = await axios.get(`${proxy}${baseUrl}?page=${onPage}`, headers);
      const jobs = await response.data;
      allJobs.push(...jobs);
      resultCount = jobs.length;
      onPage ++

      commit("setJobs", allJobs);
      commit("loading", false);
      console.log(resultCount)
      console.log(`got ${allJobs.length} total`);
    }
    
  },
  async viewDetail ({ commit }, id) {
    const response = await axios.get(`${proxy}${singleJob}${id}.json`, headers); 
    commit("setDetail", response.data);
    console.log(response.data);
  },
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
