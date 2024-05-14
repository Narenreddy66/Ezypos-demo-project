
    <template>
  <div class="w-100">
    <GChart class="chart" type="PieChart" :data="chartData" :options="chartOptions" />
    <GChart class="chart" type="ColumnChart" :data="chartData" :options="chartOptions" />
    <GChart class="chart" type="BarChart" :data="chartData" :options="chartOptions" />
    <!-- <GChart class="chart" type="Area Chart" :data="chartData" :options="chartOptions" /> -->
    <GChart class="chart" type="BubbleChart" :data="chartData" :options="chartOptions" /> 
    <!-- <GChart class="chart" type="Combo Chart" :data="chartData" :options="chartOptions" />
 <GChart class="chart" type="Word Tree Chart" :data="chartData" :options="chartOptions" /> -->
    <!-- <GChart class="chart" type="TreeMapChart" :data="chartData" :options="chartOptions" />
    <GChart class="chart" type="SankeyChart" :data="chartData" :options="chartOptions" />  -->
    <!-- <GChart class="chart" type="" :data="chartData" :options="chartOptions" />

    <GChart class="chart" type="" :data="chartData" :options="chartOptions" />
    <GChart class="chart" type="" :data="chartData" :options="chartOptions" />
    <GChart class="chart" type="" :data="chartData" :options="chartOptions" />
    <GChart class="chart" type="" :data="chartData" :options="chartOptions" />
    <GChart class="chart" type="" :data="chartData" :options="chartOptions" /> -->

  </div>
  <div>
 
</div>

</template>

<script>
import { GChart } from 'vue-google-charts';
// import VueApexCharts from 'vue-apexcharts'

export default { components: {
    GChart,
 
  },
  data() {
    return{

    
    chartData: [
        ['Task', 'Hours per Day'],
        ['Work', 21],
        ['Eat', 2],
        ['Commute', 12],
        ['Watch TV',2],
        ['Sleep', 8]
      ],
      chartOptions: {
        title: 'My Daily Activities',
        description:'Calculated in Percentages'
      }
    };
  }
};
</script>
<!-- <style>
.chart{
  width: 100% !important;
  height: 50vh !important;
}</style> -->

