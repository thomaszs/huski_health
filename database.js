module.exports = function knexData(knex) {
    return {
  
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
        }).then(console.log("CHANGED"))
      },
  
      insertAccount: function (account) {
       return knex('accounts').insert({
            name: account.name,
            email: account.email,
            password: account.password
          }).returning(['id', 'name', 'email'])
      },

      verifySignup: function (account) {
        return knex('accounts').where({
            email: account.email
          }).then(function(result) {
            console.log(result)
            return result;
          })
    },

    verifyLogin: function (account) {
      return knex.select('id', 'email', 'name').from('accounts').limit(1).where({
          email: account.email,
          password: account.password
        }).asCallback(function (err, result) {
          if (err) {
            return err
          } else {
            // console.log(result[0])
            return result
          }
    })
  }
  
    }
  }
  