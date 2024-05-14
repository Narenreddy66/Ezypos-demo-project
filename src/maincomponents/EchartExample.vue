
<template>
 
    <div>
      <h1 class="">Echart-Example</h1>
    <ApexChart class="chart" type="donut" width="380" :options="chartOptions" :series="series"></ApexChart>
</div>
</template>
<script>




export default {

  data() {
          return{
          series: [44, 55, 13, 33],
          chartOptions: {
            chart: {
              width: 380,
              type: 'donut',
            },
            dataLabels: {
              enabled: false
            },
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  show: false
                }
              }
            }],
            legend: {
              position: 'right',
              offsetY: 0,
              height: 230,
            }
          },
        }
          
        },
 
};
</script>
<style scoped>
.chart{
  height: 100vh !important;
  background: black !important;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>