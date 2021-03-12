import { Bubble, mixins } from 'vue-chartjs'

export default {
  extends: Bubble,  
  mixins: [mixins.reactiveProp],
  name: 'BubbleChart',
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
