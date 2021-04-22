exports.up = function (knex) {
  return knex.schema.createTable('foxes', table => {
    table.increments('id')
    table.string('name')
    table.string('extinguisher_id')
    table.string('description')
    table.string('iconsmall')
    table.string('iconbig')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('foxes')
}
