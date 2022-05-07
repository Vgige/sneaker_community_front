
import request from '@/utils/request'

export function fetchCommentsByTopicId(topic_Id) {
    return request({
        url: '/comment/getComments',
        method: 'get',
        params: {
            topicid: topic_Id
        }
    })
}

export function pushComment(postData) {
    return request({
        url: '/comment/addComment',
        method: 'post',
        data: postData
    })
}