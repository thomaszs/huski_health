module.exports = function knexData(knex) {
    return {
  
      getAccount: function (email, password) {
        return knex('accounts').where({email: email, password: password})
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
          'category': data.newCategory
        }).then()
      },
  
      deleteHistory: function (id) {
        knex('history').where({
          'id': id.id
        }).del().then();
      }
    }
  }
  