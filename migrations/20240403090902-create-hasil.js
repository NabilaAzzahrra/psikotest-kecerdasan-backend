'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
    CREATE VIEW view_hasil AS
    SELECT
      tests.id_user AS id_user,
      SUM(tests.score) AS total,
      questions.id_type AS id_type,
      types.jenis_kecerdasan AS jenis_kecerdasan
    FROM
      tests
      INNER JOIN questions ON tests.id_question = questions.id
      INNER JOIN types ON questions.id_type = types.id
    GROUP BY
      tests.id_user,
      questions.id_type;
    `);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`DROP VIEW view_hasil`);
  }
};