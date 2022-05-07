<template>
    <div>
        <el-card class="box-card" shadow="never">
            <div slot="header" class="has-text-centered">
                <span>🥳 每日一句</span>
            </div>
            <div>
                <div class="has-text-left block">
                    {{tip.content}}
                </div>
                <div class="has-text-right mt-5 block">
                    ——{{tip.author}}
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
// @ is an alias to /src
import {getTodayTip} from "@/api/tip";
export default {
    name: 'Tip',
    data() {
        return{
            tip: {
                content: '',
                author: ''
            }
        }
    },
    created() {
        this.fetchTodayTip()
    },
    methods: {
        async fetchTodayTip(){
            getTodayTip().then((res) =>{
                this.tip = res.data;
            })
        }
    }
}
</script>
