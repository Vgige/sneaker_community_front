<template>
    <div>
        <el-card class="box-card" shadow="never">
            <div slot="header">
                <span>🥂 推广</span>
            </div>
            <div>
                <p v-for="(item, index) in list" :key="index" class="block">
                    <a :href="item.link" target="_blank">{{ item.title }}</a>
                </p>
            </div>
        </el-card>
    </div>
</template>

<script>
// @ is an alias to /src
import { getList } from '@/api/promote'
export default {
    name: 'Promotion',
    data() {
        return{
            list: []
        }
    },
    created() {
        this.fetchList()
    },
    methods: {
        fetchList() {
            getList().then((res) => {
                this.list = res.data
            })
        }
    }
}
</script>
