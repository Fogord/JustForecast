<template>
    <v-container fluid fill-height grid-list-md text-xs-center :locale="locale">
        <v-layout row wrap>
            <v-flex xs12>
                <v-parallax
                    height="300"
                    src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                >
                    <v-layout
                        align-start
                        column
                        justify-center
                        >
                        <h1 class="display-2 font-weight-thin mb-3">{{ $t('siteNamePart1') }}</h1>
                        <h1 class="display-2 font-weight-thin mb-3">{{ $t('siteNamePart2') }}</h1>
                        <h4 class="subheading">{{ $t('siteNameMotto') }}</h4>
                    </v-layout>
                </v-parallax>
                
                <v-card-title >
                    <div class="display-1">{{ $t('home.commonInfo.header') }}</div>
                </v-card-title>
            </v-flex>

            <!-- <v-layout fill-height> -->
                <v-flex xl9 lg9 md9 sm12 xs12>
                    <v-card height="230">
                        <v-card-text  class="pa-1 subheading ml-3 text-xs-left" v-for="(item, i) in $t('home.commonInfo.body')" :key='i'>
                            {{ item }}
                        </v-card-text>
                    </v-card>
                </v-flex>
                    
                <v-flex xl3 lg3 md3 sm12 xs12 >
                    <v-card height="230">
                        <v-card-text  class="pa-2 subheading ml-3 text-xs-left">
                            {{ $t('home.commonInfo.mistakePercent') }}
                        </v-card-text>
                        <v-card-text>
                            
                            <div class="text-xs-center">
                                
                                <v-progress-circular
                                rotate="270"
                                size="120"
                                width="20"
                                :value="mistakePercentValue"
                                color="primary"
                                class="pa-2 subheading "
                                >
                                {{ mistakePercentValue }} %
                                </v-progress-circular>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-flex>
            <!-- </v-layout>  -->


            <v-flex xs12>
                <v-card-title>
                    <div class="display-1">{{ $t('home.commonInfo.chooseInfo.header') }}</div>
                </v-card-title>                

                <v-timeline>
                    <v-timeline-item
                    color="third"
                    large
                    v-for="(item, i) in $t('home.commonInfo.chooseInfo.body')" :key='i'
                    >
                        <template v-slot:opposite>
                            <span class="grey--text display-2 pt2">0{{ i++ }}. </span>
                        </template>
                        <v-card class="elevation-2">
                            <v-card-title class="headline">
                                {{ $t(`home.commonInfo.chooseInfo.body[${i}].title`) }}
                            </v-card-title>
                            <v-card-text class="subheading">
                                {{ $t(`home.commonInfo.chooseInfo.body[${i}].text`) }}
                            </v-card-text>
                        </v-card>
                    </v-timeline-item>
                </v-timeline>
            </v-flex>

            <v-flex xs12 >
                <v-card-title>
                    <h1 title class="display-1 pb-2">{{ $t('home.commonInfo.service') }}</h1>
                </v-card-title>
            </v-flex>

            <v-flex xs12 sm12 md4 lg4 xl4 v-for="(item, i) in $t('home.services')" :key='i'> 
                <v-card height="90">
                    <v-card-title >
                        <v-flex xs1>
                            <v-icon v-html="$t(`home.services[${i}].icon`)" color="third"></v-icon>
                        </v-flex>
                        <v-flex xs11>
                            <h4 class="ml-3 title">{{ $t(`home.services[${i}].header`) }}</h4>
                        </v-flex>
                    </v-card-title>
                </v-card>
                    
                <v-card height="600">
                    <v-card-text  class="subheading text-xs-left " v-for="item in $t(`home.services[${i}].body`)" :key='item'>
                        <v-icon color="secondary">star</v-icon> {{ item }}
                    </v-card-text>   
                </v-card>
            
                <v-card height="50" >
                    <v-btn  class="pa-2 " flat><span>{{ $t(`home.services[${i}].action`) }}</span></v-btn>
                </v-card>
            </v-flex>

            <v-flex xs12 >
                <v-card-title class="px-0">
                    <div class="display-1">{{ $t(`home.commonInfo.result`) }}</div>
                </v-card-title>                
            </v-flex>

            <v-flex xs12>
                <v-card>
                    <v-card-title text-sm-center >
                        <v-radio-group v-model="swtch" row >
                            <v-radio class="text-sm-left subheading" color="primary" :label="$t('home.commonInfo.exampleInfo.chartView')" value="chart"></v-radio>
                            <v-radio class="text-sm-left subheading" color="primary" :label="$t('home.commonInfo.exampleInfo.tableView')" value="table"></v-radio>
                        </v-radio-group>
                    </v-card-title>
                </v-card>
                <v-card v-if="loaded && swtch == 'table'" key="table"> 
                    <v-card-text>
                    <d-table :tabledata="dataSets" :localdata="localTable" :locale="locale"/>
                    </v-card-text>
                </v-card>
                
                <v-card v-else-if="loaded && swtch == 'chart'" key="chart">   
                    <v-card-text>
                        <c-line  v-if="loaded" :chartdata="chartFactData" :options="options" :localdata="localChart" :locale="locale" :darkMode="darkMode"/>     
                    </v-card-text>      
                </v-card>
            </v-flex>

            <v-flex xs12>
                <v-card-title>
                    <h1 title class="display-1">{{ $t('home.commonInfo.contactsInfo.header') }}</h1>
                </v-card-title>  

                <v-card >
                <v-card-text>
                    <v-list two-line v-for="(item, i) in $t('home.commonInfo.contactsInfo.body')" :key='i'>
                    <v-list-tile @click="($t(`home.commonInfo.contactsInfo.body[${i}].action`))">
                        <v-list-tile-action>
                        <v-icon color="secondary">{{ $t(`home.commonInfo.contactsInfo.body[${i}].icon`) }}</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                        <v-list-tile-title>{{ $t(`home.commonInfo.contactsInfo.body[${i}].title`) }}</v-list-tile-title>
                        <v-list-tile-sub-title>{{ $t(`home.commonInfo.contactsInfo.body[${i}].subTitle`) }}</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    
                    <v-divider inset></v-divider>

                    </v-list>
                </v-card-text>              
                </v-card>
            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
