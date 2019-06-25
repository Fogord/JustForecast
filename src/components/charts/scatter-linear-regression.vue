<script>
import { Bubble } from 'vue-chartjs'
import { Bar } from 'vue-chartjs'
import { Line } from 'vue-chartjs'

export default {
    name: "c-scatter-linear-regression",
    extends: Bubble,
    props: {
        chartdata: {
            type: Object,
            default: null
        },
        options: {
            type: Object,
            default: null
        }
    },
    mounted () {
        this.renderChart(this.chartdata, this.options)
    }
}
</script>

<style>
</style>
