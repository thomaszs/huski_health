module.exports = function knexData(knex) {
    return {
      getPets: function (id) {
        return knex('pets').where({account_id: id})
      },

      getPet: function (id) {
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
        return knex('history').where({type:'Feeding',pet_id: petId}).orderBy('id', 'desc')
      },


      editPet: function (data) {
        return knex('pets').where({
          'id': data.id
        }).update({
          'name': data.newPetName, 
          'weight': data.newPetWeight,
          'notes': data.newPetNotes, 
        }).returning('id', 'name','weight', 'date_of_birth', 'gender', 'breed', 'img', 'notes', 'species', 'account_id')
      },

      newPet: function (data) {
       return knex('pets').insert({
          'name': data.petName,
          'species': data.species[0],
          'gender': data.gender[0],
          'date_of_birth': data.birthday,
          'weight': data.weight,
          'breed': data.breed,
          'img': data.image,
          'account_id': data.accountID,
          'notes':data.note
        })
      },

      newHistory: function (data) {
       return knex('history').insert({
          'type': data.type,
          'notes': data.notes,
          'pet_id': data.petId
        })
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
            return result;
          })
    },

    getUser: function (id) {
      return knex('accounts').where({
          id: id
        }).then(function(result) {
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
            return result
          }
    })
  },

  insertImage: function (filename, petid, filepath) {
    return knex('files').insert({
         name: filename,
         pet_id: petid,
         filepath: filepath,
         type: 'image'
       }).returning('filepath').then(function(result) {
      })
   },

  getImages: function (petid) {
    return knex('files').where({
      pet_id: petid,
      type: 'image'
    }).then(function(result) {
      return result;
})
  },

    insertFile: function (filename, petid, filepath) {
    return knex('files').insert({
         name: filename,
         pet_id: petid,
         filepath: filepath,
         type: 'pdf'
       }).returning('filepath').then(function(result) {
      })
   },

     getFiles: function (petid) {
      return knex('files').where({
        pet_id: petid,
        type: 'pdf'
      }).then(function(result) {
        return result;
  })
},

  getFile: function (id) {
  return knex('files').where({
   id: id
   }).then(function(result) {
   return result;
 })
}
  
    }
  }
  