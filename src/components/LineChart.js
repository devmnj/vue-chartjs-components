import { Line, mixins } from 'vue-chartjs'

export default {
  extends: Line,  
  mixins: [mixins.reactiveProp],
  name: 'LineChart',
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
