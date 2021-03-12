import { HorizontalBar, mixins } from 'vue-chartjs'

export default {
  extends: HorizontalBar,
  mixins: [mixins.reactiveProp],
  name: 'HorizontalBarChart',
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
