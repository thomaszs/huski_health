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
        {name: 'Juca', date_of_birth: 'Sat Feb 03 2010 12:00:00 GMT-0700 (Pacific Daylight Time)', gender: 'Male', breed: 'French Bulldog', img: 'https://i.imgur.com/SdN4xWX.jpg',
        notes: 'Playful, can be stubborn, warms to strangers quickly', species: 'Dog', account_id: 1, weight: 20},
      ])
      }).then( () => {
      return knex('history').insert([
        //Otis pet.id = 1, Morley pet.id = 2
        {type: 'Activity', notes: 'Barked at birds outside the window', profile_id: 1, pet_id: 1},
        {type: 'Feeding', notes: 'steak & lobster', profile_id: 1, pet_id: 1},
        {type: 'Weight', notes: '35', profile_id: 2, pet_id: 1},
        {type: 'Weight', notes: '30', profile_id: 2, pet_id: 1},
        {type: 'Weight', notes: '28', profile_id: 2, pet_id: 1},
        {type: 'Weight', notes: '27', profile_id: 2, pet_id: 1},
        {type: 'Weight', notes: '26', profile_id: 2, pet_id: 1},
        {type: 'Weight', notes: '26', profile_id: 2, pet_id: 1},
        {type: 'Weight', notes: '25', profile_id: 2, pet_id: 1},
        {type: 'Activity', notes: 'Chased his tail for 1 hr', profile_id: 2, pet_id: 2},
        {type: 'Feeding', notes: 'Duck Confit', profile_id: 1, pet_id: 2},
        {type: 'Weight', notes: '90', profile_id: 2, pet_id: 2},
        {type: 'Weight', notes: '85', profile_id: 2, pet_id: 2},
        {type: 'Weight', notes: '80', profile_id: 2, pet_id: 2},
        {type: 'Weight', notes: '78', profile_id: 2, pet_id: 2},
        {type: 'Weight', notes: '74', profile_id: 2, pet_id: 2},
        {type: 'Weight', notes: '74', profile_id: 2, pet_id: 2},
        {type: 'Weight', notes: '73', profile_id: 2, pet_id: 2},
        {type: 'Weight', notes: '72', profile_id: 2, pet_id: 2},
        {type: 'Activity', notes: 'Watched Netfix with Lexi', profile_id: 2, pet_id: 3},
        {type: 'Feeding', notes: 'salmon & caviar', profile_id: 1, pet_id: 3},
        {type: 'Weight', notes: '22', profile_id: 2, pet_id: 3},
        {type: 'Weight', notes: '20', profile_id: 2, pet_id: 3},
        {type: 'Weight', notes: '19', profile_id: 2, pet_id: 3},
        {type: 'Weight', notes: '17', profile_id: 2, pet_id: 3},
        {type: 'Weight', notes: '17', profile_id: 2, pet_id: 3},
        {type: 'Weight', notes: '16', profile_id: 2, pet_id: 3},
        {type: 'Weight', notes: '16', profile_id: 2, pet_id: 3}, 
      ])
    })
    });
};