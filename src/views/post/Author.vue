<template>
    <section id="author">
        <el-card class="" shadow="never">
            <div slot="header" class="has-text-centered">
                <span class="has-text-weight-bold">👨 关于作者</span>
            </div>
            <div class="has-text-centered">
                <el-avatar v-if="userInfo.avatar" :src="userInfo.avatar" :size="98" />
                <p class="is-size-5 mb-5">
                    <router-link :to="{ path: `/member/${userInfo.username}/home` }">
                        {{ userInfo.alias }} <span class="is-size-7 has-text-grey">{{ '@' + userInfo.username }}</span>
                    </router-link>
                </p>
                <div class="columns is-mobile">
                    <div class="column is-half">
                        <code>{{ userInfo.topicCount }}</code>
                        <p>文章</p>
                    </div>
                    <div class="column is-half">
                        <code>{{ userInfo.followerCount }}</code>
                        <p>粉丝</p>
                    </div>
                </div>
                <div v-if="user.id !== userInfo.id">
                    <button
                        v-if="hasFollow"
                        class="button is-success button-center is-fullwidth"
                        @click="handleUnFollow(userInfo.id)"
                    >
                        已关注
                    </button>

                    <button v-else class="button is-link button-center is-fullwidth" @click="handleFollow(userInfo.id)">
                        关注
                    </button>
                </div>
            </div>
        </el-card>
    </section>
</template>

<script>
import { follow, hasFollow, unFollow } from '@/api/follow'
import { mapGetters } from 'vuex'
export default {
    name: 'Author',
    props: {
        userInfo: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            hasFollow: false
        }
    },
    mounted() {
        this.fetchInfo()
    },
    computed: {
        ...mapGetters([
            'token','user'
        ])
    },
    methods: {
        fetchInfo() {
            if(this.token != null && this.token !== '') {
                console.log(this.userInfo);
                hasFollow(this.userInfo.id).then(value => {
                    const { data } = value
                    this.hasFollow = data.hasFollow
                })
            }
        },
        handleFollow: function(id) {
            if(this.token != null && this.token !== '') {
                follow(id).then(response => {
                    const { message } = response
                    this.$buefy.toast.open({
                        message: message,
                        type: 'is-success'
                    })
                    this.hasFollow = !this.hasFollow
                    this.userInfo.followerCount = parseInt(this.userInfo.followerCount) + 1
                })
            } else{
                this.$buefy.toast.open({
                    message: `请先登录！`,
                    type: 'is-warning'
                })
                setTimeout(() => {
                    this.$router.push({ path: this.redirect || '/login' })
                }, 1000)
            }
        },
        handleUnFollow: function(id) {
            unFollow(id).then(response => {
                const { message } = response
                this.$buefy.toast.open({
                    message: message,
                    type: 'is-success'
                })
                this.hasFollow = !this.hasFollow
                this.userInfo.followerCount = parseInt(this.userInfo.followerCount) - 1
            })
        }
    }
}
</script>

<style scoped>
</style>
