import { PolarArea, mixins } from 'vue-chartjs'

export default {
  extends: PolarArea,  
  mixins: [mixins.reactiveProp],
  name: 'PolarAreaChart',
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
