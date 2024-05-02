'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Types', [
      {
        jenis_kecerdasan: 'Linguistik',
        createdAt: new Date(),
        updateAt: new Date(),
      }, {
        jenis_kecerdasan: 'Logis-Matematis',
        createdAt: new Date(),
        updateAt: new Date(),
      },
      {
        jenis_kecerdasan: 'Musikal',
        createdAt: new Date(),
        updateAt: new Date(),
      },
      {
        jenis_kecerdasan: 'Fisik-Kinestetik',
        createdAt: new Date(),
        updateAt: new Date(),
      },
      {
        jenis_kecerdasan: 'Spasial-Visual',
        createdAt: new Date(),
        updateAt: new Date(),
      }, {
        jenis_kecerdasan: 'Interpersonal',
        createdAt: new Date(),
        updateAt: new Date(),
      }, {
        jenis_kecerdasan: 'Intrapersonal',
        createdAt: new Date(),
        updateAt: new Date(),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Types', null, {});
  }
};
