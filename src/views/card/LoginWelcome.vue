<template>
    <div>
        <el-card class="box-card" shadow="never">
            <div slot="header" class="has-text-centered">
                <span>💐 发帖</span>
            </div>
            <div v-if="token != null && token !== ''" class="has-text-centered">
                <b-button type="is-danger" tag="router-link" :to="{path:'/post/create'}" outlined>✍ 发表想法</b-button>
            </div>

            <div v-else class="has-text-centered">
                <b-button type="is-primary" tag="router-link" :to="{path:'/register'}" outlined>马上入驻</b-button>
                <b-button type="is-danger" tag="router-link" :to="{path:'/login'}" outlined class="ml-2"> 社区登入</b-button>
            </div>
        </el-card>
    </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'
export default {
    name: 'LoginWelcome',
    computed: {
      ...mapGetters({
          'token': "token"
      })
    },
    data() {
        return{
        }
    },
    created() {
    },
    methods: {
    }
}
</script>
