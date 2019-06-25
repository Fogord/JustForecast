<template>
    <v-data-table
        :headers="tabledata.headers"
        :items="tabledata.data"
        :pagination.sync="pagination"
        hide-actions
    >
        <template v-slot:items="props" all >
            <tr>
                <td class="text-xs-left  caption">{{ props.item.period }}</td>
                <td class="text-xs-right caption">{{ props.item.fact }}</td>
                <td class="text-xs-right caption">{{ props.item.model }}</td>
                <td class="text-xs-right caption">{{ props.item.forecast }}</td> 
            </tr>
        </template>
    </v-data-table> 
</template>

<script>
export default {
    name: "d-table",
    data(){
        return {
            pagination: {}
        }
    },
    props: {
        tabledata: {
            type: Object,
            default: null
        },
        localdata: {
            type: Object,
            default: null
        },
        locale:{
            type: String,
            default: null
        }
    },
    watch: { 
        locale(){
            this.translation(this, this.tabledata, this.localdata)
        }
    },
    methods:{
        translation(context, data, localeKeys){
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
        }
    },
    mounted () {
        this.translation(this, this.tabledata, this.localdata)
        
        this.pagination = {
            rowsPerPage: -1
        }
    }
}
</script>

<style>
</style>