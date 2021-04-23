import request from 'superagent'

const rootUrl = '/api/v1'

export function getExtinguishers () {
  return request.get('api/v1/firefox/extinguishers')
    .then(res => {
      return res.body.extinguishers
    })
}
