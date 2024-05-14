import { createApp } from 'vue';
import './styles/style.css';
import App from './App.vue';
import router from './router';
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import VueGoogleCharts from 'vue-google-charts';
import VueApexCharts from "vue3-apexcharts";
import ECharts from 'vue-echarts';

const vuetify = createVuetify({
	components,
	directives,
})
const app=createApp(App);
app.use(VueApexCharts);
app.use(ECharts);
app.component('v-chart',ECharts)
app.component('ApexChart', VueApexCharts)
app.use(VueGoogleCharts)
app.use(vuetify);
app.use(router);
app.mount("#app")

