'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Insect extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Insect.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        titleCase(value) {
          let arr = value.split(' ');
          arr.forEach(ele => {
            if(ele[0] !== ele[0].toUpperCase()) {
              throw new Error("The title should be title cased!");
            }
          })
        }
      }
    },
    description:DataTypes.STRING,
    territory: DataTypes.STRING,
    fact: {
      type: DataTypes.STRING(240),
      validate: {
        lengthLimit (value) {
          if(value.length > 240) {
            throw new Error('The length of the string is too long.')
          }
        }
      }
    } ,
    millimeters: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 0
      }
    }
  }, {
    sequelize,
    modelName: 'Insect',
  });
  return Insect;
};
