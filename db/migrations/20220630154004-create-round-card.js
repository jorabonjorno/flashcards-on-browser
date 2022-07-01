module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RoundsCards', {
      round_id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'Rounds',
          key: 'id',
        },
      },
      card_id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'Cards',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('RoundsCards');
  },
};
