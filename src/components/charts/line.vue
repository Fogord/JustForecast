<script>
import { Line } from 'vue-chartjs'

export default {
    name: "c-line",
    extends: Line,
    props: {
        chartdata: {
            type: Object,
            default: null
        },
        localdata: {
            type: Object,
            default: null
        },
        options: {
            type: Object,
            default: null
        },
        locale:{
            type: String,
            default: null
        },
        darkMode:{
            type: Boolean,
            default: null
        }
    },
    watch: { 
        locale(){
            this.translation(this, this.chartdata, this.localdata)
            this.darkModeDependencies(this.options, this.darkMode)
            this.renderChart(this.chartdata, this.options)
        },
        darkMode(){
            this.darkModeDependencies(this.options, this.darkMode)
            this.renderChart(this.chartdata, this.options)
        }
    },
    methods:{
        translation(context, data, localeKeys) {
            for (let key in localeKeys) {
                if (localeKeys.hasOwnProperty(key)) {
                    if (localeKeys[key] instanceof Object) {
                        this.translation(context, data[key], localeKeys[key])
                    } else {
                        let tempArr = data[key].split(' ')
                        tempArr[0] = context.$i18n.t(localeKeys[key])
                        data[key] = tempArr.join(' ')
                    }
                }
            }
        },
        darkModeDependencies(options, darkMode) {
            options.legend.labels.fontColor = darkMode?'white':'black'
            options.scales.yAxes[0].ticks.fontColor = darkMode?'white':'black'
            options.scales.xAxes[0].ticks.fontColor = darkMode?'white':'black'
        }
    },
    mounted () {
        this.translation(this, this.chartdata, this.localdata)
        this.darkModeDependencies(this.options, this.darkMode)
        this.renderChart(this.chartdata, this.options)
    }
}
</script>

<style>
</style>