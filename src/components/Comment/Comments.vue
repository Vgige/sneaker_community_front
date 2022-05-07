<template>
    <section class="box comments">
        <hr />
        <h3 class="title is-5">留言区</h3>
        <lv-comments-form :slug="slug" @loadComments="fetchComments"/>

        <lv-comments-item
            v-for="comment in comments"
            :key="`comment-${comment.id}`"
            :comment="comment"
        />
    </section>
</template>

<script>
import { fetchCommentsByTopicId } from '@/api/comment'
import LvCommentsForm from './CommentsForm'
import LvCommentsItem from './CommentsItem'
export default {
    name: 'LvComments',
    components: {
        LvCommentsForm,
        LvCommentsItem
    },
    data() {
        return {
            comments: []
        }
    },
    props: {
        slug: {
            type: String,
            default: null
        }
    },
    async mounted() {
        await this.fetchComments(this.slug)
    },
    methods: {
        // 初始化
        async fetchComments(topic_id) {
            fetchCommentsByTopicId(topic_id).then(response => {
                const { data } = response
                this.comments = data
            })
        }
    }
}
</script>