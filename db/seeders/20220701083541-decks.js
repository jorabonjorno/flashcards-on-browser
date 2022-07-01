module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Decks', [{
      title: 'Космос',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Мультипликационные фильмы',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Бригада',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Поттер',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Decks', null, {});
  },
};
