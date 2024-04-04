'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Test extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Test.init({
    id_question: DataTypes.INTEGER,
    score: DataTypes.INTEGER,
    id_user: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Test',
  });

  Test.associate = (models) => {
    Test.belongsTo(models.Question, { foreignKey: 'id_question' });
}

  return Test;
};