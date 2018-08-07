
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('accounts').del()
  .then( () => {
    return knex('profiles').del()
  }).then( () => {
    return knex('pets').del()
  }).then( () => {
    return knex('history').del()
  })
  .then( () => {
     // Inserts seed entries
      return knex('accounts').insert([
        {name: 'Evan', email: 'evankrkerr90@gmail.com', password:  'test'},
        {name: 'test2', email: 'test2.com', password: 'test'}
      ]).then( () => { 
        return knex('profiles').insert([
        {name: 'test1.1', account_id: 1},
        {name: 'test1.2', account_id: 1},
        {name: 'test2.1', account_id: 2},
        {name: 'test2.2', account_id: 2},
        {name: 'test2.3', account_id: 2}
      ])
    }).then( () =>  {
      return knex('pets').insert([
        {name: 'Otis', date_of_birth: 'Fri Aug 03 2016 12:00:00 GMT-0700 (Pacific Daylight Time)', gender: 'Male', breed: 'French Bulldog', img: 'http://animalsee.club/wp-content/uploads/Bulldog-Puppies-frenchie-puppies-ideas-on-pinterest-french-bulldog-puppy-otis-youtube-french-Cute-Black-French-Bulldog-Puppies-bulldog-puppy-otis-youtube.jpg',
        notes: 'Playful, can be stubborn, warms to strangers quickly', species: 'Dog', account_id: 1, weight: 10},
        {name: 'Morley', date_of_birth: 'Fri Feb 18 2011 12:00:00 GMT-0700 (Pacific Daylight Time)', gender: 'Male', breed: 'Golden Retriever', img: 'https://i.imgur.com/QuXblyh.jpg',
        notes: 'Gets along with just about everyone, strong & active, gentle & eager to please', species: 'Dog', account_id: 1, weight: 85},
        {name: 'Leonard', date_of_birth: 'Sun Apr 08 2012 12:00:00 GMT-0700 (Pacific Daylight Time)', gender: 'Male', breed: 'Egyptian Mau', img: 'https://i.imgur.com/EwoTgw7.jpg',
        notes: 'Gentle and reserved, love people and desires attention, always hungry.', species: 'Cat', account_id: 1, weight: 22},
      ])
      }).then( () => {
      return knex('history').insert([
        {type: 'activity', notes: 'took for a walk', profile_id: 1, pet_id: 1},
        {type: 'food', notes: 'fed steak', profile_id: 1, pet_id: 1},
        {type: 'weight', notes: '5', profile_id: 2, pet_id: 1},
        {type: 'activity', notes: 'took for a walk', profile_id: 2, pet_id: 2},
        {type: 'weight', notes: '5', profile_id: 2, pet_id: 2},
        {type: 'weight', notes: '5', profile_id: 3, pet_id: 3},
        {type: 'weight', notes: '8', profile_id: 2, pet_id: 1},
        {type: 'weight', notes: '10', profile_id: 2, pet_id: 1},
        {type: 'weight', notes: '12', profile_id: 2, pet_id: 1},
        {type: 'weight', notes: '11', profile_id: 2, pet_id: 1},
        {type: 'weight', notes: '18', profile_id: 2, pet_id: 1},
        {type: 'weight', notes: '15', profile_id: 2, pet_id: 1},
        {type: 'weight', notes: '20', profile_id: 2, pet_id: 1},
        {type: 'weight', notes: '20', profile_id: 2, pet_id: 1},
        {type: 'weight', notes: '21', profile_id: 2, pet_id: 1},
        {type: 'weight', notes: '22', profile_id: 2, pet_id: 1},
      ])
    })
    });
};