'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
    CREATE VIEW view_hasil AS
    SELECT
      Tests.id_user AS id_user,
      SUM(Tests.score) AS total,
      Questions.id_type AS id_type,
      Types.jenis_kecerdasan AS jenis_kecerdasan,
      Types.keterangan AS keterangan
    FROM
      Tests
      INNER JOIN Questions ON Tests.id_question = Questions.id
      INNER JOIN Types ON Questions.id_type = Types.id
    GROUP BY
      Tests.id_user,
      Questions.id_type;
    `);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`DROP VIEW view_hasil`);
  }
};