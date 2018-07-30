module.exports = function knexData(knex) {
    return {
  
      getAccount: function (email, password) {
        return knex('accounts').where({email: email, password: password})
      },

      getPets: function (id) {
        return knex('pets').where({account_id: id})
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
          'name': data.newPetName, 
          'weight': data.newPetWeight,
          'breed': data.petNewBreed
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
  