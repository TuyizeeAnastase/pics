'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'todo_list_tables',
    [
      {
        list:"title",
        author:"Anastase",
        content:'list1',
        createdAt: new Date(),
          updatedAt: new Date()
      },
    ],
    {}
  ),
down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
  