exports.up = function (knex, Promise) {
    return knex.schema.createTable('accounts', function (table) {
         table.increments('id');
         table.string('name', 255);
         table.string('email', 255);
         table.string('password', 255);
     }).then( () => {
         return knex.schema.createTable('profiles', function (table) {
         table.increments('id');
         table.string('name', 255);
         table.integer('account_id').unsigned();
         table.foreign('account_id').references('accounts.id');
     })
     }).then( () => {
         return knex.schema.createTable('pets', function (table) {
         table.increments('id');
         table.string('name', 255);
         table.string('date_of_birth', 255);
         table.string('gender', 255);
         table.string('breed',255);
         table.string('img', 255);
         table.string('notes', 255);
         table.string('weight', 255);
         table.string('species', 255);
         table.integer('account_id').unsigned();
         table.foreign('account_id').references('accounts.id');
     })
     }).then( () => {
         return knex.schema.createTable('history', function (table) {
         table.increments('id');
         table.string('type', 255);
         table.string('notes', 255);
         table.dateTime('created_at').defaultTo(knex.fn.now());
         table.integer('profile_id').unsigned();
         table.foreign('profile_id').references('profiles.id');
         table.integer('pet_id').unsigned();
         table.foreign('pet_id').references('pets.id');
     })
     })
}


exports.down = function (knex, Promise) {
 return Promise.all([
     knex.schema.dropTable('pets'), 
     knex.schema.dropTable('history'),
     knex.schema.dropTable('profiles'),
     knex.schema.dropTable('accounts')
 ])
};
