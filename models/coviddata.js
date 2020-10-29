'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CovidData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CovidData.init({
    jumlah_meninggal: DataTypes.INTEGER,
    jumlah_sembuh: DataTypes.INTEGER,
    jumlah_positif: DataTypes.INTEGER,
    akumulasi_meninggal: DataTypes.INTEGER,
    akumulasi_sembuh: DataTypes.INTEGER,
    akumulasi_positif: DataTypes.INTEGER,
    tanggal: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'CovidData',
  });
  return CovidData;
};