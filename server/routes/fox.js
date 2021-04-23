const express = require('express')

const db = require('../db/foxes')

const router = express.Router()

router.get('/', (req, res) => {
  db.getFoxes()
    .then(results => {
      res.json({ foxes: results })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

router.get('/extinguishers', (req, res) => {
  db.getExtinguishers()
    .then(results => {
      res.json({ extinguisher: results })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})
module.exports = router

// db.getExtinguishers()

// const express = require('express')

// const db = require('../db/fruits')

// const router = express.Router()

// router.get('/', (req, res) => {
//   db.getFruits()
//     .then(results => {
//       res.json({ fruits: results.map(fruit => fruit.name) })
//       return null
//     })
//     .catch(err => {
//       console.log(err)
//       res.status(500).json({ message: 'Somthing went wrong' })
//     })
// })

// module.exports = router
