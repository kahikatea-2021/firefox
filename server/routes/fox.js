const express = require('express')

const db = require('../db/foxes')

const router = express.Router()

// GET foxes
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

// GET foxes by ID
router.get('/:id', (req, res) => {
  db.getFoxesById()
    .then(results => {
      res.json({ foxes: results.map(fox => fox.id) })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router

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
