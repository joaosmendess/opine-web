'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // Outros campos...
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
     
  }
};
