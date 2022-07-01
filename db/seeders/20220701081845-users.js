module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      user: 'Admin',
      mail: 'admin@admin.ru',
      password: 'admin123456',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      user: 'Pavel',
      mail: 'pavel@quiz.ru',
      password: 'pavel123456',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      user: 'Nikita K',
      mail: 'nikitk@quiz.ru',
      password: 'nikitk123456',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      user: 'Nikita 3',
      mail: 'nikit3@quiz.ru',
      password: 'nikit3123456',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      user: 'George',
      mail: 'george@quiz.ru',
      password: 'george123456',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
