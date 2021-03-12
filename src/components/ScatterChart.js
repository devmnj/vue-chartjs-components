import { Scatter, mixins } from 'vue-chartjs'

export default {
  extends: Scatter,
  mixins: [mixins.reactiveProp],
  name: 'ScatterChart',
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
