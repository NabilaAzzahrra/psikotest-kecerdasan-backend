'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hasil extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Hasil.init({
    id_user: DataTypes.INTEGER,
    id_question: DataTypes.INTEGER,
    total_score: DataTypes.INTEGER,
    jumlah_type: DataTypes.INTEGER,
    jenis_kecerdasan: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Hasil',
    tableName: 'vw_answer',
  });
  return Hasil;
};