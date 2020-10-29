'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CovidData', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      jumlah_meninggal: {
        type: Sequelize.INTEGER
      },
      jumlah_sembuh: {
        type: Sequelize.INTEGER
      },
      jumlah_positif: {
        type: Sequelize.INTEGER
      },
      akumulasi_meninggal: {
        type: Sequelize.INTEGER
      },
      akumulasi_sembuh: {
        type: Sequelize.INTEGER
      },
      akumulasi_positif: {
        type: Sequelize.INTEGER
      },
      tanggal: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('CovidData');
  }
};