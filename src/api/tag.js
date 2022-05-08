import request from '@/utils/request'

export function getTopicsByTag(paramMap) {
    return request({
        url: '/tag/search',
        method: 'get',
        params: {
            name: paramMap.name,
            pageNum: paramMap.pageNum,
            pageSize: paramMap.pageSize
        }
    })
}
export function getOtherTag(tagName) {
    return request({
        url: '/tag/getOtherTag',
        method: 'get',
        params: {
            name: tagName
        }
    })
}