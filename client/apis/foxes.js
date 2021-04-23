import request from 'superagent'

const rootUrl = '/api/v1'

export function getFoxes () {
  return request.get('api/v1/firefox')
    .then(res => {
      return res.body.foxes
    })
}
