import { Radar, mixins } from 'vue-chartjs'

export default {
  extends: Radar,  
  mixins: [mixins.reactiveProp],
  name: 'RadarChart',
  props: [{
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  }],
  mounted() {
    this.renderChart(this.chartData, this.options)
  }
}
