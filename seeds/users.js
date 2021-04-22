
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'nate', age: 32},
        {username: 'erica', age: 32},
        {username: 'keith', age: 31}
      ]);
    });
};
