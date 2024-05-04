'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
    CREATE VIEW view_hasil AS
    SELECT
      user_results.id_user,
      user_results.name_user,
      user_results.phone,
      user_results.school,
      user_results.classes,
      user_results.total AS total,
      user_results.id_type,
      user_results.jenis_kecerdasan,
      user_results.keterangan
    FROM
      (
        SELECT
          Tests.id_user AS id_user,
          Users.name AS name_user,
          Users.phone AS phone,
          Users.school AS school,
          Users.classes AS classes,
          SUM(Tests.score) AS total,
          Questions.id_type AS id_type,
          Types.jenis_kecerdasan AS jenis_kecerdasan,
          Types.keterangan AS keterangan
        FROM
          Tests
          INNER JOIN Questions ON Tests.id_question = Questions.id
          INNER JOIN Users ON Tests.id_user = Users.id_user
          INNER JOIN Types ON Questions.id_type = Types.id
        GROUP BY
          Tests.id_user,
          Questions.id_type
        ORDER BY
          total DESC
      ) AS user_results
    GROUP BY
      user_results.id_user;
    `);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`DROP VIEW view_hasil`);
  }
};