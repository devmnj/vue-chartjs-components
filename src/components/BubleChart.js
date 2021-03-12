import { Buble, mixins } from 'vue-chartjs'

export default {
  extends: Buble,  
  mixins: [mixins.reactiveProp],
  name: 'BubleChart',
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
