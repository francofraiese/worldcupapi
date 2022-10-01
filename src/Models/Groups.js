const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('groups', {
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
        primaryKey: true
    }
  });
};