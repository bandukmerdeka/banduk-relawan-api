/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('province', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    createdBy: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    modifiedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    modifiedBy: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
};
