import request from '@/utils/request'

export function getCacheList(data) {
  return request({
    url: '/admin/sys/api/cache',
    method: 'get',
    params: data
  })
}

export function getCacheTree(data) {
  return request({
    url:  '/admin/sys/api/cache/tree',
    method: 'get',
    params: data
  })
}
