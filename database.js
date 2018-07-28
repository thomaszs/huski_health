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
          'name': data
        }).then(console.log("CHANGED"))
      },
  
      deleteHistory: function (id) {
        knex('history').where({
          'id': id.id
        }).del().then();
      }
    }
  }
  