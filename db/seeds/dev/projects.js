
exports.seed = function(knex, Promise) {
  return knex('palettes').del()
    .then(() => knex('projects').del())
    .then(() => {
      return Promise.all([
        knex('projects').insert({ name: 'Sample Project' }, 'id')
        .then(project => {
          return knex('palettes').insert([
            {
              name: 'Sunset',
              color_one: 'F18C8E',
              color_two: 'F0B784',
              color_three: '',
              color_four: '',
              color_five: '',
              project_id: project[0]
            }
          ])
        })
        .then(() => console.log('Seeding is finished'))
        .catch(error => console.log(`Error with the seeding: ${error}`))
      ])
    })
    .catch(error => console.log(`Error with the seeding: ${error}`))
};

// Clear out both tables (palettes first, as they depend on projects existing)

// Add a project => return the project’s id => add palettes with that project id

// Add a project => return the project’s id => add palettes with that project id

// // Deletes ALL existing entries
//   return knex('table_name').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('table_name').insert([
//         {id: 1, colName: 'rowValue1'},
//         {id: 2, colName: 'rowValue2'},
//         {id: 3, colName: 'rowValue3'}
//       ]);
//     });
