module.exports = function knexData(knex) {
    return {
  
      // getAccount: function (email, password) {
      //   return knex('accounts').where({email: email, password: password})
      // },

      getPets: function (id) {
        return knex('pets').where({account_id: id})
      },
      getPet: function (id) {
        console.log(id)
        return knex('pets').where({id: id})
      },

      getPetActivities: function(petId) {
        return knex('history').where({type:'Activity',pet_id: petId}).orderBy('id', 'desc')
      },

      getPetWeight: function(petId) {
        return knex('history').where({type:'Weight',pet_id: petId})
      },

      getLatestPetWeight: function(petId) {
        return knex('history').where({type:'Weight',pet_id: petId}).orderBy('created_at','desc').limit(1)
      },

      getPetFeeding: function(petId) {
        console.log(petId)
        return knex('history').where({type:'Feeding',pet_id: petId}).orderBy('id', 'desc')
      },


      editPet: function (data) {
        console.log(data)
        return knex('pets').where({
          'id': data.id
        }).update({
          'name': data.newPetName, 
          'weight': data.newPetWeight
          // 'breed': data.newPetBreed
        })
      },

      newPet: function (data) {
        console.log(data)
       return knex('pets').insert({
          'name': data.petName,
          'species': data.species[0],
          'gender': data.gender[0],
          'date_of_birth': data.birthday,
          // 'age': data.age,
          'weight': data.weight,
          'breed': data.breed,
          'img': data.image,
          'account_id': data.accountID
        }).then(console.log("CHANGED"))
      },

      newHistory: function (data) {
        // console.log(data)
       return knex('history').insert({
          'type': data.type,
          'notes': data.notes,
          'pet_id': data.petId
        }).then(console.log("CHANGED: NEW HISTORY ADDED TO DB"))
      }
      
  
      // insertAccount: function (name, email, password) {
      //   knex('accounts').insert([{
      //       name: name,
      //       email: email,
      //       password: password
      //     }]).then()
      // },
  
      // modifyHistory: function (data) {
      //   knex('history').where({
      //     'id': data.id
      //   }).update({
      //     'notes': data.notes
      //   }).then()
      // },


  //     deleteHistory: function (id) {
  //       knex('history').where({
  //         'id': id.id
  //       }).del().then();
  //     }
    }
  }
  