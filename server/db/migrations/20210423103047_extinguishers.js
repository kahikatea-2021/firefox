exports.up = function (knex) {
    return knex.schema.createTable('extinguishers', table => {
      table.increments('id')
      table.string('name')
      table.string('description')
      table.string('icon')
    })
  }
  
  exports.down = function (knex) {
    return knex.schema.dropTable('extinguishers')
  }
  