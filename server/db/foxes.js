const connection = require('./connection')

function getFoxes (db = connection) {
  return db('foxes')
    .then(result => {
      return result
    })
}

function getExtinguishers (db = connection) {
  return db('extinguishers')
    .then(result => {
      return result
    })
}

// function getFoxesById (id, db = connection) {
//   return db('foxes')
//     .join('extinguishers', 'extinguisher_id', 'extinguisher.id')
//     .where('id', id)
//     .select('name', 'description', 'extinguisher.id', 'iconbig')
//     .then(result => {
//       return result
//     })
// }

module.exports = {
  getFoxes,
  getExtinguishers
}
// function getFruits (db = connection) {
//   return db('fruit').select()
// }

// module.exports = {
//   getFruits
// }
