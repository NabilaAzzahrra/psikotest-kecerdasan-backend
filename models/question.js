'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Question.init({
    id_type: DataTypes.INTEGER,
    question: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Question',
  });

  Question.associate = (models) => {
    Question.hasMany(models.Test, { as: 'Questions', foreignKey: 'id_question' });
    Question.belongsTo(models.Type, {foreignKey: 'id_type'});
  }

  return Question;
};