const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class RoundCard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RoundCard.init({
    round_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: 'Rounds',
        key: 'id',
      },
    },
    card_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: 'Cards',
        key: 'id',
      },
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'RoundCard',
    tableName: 'RoundsCards',
  });
  return RoundCard;
};
