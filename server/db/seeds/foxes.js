exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('foxes').del()
    .then(function () {
      // Inserts seed entries
      return knex('foxes').insert([
        { id: 1, name: 'Avery', description: 'Involve common conbustables such as wood, paper, cloth, rubber, rubbish and plastics', extinguisher_id: '1,2,3,4', iconsmall: './images/foxes/avery.png', iconbig: './images/foxes/averyBig.png' },
        { id: 2, name: 'Bailey', description: 'Involve flammable liquids, solvents, oil, petrol, paints, and other oil based products', extinguisher_id: '1,2,4', iconsmall: './images/foxes/bailey.png', iconbig: './images/foxes/baileyBig.png' },
        { id: 3, name: 'Cameron', description: 'Involve energised electrical equipment such as wiring, controls, motors, machinery or appliances', extinguisher_id: '6', iconsmall: './images/foxes/cameron.png', iconbig: './images/foxes/cameronBig.png' },
        { id: 4, name: 'Danny', description: 'Involve combustible metals such as magnesium, lithium, and titanium.', extinguisher_id: '1,2', iconsmall: './images/foxes/danny.png', iconbig: './images/foxes/dannyBig.png' },
        { id: 5, name: 'Kaylin', description: 'Involve combustible cooking media such as oils and grease commonly found in kitchens', extinguisher_id: '1,2,3,5,6', iconsmall: './images/foxes/kaylin.png', iconbig: './images/foxes/kaylinBig.png' },
        { id: 6, name: 'Eden', description: 'Involves high tension environments with potential sadness and annoyance.', extinguisher_id: '7,8,9', iconsmall: './images/foxes/eden.png', iconbig: './images/foxes/edenBig.png' }
      ])
    })
}
