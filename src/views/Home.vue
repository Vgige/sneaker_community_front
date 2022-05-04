<template>
    <div>
        <div class="box">🔔 {{billboard.content}}</div>
        <div class="columns">
            <div class="column is-three-quarters">
                <topic-list></topic-list>
            </div>
            <div class="column">
                <card-bar></card-bar>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import {getBillboard} from "@/api/billboard";
import CardBar from "@/views/card/CardBar";
import TopicList from "@/views/post/Index";
export default {
    name: 'Home',
    components: {CardBar, TopicList},
    data() {
        return{
            billboard: {
                content: '',
            },
        }

    },
    created() {
        this.fetchBillboard();
    },
    methods: {
        async fetchBillboard(){
            getBillboard().then((res) =>{
                this.billboard = res.data;
            })
        }
    }

}
</script>
