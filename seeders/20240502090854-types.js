'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Types', [
      {
        jenis_kecerdasan: 'Linguistik',
      }, {
        jenis_kecerdasan: 'Logis-Matematis',
      },
      {
        jenis_kecerdasan: 'Musikal',
      },
      {
        jenis_kecerdasan: 'Fisik-Kinestetik',
      },
      {
        jenis_kecerdasan: 'Spasial-Visual',
      }, {
        jenis_kecerdasan: 'Interpersonal',
      }, {
        jenis_kecerdasan: 'Intrapersonal',
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Types', null, {});
  }
};
