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
    total: DataTypes.INTEGER,
    id_type: DataTypes.INTEGER,
    jenis_kecerdasan: DataTypes.STRING,
    keterangan: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Hasil',
    tableName: 'view_hasil',
    timestamps: false,
  });
  return Hasil;
};