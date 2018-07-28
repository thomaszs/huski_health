module.exports = function knexData(knex) {
    return {
  
      getAccount: function (email, password) {
        return knex('accounts').where({email: email, password: password})
      },

      getPet: function (email, password) {
        // return (knex('pets').where({id: }))
      },
  
      insertAccount: function (name, email, password) {
        knex('accounts').insert([{
            name: name,
            email: email,
            password: password
          }]).then()
      },
  
      modifyHistory: function (data) {
        knex('history').where({
          'id': data.id
        }).update({
          'notes': data.notes
        }).then()
      },

      editPet: function (data) {
        knex('pets').where({
          'id': 1
        }).update({
<<<<<<< HEAD
          'name': data.newPetName,
=======
          'name': data.newPetName, 
>>>>>>> 3d48ca2200b47a02a94f5a5143b899b39f033e96
          'weight': data.newPetWeight
        }).then(console.log("CHANGED"))
      },

      newPet: function (data) {
        knex('pets').insert({
          'name': data.petName,
          'species': data.species[0],
          'gender': data.gender[0],
          'date_of_birth': data.birthday,
          'weight': data.weight,
          'breed': data.breed,
          'img': data.image
        }).then(console.log("CHANGED"))
      },
  
      deleteHistory: function (id) {
        knex('history').where({
          'id': id.id
        }).del().then();
      }
    }
  }
  