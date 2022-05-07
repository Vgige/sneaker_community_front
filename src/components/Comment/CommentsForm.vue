<template>
    <article class="media">
        <div class="media-content">
            <form @submit.prevent="onSubmit">
                <b-field>
                    <b-input
                        v-model.lazy="commentText"
                        type="textarea"
                        maxlength="400"
                        placeholder="发表一下留言吧..."
                        :disabled="isLoading"
                    ></b-input>
                </b-field>
                <nav class="level">
                    <div class="level-left">
                        <b-button
                            type="is-primary"
                            native-type="submit"
                            class="level-item"
                            :disabled="isLoading"
                        >
                            发布
                        </b-button>
                    </div>
                </nav>
            </form>
        </div>
    </article>
</template>

<script>
import { pushComment } from '@/api/comment'
import {mapGetters} from "vuex";
export default  {
    name: 'LvCommentsForm',
    data() {
        return {
            commentText: '',
            isLoading: false,
        }
    },
    props: {
        slug: {
            type: String,
            default: null
        }
    },
    computed: {
        ...mapGetters([
            'token'
        ])
    },
    methods: {
        async onSubmit() {
           //验证用户是否登录
           if(this.token == null || this.token === ''){
               this.$buefy.toast.open({
                   message: `请先登录！`,
                   type: 'is-warning'
               })
               setTimeout(() => {
                   this.$router.push({ path: this.redirect || '/login' })
               }, 1000)
           }else{
               if(!this.commentText || this.commentText.trim() == ''){
                   this.$buefy.toast.open({
                       message: `留言不能为空哦！`,
                       type: 'is-warning'
                   })
                   return;
               }
               this.isLoading = true
               try {
                   let postData = {}
                   console.log(this.commentText);
                   postData['content'] = this.commentText;
                   postData['topic_id'] = this.slug;
                   await pushComment(postData);
                   this.$emit('loadComments', this.slug);
                   this.$buefy.toast.open({
                       message: `留言成功！`,
                       type: 'is-success'
                   })
                   this.commentText = '';
               } catch (e) {
                   this.$buefy.toast.open({
                       message: `发表留言请求异常 ${e}`,
                       type: 'is-danger'
                   })
               } finally {
                   this.isLoading = false
               }
           }

        }
    }
}
</script>