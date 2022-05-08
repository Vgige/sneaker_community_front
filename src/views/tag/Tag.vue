<template>
    <div id="tag" class="columns">
        <div class="column is-three-quarters">
            <el-card class="box-card" shadow="never">
                <div slot="header" class="">
                    🔍 检索到 <span class="has-text-info">{{ topics.length }}</span> 篇有关
                    <span class="has-text-info">{{ this.$route.params.name }}</span>
                    的话题
                </div>

                <div class="text item" >
                    <article v-for="(item, index) in topics" :key="index" class="media mt-3">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img :src="`https://cn.gravatar.com/avatar/${item.userId}?s=164&d=monsterid`" style="border-radius: 5px;">
                            </figure>
                        </div>
                        <div class="media-content">
                            <div class="">
                                <p class="ellipsis is-ellipsis-1">
                                    <el-tooltip class="item" effect="dark" :content="item.title" placement="top">
                                        <router-link :to="{name:'post-detail',params:{id:item.id}}">
                                            <span class="is-size-6">{{ item.title }}</span>
                                        </router-link>
                                    </el-tooltip>
                                </p>
                            </div>
                            <nav class="level has-text-grey is-mobile  is-size-7 mt-2">
                                <div class="level-left">
                                    <div class="level-left">
                                        <router-link class="level-item" :to="{ path: `/member/${item.username}/home` }">
                                            {{ item.alias }}
                                        </router-link>

                                        <span class="mr-1">
                                            发布于:{{ dayjs(item.createTime).format("YYYY/MM/DD") }}
                                        </span>
                                        <span
                                            v-for="(tag, index) in item.tags"
                                            :key="index"
                                            class="tag is-hidden-mobile is-success is-light mr-1"
                                        >
                                            <router-link :to="{ name: 'tag', params: { name: tag.name } }">
                                                {{ "#" + tag.name }}
                                            </router-link>
                                        </span>
                                        <span class="is-hidden-mobile">浏览:{{ item.view }}&ensp;</span>

                                        <span>评论:{{ item.comments }}</span>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </article>
                </div>
            </el-card>
            <!--分页-->
            <pagination
                v-show="query.total > 0"
                :total="query.total"
                :page.sync="query.pageNum"
                :limit.sync="query.pageSize"
                @pagination="fetchList"
            />
        </div>

        <div class="column">
            <el-card class="box-card" shadow="hover">
                <div slot="header" class="clearfix has-text-centered">
                    🤙 关于标签
                </div>
                <div>
                    <ul>
                        <li class="content">标签由平台用户发布使用</li>
                        <li class="content">系统每周会定时清理无用标签</li>
                    </ul>
                </div>
            </el-card>
            <el-card shadow="hover">
                <div slot="header" class="has-text-centered">
                    🏷 热门标签
                </div>
                <div>
                    <ul>
                        <li v-for="(tag,index) in tags" :key="index" style="padding: 6px 0">
                            <router-link :to="{name:'tag',params:{name:tag.name}}">
                                <span v-if="index<9" class="tag">
                                  0{{ parseInt(index) + 1 }}
                                </span>
                                <span v-else class="tag">
                                    {{ parseInt(index) + 1 }}
                                </span>
                                {{ tag.name }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </el-card>
        </div>
    </div>

</template>

<script>
import {getOtherTag, getTopicsByTag} from '@/api/tag'
import Pagination from '@/components/Pagination'
export default {
    name: 'Tag',
    components: { Pagination },
    data() {
        return {
            topics: [],
            tags: [],
            query: {
                name: this.$route.params.name,
                pageNum: 1,
                pageSize: 10,
                total: 0
            },
        }
    },
    created() {
        this.fetchList()
        this.fetchOtherTag();
    },
    methods: {
        fetchList: function() {
            getTopicsByTag(this.query).then(response => {
                let { data } = response;
                this.topics = data.records;
                this.query.total = data.total
                this.query.pageSize = data.size
                this.query.pageNum = data.current
            })
        },
        fetchOtherTag: function() {
            getOtherTag(this.query).then(response => {
                let { data } = response;
                this.tags = data.records;
            })
        }
    }
}
</script>

<style scoped>
#tag {
    min-height: 500px;
}
</style>