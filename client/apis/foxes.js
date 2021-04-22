import request from 'superagent'

const rootUrl = '/api/v1/firefox'

export function getFoxes () {
  return request.get(rootUrl + '/:id')
    .then(res => {
      return res.body.foxes
    })
}
