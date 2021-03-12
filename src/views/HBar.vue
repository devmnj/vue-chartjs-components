<template>
  <div class="flex-container">
    <HorizontalBarChart :chartData="chartdata" :options="options" />
  </div>
</template>

<script>
// @ is an alias to /src
import HorizontalBarChart from '@/components/HorizontalBarChart'
export default {
  name: "HBar",
  components: { HorizontalBarChart 
  },
  data (){
    return {
    chartdata: {
      labels: ['January', 'February'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          data: [40, 20]
        },
         {
          label: 'Data Two',
          backgroundColor: '#5885af',
          data: [140, 120]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    },
    }

  }
  
};
</script>
<style>
.flex-container {
  display: flex;
}

</style>