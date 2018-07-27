module.exports = function knexData(knex) {
    return {
  
      getAllPosts: function () {
        return knex('posts')
      },
  
      insertPost: function (content, category) {
        knex('posts').insert([{
            content: content,
            category: category
          }])
          .asCallback(function (err, result) {
            if (err) {
              return console.log(err)
            } else {
              return
            }
          });
      },
  
      modifyPost: function (data) {
        knex('posts').where({
          'id': data.id
        }).update({
          'category': data.newCategory
        }).then()
      },
  
      deletePost: function (id) {
        knex('posts').where({
          'id': id.id
        }).del().then();
      }
    }
  }
  