
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
        {name: 'test1', email: 'test1.com', password:  'test'},
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
        {name: 'Otis', date_of_birth: '07/31/1990', gender: 'male', breed: 'pug', img: 'http://cdn2-www.dogtime.com/assets/uploads/gallery/pug-dog-breed-pictures/2-face.jpg',
        notes: 'cute as fuck', species: 'pupper', account_id: 1, weight: 10},
        {name: 'Mila', date_of_birth: '06/30/1991', gender: 'female', breed: 'golden retriever', img: 'https://gfnc1kn6pi-flywheel.netdna-ssl.com/wp-content/uploads/2017/10/goldie.jpg',
        notes: 'also cute as fuck', species: 'doggo', account_id: 1, weight: 20},
        {name: 'Roopert', date_of_birth: '04/13/1995', gender: 'male', breed: 'mutt', img: 'https://pbs.twimg.com/profile_images/948761950363664385/Fpr2Oz35_400x400.jpg',
        notes: 'shocked', species: 'doggo', account_id: 2, weight: 60}
      ])
      }).then( () => {
      return knex('history').insert([
        {type: 'activity', notes: 'took for a walk', profile_id: 1, pet_id: 1},
        {type: 'food', notes: 'fed steak', profile_id: 1, pet_id: 1},
        {type: 'weight', notes: 'weighed', profile_id: 2, pet_id: 1},
        {type: 'activity', notes: 'took for a walk', profile_id: 2, pet_id: 2},
        {type: 'weight', notes: 'weighed', profile_id: 2, pet_id: 2},
        {type: 'weight', notes: 'weighed', profile_id: 3, pet_id: 3}
      ])
    })
    });
};