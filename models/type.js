'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Type.init({
    jenis_kecerdasan: DataTypes.STRING,
    keterangan: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Type',
  });

  Type.associate = (models) => {
    Type.hasMany(models.Type, { as: 'Types', foreignKey: 'id' });
  }

  return Type;
};