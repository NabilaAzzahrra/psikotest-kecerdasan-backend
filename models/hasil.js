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
    name_user: DataTypes.STRING,
    phone: DataTypes.STRING,
    school: DataTypes.STRING,
    classes: DataTypes.STRING,
    total: DataTypes.INTEGER,
    id_type: DataTypes.INTEGER,
    jenis_kecerdasan: DataTypes.STRING,
    jurusan: DataTypes.STRING,
    keterangan: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Hasil',
    tableName: 'view_hasil',
    timestamps: false,
  });
  return Hasil;
};