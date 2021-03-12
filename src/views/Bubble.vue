<template>
  <div class="flex-container">
    <BubbleChart Chart :chartData="chartdata" :options="options" />
  </div>
</template>

<script>
// @ is an alias to /src
import BubbleChart from '@/components/BubbleChart'
export default {
  name: "Bubble",
  components: { BubbleChart 
  },
  data (){
    return {
    chartdata: {
      labels: ['January', 'February'],
      datasets: [
          {
          label: 'Data One',
          backgroundColor: '#f87979',
          data: [
            {
              x: 20,
              y: 25,
              r: 5
            },
            {
              x: 40,
              y: 10,
              r: 10
            },
            {
              x: 30,
              y: 22,
              r: 30
            }
          ]
        },
        {
          label: 'Data Two',
          backgroundColor: '#7C8CF8',
          data: [
            {
              x: 10,
              y: 30,
              r: 15
            },
            {
              x: 20,
              y: 20,
              r: 10
            },
            {
              x: 15,
              y: 8,
              r: 30
            }
          ]
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