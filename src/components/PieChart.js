import { Pie, mixins } from 'vue-chartjs'

export default {
  extends: Pie,
  mixins: [mixins.reactiveProp],
  name: 'PieChart',
  props: [{
    chartData: {
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
