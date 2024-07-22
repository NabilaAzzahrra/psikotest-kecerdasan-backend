'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
    CREATE VIEW view_hasil AS
    WITH RankedResults AS (
    SELECT
        Tests.id_user AS id_user,
        Users.name AS name_user,
        Users.phone AS phone,
        Users.school AS school,
        Users.classes AS classes,
        SUM(Tests.score) AS total,
        Questions.id_type AS id_type,
        Types.jenis_kecerdasan AS jenis_kecerdasan,
        Types.jurusan AS jurusan,
        Types.keterangan AS keterangan,
        ROW_NUMBER() OVER (PARTITION BY Tests.id_user ORDER BY SUM(Tests.score) DESC) AS row_num
    FROM
        Tests
        INNER JOIN Questions ON Tests.id_question = Questions.id
        INNER JOIN Users ON Tests.id_user = Users.id_user
        INNER JOIN Types ON Questions.id_type = Types.id
    GROUP BY
        Tests.id_user,
        Questions.id_type
)
SELECT
    id_user,
    name_user,
    phone,
    school,
    classes,
    total,
    id_type,
    jenis_kecerdasan,
    jurusan,
    keterangan
FROM
    RankedResults
WHERE
    row_num = 1
ORDER BY
    total DESC;

    `);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`DROP VIEW view_hasil`);
  }
};