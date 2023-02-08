import axios from "axios";
import getCookie from "./getCookie";
export default {
  health: function () {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;

    return axios.get(`${REACT_APP_API_BASE_URL}/ctpo/meta`);
  },
  getStudies: function (query) {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;

    return axios.get(
      `${REACT_APP_API_BASE_URL}/ctpo/studies/project/${query}*`
    );
  },
  loadScenarioList: function (projectId) {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.get(
      `${REACT_APP_API_BASE_URL}/ctpo/studies/${projectId}/plans`
    );
  },
  getStudy: function (id) {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.get(`${REACT_APP_API_BASE_URL}/ctpo/plans/study/${id}`);
  },
  getStudyPlan: function (id) {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.get(`${REACT_APP_API_BASE_URL}/ctpo/plan/${id}`);
  },
  createNewScenario: function (newScenario) {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.post(`${REACT_APP_API_BASE_URL}/ctpo/plans`, newScenario);
  },
  createNewPlan: function (plan) {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.post(`${REACT_APP_API_BASE_URL}/ctpo/plan`, plan);
  },
  createNewCohortPlan: function (combinedPlan, studyId) {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.post(
      `${REACT_APP_API_BASE_URL}/ctpo/cohort/study/${studyId}`,
      combinedPlan
    );
  },
  createNewClone: function (newClone) {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.post(`${REACT_APP_API_BASE_URL}/ctpo/clone`, newClone);
  },
  createNewVersion: function (newVersion) {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.post(`${REACT_APP_API_BASE_URL}/ctpo/clone`, newVersion);
  },

  startSimulation: function (studyPlanId) {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.post(`${REACT_APP_API_BASE_URL}/ctpo/start`, studyPlanId);
  },
  getSiteGroups: function () {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.get(`${REACT_APP_API_BASE_URL}/ctpo/sitegroups`);
  },
  getAdminSiteGroups: function () {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.get(`${REACT_APP_API_BASE_URL}/ctpo/admin/sitegroups`);
  },
  getSingleAdminSiteGroup: function (id) {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.get(`${REACT_APP_API_BASE_URL}/ctpo/admin/sitegroup/${id}`);
  },
  patchAdminSiteGroup: function (body) {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.patch(`${REACT_APP_API_BASE_URL}/ctpo/admin/sitegroup`, body);
  },
  postSiteGroup: function (body) {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.post(`${REACT_APP_API_BASE_URL}/ctpo/sitegroup`, body);
  },
  getCountries: function () {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.get(`${REACT_APP_API_BASE_URL}/ctpo/countries`);
  },
  deleteCountry: function (planId, countryId) {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.delete(
      `${REACT_APP_API_BASE_URL}/ctpo/plan/${planId}/country/${countryId}`
    );
  },
  updateCountry: function (body) {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.patch(`${REACT_APP_API_BASE_URL}/ctpo/country`, body);
  },
  updatePlan: function (editedScenario) {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.patch(`${REACT_APP_API_BASE_URL}/ctpo/plan`, editedScenario);
  },
  getMilestones: function () {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.get(`${REACT_APP_API_BASE_URL}/ctpo/milestones`);
  },
  getParameters: function () {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.get(`${REACT_APP_API_BASE_URL}/ctpo/parameters`);
  },
  signIn: async function () {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    let accessToken = getCookie("access_token");
    // wait 1 second for auth data from cookie
    if (!accessToken || accessToken.length <= 1) {
      // await sleep(500);
      accessToken = getCookie("access_token");
    }
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.post(`${REACT_APP_API_BASE_URL}/ctpo/login`, null);
  },
  getFavorites: function (email) {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.get(`${REACT_APP_API_BASE_URL}/ctpo/favorites/user/${email}`);
  },
  deleteFavorite: function (favorite) {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.delete(
      `${REACT_APP_API_BASE_URL}/ctpo/favorite/study/${favorite.studyId}/user/${favorite.userId}`
    );
  },
  postFavorite: function (favorite) {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.post(`${REACT_APP_API_BASE_URL}/ctpo/favorite`, favorite);
  },
  getMilestoneDates: function (body) {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.post(`${REACT_APP_API_BASE_URL}/ctpo/milestonedates`, body);
  },
  deleteActivationProfiles: function (id) {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.delete(
      `${REACT_APP_API_BASE_URL}/ctpo/activationprofile/${id}`
    );
  },
  createActivationProfiles: function (body) {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.post(`${REACT_APP_API_BASE_URL}/ctpo/activationprofile`, body);
  },
  editActivationProfiles: function (body) {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.put(`${REACT_APP_API_BASE_URL}/ctpo/activationprofile`, body);
  },
  editEnrollmentVariation: function (body) {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.put(
      `${REACT_APP_API_BASE_URL}/ctpo/enrollmentvariation
    `,
      body
    );
  },
  runSimulation: function (body) {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.post(`${REACT_APP_API_BASE_URL}/ctpo/runsimulation`, body);
  },
  checkSimulationStatus: function (planId) {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.get(
      `${REACT_APP_API_BASE_URL}/ctpo/simulation/status/plan/${planId}`
    );
  },
  getSimulationResults: function (planId) {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.get(
      `${REACT_APP_API_BASE_URL}/ctpo/simulation/run/plan/${planId}`
    );
  },
  getSimulationDetailTableByMonth: function (planId, type = "results") {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.get(
      `${REACT_APP_API_BASE_URL}/ctpo/${type}/Monthly (Cumulative)/plan/${planId}`
    );
  },
  getSimulationDetailTableByWeek: function (planId, type = "results") {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.get(
      `${REACT_APP_API_BASE_URL}/ctpo/${type}/Weekly (Cumulative)/plan/${planId}`
    );
  },
  getSimulationDetailTableByMonthNonCumulative: function (
    planId,
    type = "results"
  ) {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.get(
      `${REACT_APP_API_BASE_URL}/ctpo/${type}/Monthly (Non-Cumulative)/plan/${planId}`
    );
  },
  getSimulationDetailTableByWeekNonCumulative: function (
    planId,
    type = "results"
  ) {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.get(
      `${REACT_APP_API_BASE_URL}/ctpo/${type}/Weekly (Non-Cumulative)/plan/${planId}`
    );
  },
  getSimulationSummaryTable: function (planId, studyType = "results") {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.get(
      `${REACT_APP_API_BASE_URL}/ctpo/${studyType}/summary/plan/${planId}`
    );
  },
  getSimulationEnrollmentTable: function (planId) {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.get(
      `${REACT_APP_API_BASE_URL}/ctpo/results/enrollment/plan/${planId}`
    );
  },
  getSimulationStartupTable: function (planId) {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.get(
      `${REACT_APP_API_BASE_URL}/ctpo/results/startup/plan/${planId}`
    );
  },
  getSimulationDurationTable: function (planId) {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.get(
      `${REACT_APP_API_BASE_URL}/ctpo/results/duration/plan/${planId}`
    );
  },
  getSimulationTimelineTable: function (planId) {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.get(
      `${REACT_APP_API_BASE_URL}/ctpo/results/timeline/plan/${planId}`
    );
  },
  getOverallChart: function (planId) {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.get(
      `${REACT_APP_API_BASE_URL}/ctpo/charts/month/plan/${planId}`
    );
  },
  getCountryChart: function (planId) {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.get(
      `${REACT_APP_API_BASE_URL}/ctpo/charts/week/plan/${planId}`
    );
  },
  getRegionChart: function (planId, dataSet = "MONTH") {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.get(
      `${REACT_APP_API_BASE_URL}/ctpo/regioncharts/${dataSet}/plan/${planId}`
    );
  },
  getSiteGroupChart: function (planId, dataSet = "WEEK") {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.get(
      `${REACT_APP_API_BASE_URL}/ctpo/charts/${dataSet}/plan/${planId}`
    );
  },
  getCohortChartMonthly: function (planId, dataSet = "MONTH") {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.get(
      `${REACT_APP_API_BASE_URL}/ctpo/cohortcharts/${dataSet}/plan/${planId}`
    );
  },
  getCohortChartWeekly: function (planId, dataSet = "WEEK") {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.get(
      `${REACT_APP_API_BASE_URL}/ctpo/cohortcharts/${dataSet}/plan/${planId}`
    );
  },
  getStudyActuals: function (studyId) {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.get(`${REACT_APP_API_BASE_URL}/ctpo/actuals/study/${studyId}`);
  },
  loadStudyActuals: function (studyId) {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.get(
      `${REACT_APP_API_BASE_URL}/ctpo/loadactuals/study/${studyId}`
    );
  },

  getStudyRemodel: function (studyId) {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.get(`${REACT_APP_API_BASE_URL}/ctpo/remodel/study/${studyId}`);
  },

  updateStudyRemodel: function (studyId, body) {
    const { REACT_APP_API_BASE_URL = "https://esbdev.premier-research.com" } =
      process.env;
    const AUTH_TOKEN = `Bearer ${getCookie("access_token")}`;
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    return axios.patch(
      `${REACT_APP_API_BASE_URL}/ctpo/remodel/study/${studyId}`,
      body
    );
  },
};

// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }
