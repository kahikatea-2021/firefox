import request from 'superagent'

const rootUrl = '/api/v1'

export function getExtinguishers () {
  return request.get('api/v1/firefox/extinguishers')
    .then(res => {
      console.log('get', res)
      return res.body.extinguisher
    })
}
