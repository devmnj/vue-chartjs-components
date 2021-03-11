<template>
  <div class="flex-container">
    <PC :chartData="chartdata" />
  </div>
</template>

<script>
// @ is an alias to /src
import PieChart from "@/components/PieChart";
export default {
  name: "PieChart",
  components: { 'PC':PieChart },
  data() {
    return {
      chartdata: {
        labels: ["VueJs", "EmberJs", "ReactJs", "AngularJs"],
        datasets: [
          {
            backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
            data: [40, 20, 80, 10]
          }
        ]
      }
    };
  },
};
</script>
<style>
.flex-container {
  display: flex;
}
</style>