import DTable from '../table/table.vue';
import CLine from '../charts/line.vue';
import { setInterval } from 'timers';

const data = {
        period:  ['January 2018', 'February 2018', 'March 2018', 'April 2018', 'May 2018', 'June 2018', 'July 2018', 'August 2018', 'September 2018', 'October 2018', 'November 2018', 'December 2018', 'January 2019', 'February 2019',  'March 2019'],
        fact:    [      19211663,        18509510,     22121200,     20391892,   20356805,    18901349,    19098984,      19241933,         19778841,       20791259,        21023813,        25126356,           null,            null,          null],
        model:   [      18898392,        19036216,     19173274,     19339273,   19578638,    19849593,    20123475,      20364560,         20570001,       20742270,        20899294,        21058972,           null,            null,          null],
        forecast:[          null,            null,         null,         null,       null,        null,        null,          null,             null,           null,            null,            null,       21268598,        21564285,      21859972],
    }
    
const dataTable =  (function (data) {
    let res = []
    
    for(let i = 0; i < data.period.length; i += 1) {
        res.push({
            period:   data.period[i],
            fact:     data.fact[i],
            model:    data.model[i],
            forecast: data.forecast[i]
        })
    }

    return res
})(data)
    

export default {
    name: "home",
    data() {
        return { 
            headers: [],
            dataSets: [],
            // pagination: {},
            loaded: false,
            chartFactData: null,
            localChart: null,
            localTable: null,
            options: null,
            gradientFact: null,
            gradientModel: null,
            gradientForecast: null,
            mistakePercentValue: 100,
            interval: {},
            swtch: 'chart'
        }
    },
    computed:{    
        locale(){
            return this.$store.getters.getLocale
        }, 
        darkMode(){
            return this.$store.getters.getDarkMode
        }  
    },
    methods:{
    },
    beforeDestroy () {
        clearInterval(this.interval)
    },
    mounted() {
        this.loaded = false
        try {

            this.interval = setInterval(() => {
                if (this.mistakePercentValue - 4 > 6) {
                    this.mistakePercentValue -= 4
                } else {
                    return (this.mistakePercentValue = 6)
                }
            }, 200)

            let canvas = document.getElementById('canvas').getContext('2d').createLinearGradient(0, 0, 0, 450)
            canvas.font = "bold 24px verdana, sans-serif ";

            this.gradientFact     = document.getElementById('canvas').getContext('2d').createLinearGradient(0, 0, 0, 450)
            this.gradientModel    = document.getElementById('canvas').getContext('2d').createLinearGradient(0, 0, 0, 450)
            this.gradientForecast = document.getElementById('canvas').getContext('2d').createLinearGradient(0, 0, 0, 450)

            this.gradientFact.addColorStop(0, 'rgba(255, 0, 0, 1)')
            this.gradientFact.addColorStop(0.5, 'rgba(255, 0, 0, 0.5)');
            this.gradientFact.addColorStop(1, 'rgba(255, 0, 0, 0)');
            
            this.gradientModel.addColorStop(0, 'rgba(84, 255, 210, 1)')
            this.gradientModel.addColorStop(0.5, 'rgba(84, 255, 210, 0.5)');
            this.gradientModel.addColorStop(1, 'rgba(84, 255, 210, 0)');
            
            this.gradientForecast.addColorStop(0, 'rgba(0, 186, 255, 1)')
            this.gradientForecast.addColorStop(0.5, 'rgba(0, 186, 255, 0.5)');
            this.gradientForecast.addColorStop(1, 'rgba(0, 186, 255, 0)');

            this.localTable = {
                headers: [
                    { text: 'home.commonInfo.exampleInfo.month' },
                    { text: 'home.commonInfo.exampleInfo.fact' },
                    { text: 'home.commonInfo.exampleInfo.model' },
                    { text: 'home.commonInfo.exampleInfo.forecast' }
                ],
                data: [
                    { period: 'home.commonInfo.exampleInfo.mounthes.january'},
                    { period: 'home.commonInfo.exampleInfo.mounthes.february'},
                    { period: 'home.commonInfo.exampleInfo.mounthes.march'},
                    { period: 'home.commonInfo.exampleInfo.mounthes.april'},
                    { period: 'home.commonInfo.exampleInfo.mounthes.may'},
                    { period: 'home.commonInfo.exampleInfo.mounthes.june'},
                    { period: 'home.commonInfo.exampleInfo.mounthes.july'},
                    { period: 'home.commonInfo.exampleInfo.mounthes.august'},
                    { period: 'home.commonInfo.exampleInfo.mounthes.september'},
                    { period: 'home.commonInfo.exampleInfo.mounthes.october'},
                    { period: 'home.commonInfo.exampleInfo.mounthes.november'},
                    { period: 'home.commonInfo.exampleInfo.mounthes.december'},
                    { period: 'home.commonInfo.exampleInfo.mounthes.january'},
                    { period: 'home.commonInfo.exampleInfo.mounthes.february'},
                    { period: 'home.commonInfo.exampleInfo.mounthes.march'}
                ]
            } 

            this.dataSets = {
                headers: [{
                    text: this.$i18n.t('home.commonInfo.exampleInfo.month'),
                    align: 'left',
                    sortable: false,
                    value: 'period'
                },{
                    text: this.$i18n.t('home.commonInfo.exampleInfo.fact'),
                    align: 'right',
                    sortable: false,
                    value: 'fact'
                },{
                    text: this.$i18n.t('home.commonInfo.exampleInfo.model'),
                    align: 'right',
                    sortable: false,
                    value: 'model'
                },{
                    text: this.$i18n.t('home.commonInfo.exampleInfo.forecast'),
                    align: 'right',
                    sortable: false,
                    value: 'forecast'
                }],
                data: dataTable
            } 
            
            this.localChart = {
                labels: [
                        'home.commonInfo.exampleInfo.mounthes.january',
                        'home.commonInfo.exampleInfo.mounthes.february',
                        'home.commonInfo.exampleInfo.mounthes.march',
                        'home.commonInfo.exampleInfo.mounthes.april',
                        'home.commonInfo.exampleInfo.mounthes.may',
                        'home.commonInfo.exampleInfo.mounthes.june',
                        'home.commonInfo.exampleInfo.mounthes.july',
                        'home.commonInfo.exampleInfo.mounthes.august',
                        'home.commonInfo.exampleInfo.mounthes.september',
                        'home.commonInfo.exampleInfo.mounthes.october',
                        'home.commonInfo.exampleInfo.mounthes.november',
                        'home.commonInfo.exampleInfo.mounthes.december',
                        'home.commonInfo.exampleInfo.mounthes.january',
                        'home.commonInfo.exampleInfo.mounthes.february',
                        'home.commonInfo.exampleInfo.mounthes.march'
                    ],
                datasets: [
                    { label:'home.commonInfo.exampleInfo.fact' },
                    { label:'home.commonInfo.exampleInfo.model' },
                    { label:'home.commonInfo.exampleInfo.forecast' }
                ]
            }

            this.chartFactData = {
                labels: data.period,
                datasets: [{
                    label:  this.$i18n.t('home.commonInfo.exampleInfo.fact'),
                    type: 'line',
                    pointBackgroundColor: 'rgba(255, 0, 0, 1)',
                    borderWidth: 1,
                    pointBorderColor: 'rgba(255, 0, 0, 1)',
                    backgroundColor: this.gradientFact,
                    showLine: true,
                    data: data.fact
                },{
                    label:  this.$i18n.t('home.commonInfo.exampleInfo.model'),
                    type: 'line',
                    pointBackgroundColor: 'rgba(84, 226, 210, 1)',
                    borderWidth: 1,
                    pointBorderColor: 'rgba(84, 226, 210, 1)',
                    backgroundColor: this.gradientModel,
                    showLine: true,
                    data: data.model
                },{
                    label:  this.$i18n.t('home.commonInfo.exampleInfo.forecast'),
                    type: 'line',
                    pointBackgroundColor: 'rgba(0, 186, 209, 1)',
                    borderWidth: 1,
                    pointBorderColor: 'rgba(0, 186, 209, 1)',
                    backgroundColor: this.gradientForecast,
                    showLine: true,
                    data: data.forecast
                }]
            }

            this.options = {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    labels: {
                            fontColor: 'black',
                            fontSize: 14
                        }
                    },
                title: {
                    display: false,
                    fontColor: 'blue',
                    text: 'Custom Chart Title'
                },
                tooltips: {
                    titleFontSize: 14,
                    bodyFontSize: 14,
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            fontColor: 'black',
                            fontSize: 12
                        },
                    }],
                xAxes: [{
                        ticks: {
                            fontColor: 'black',
                            fontSize: 12
                        },
                    }]
                } 
            }

            this.loaded = true
        } catch (e) {
            console.error(e)
        }
    },
    components: {
        CLine, DTable
    }
}
</script>

<style>
</style>
