<template>
    <v-layout row wrap >
        <v-flex xs12>
            <v-card class="ma-2 pa-2">
                <c-line :key="swtch" v-if="loaded && swtch == 'Fact'" :chartdata="chartFactData" :options="options"/>
            </v-card>
        </v-flex>
    </v-layout>

</template>

<script>
import CLine from '../charts/line.vue'
import CBar from '../charts/bar.vue'
import CScatterLinearRegression from '../charts/scatter-linear-regression.vue'

const data = {
        period:  ['January 2018', 'February 2018', 'March 2018', 'April 2018', 'May 2018', 'June 2018', 'July 2018', 'August 2018', 'September 2018', 'October 2018', 'November 2018', 'December 2018', 'January 2019', 'February 2019',  'March 2019'],
        fact:    [      19211663,        18509510,     22121200,     20391892,   20356805,    18901349,    19098984,      19241933,         19778841,       20791259,        21023813,        25126356,           null,            null,          null],
        model:   [      18898392,        19036216,     19173274,     19339273,   19578638,    19849593,    20123475,      20364560,         20570001,       20742270,        20899294,        21058972,           null,            null,          null],
        forecast:[          null,            null,         null,         null,       null,        null,        null,          null,             null,           null,            null,            null,       21268598,        21564285,      21859972],
    }


export default {
     data: () => ({
        swtch: 'Fact',
        loaded: false,
        chartFactData: null,
        options: null
    }),
    mounted () {
        this.loaded = false
        try {
            let gradientFact     = document.getElementById('canvas').getContext('2d').createLinearGradient(0, 0, 0, 450)
            let gradientModel    = document.getElementById('canvas').getContext('2d').createLinearGradient(0, 0, 0, 450)
            let gradientForecast = document.getElementById('canvas').getContext('2d').createLinearGradient(0, 0, 0, 450)

            gradientFact.addColorStop(0, 'rgba(255, 0, 0, 1)')
            gradientFact.addColorStop(0.5, 'rgba(255, 0, 0, 0.5)');
            gradientFact.addColorStop(1, 'rgba(255, 0, 0, 0)');
            
            gradientModel.addColorStop(0, 'rgba(84, 255, 210, 0.9)')
            gradientModel.addColorStop(0.5, 'rgba(84, 255, 210, 0.25)');
            gradientModel.addColorStop(1, 'rgba(84, 255, 210, 0)');
            
            gradientForecast.addColorStop(0, 'rgba(0, 186, 255, 1)')
            gradientForecast.addColorStop(0.5, 'rgba(0, 186, 255, 0.5)');
            gradientForecast.addColorStop(1, 'rgba(0, 186, 255, 0)');
            
            this.chartFactData = {
                labels: data.period,
                datasets: [{
                        label:  ['Fact'],
                        type: 'line',
                        pointBackgroundColor: 'rgba(255, 0, 0, 1',
                        borderWidth: 1,
                        pointBorderColor: 'rgba(255, 0, 0, 1)',
                        backgroundColor: gradientFact,
                        data: data.fact
                    },{
                        label:  ['Model'],
                        type: 'line',
                        pointBackgroundColor: 'rgba(84, 226, 210, 1)',
                        borderWidth: 1,
                        pointBorderColor: 'rgba(84, 226, 210, 1)',
                        backgroundColor: gradientModel,
                        data: data.model
                    },{
                        label:  ['Trend fact'],
                        type: 'line',
                        pointBackgroundColor: 'rgba(0, 186, 209, 1)',
                        borderWidth: 1,
                        pointBorderColor: 'rgba(0, 186, 209, 1)',
                        backgroundColor: gradientForecast,
                        data: data.forecast
                    }]
            }

            this.options = {
                responsive: true,
                maintainAspectRatio: false
            }

            this.loaded = true
        } catch (e) {
            console.error(e)
        }
    },
    components: {
        CLine, CBar, CScatterLinearRegression
    }
}
</script>