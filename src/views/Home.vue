<template>
    <div>
        <div class="box">🔔 {{billboard.content}}</div>
    </div>
</template>

<script>
// @ is an alias to /src
import {getBillboard} from "@/api/billboard";
export default {
    name: 'Home',
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
