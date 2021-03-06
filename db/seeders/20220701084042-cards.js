module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cards', [{
      deck_id: 1,
      question: 'В каком созвездии мы с вами живём?',
      answer: 'никаком',
      point: 100,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      deck_id: 1,
      question: 'Как нызывается медицинский центр в котором родился Люк Скайуокер?',
      answer: 'Полис-Масса',
      point: 400,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      deck_id: 1,
      question: 'Является ли Луна инопланетным кораблём?',
      answer: 'ᘉᓰ ᐺ ᖽᐸᓍᘿᘻ Sᒪᑘᑢᕼᗩᘿ',
      point: 800,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      deck_id: 1,
      question: 'В каком фильме не играл Дмитрий Дюжев?',
      answer: 'Жмурки, Остров, Каникулы строгого режима, Стартрек',
      point: 1024,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      deck_id: 2,
      question: '/image/1.png',
      answer: 'Трикота',
      point: 100,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      deck_id: 2,
      question: '/image/2.png',
      answer: 'Порко Россо',
      point: 200,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      deck_id: 2,
      question: '/image/3.png',
      answer: 'Футурама',
      point: 400,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      deck_id: 2,
      question: '/image/4.png',
      answer: 'Любовь Смерть и Роботы',
      point: 1024,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      deck_id: 3,
      question: 'Какие часы Космос советовал купить Саше Белому?',
      answer: 'Луч или Полет',
      point: 100,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      deck_id: 3,
      question: 'Кто дал Пчеле совет, "Живи своим умом, Пчёла" когда тот ехал в аэропорт?',
      answer: 'Саша Белый',
      point: 200,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      deck_id: 3,
      question: 'Кому принадлежит фраза "Бог терпел и вам велел!"?',
      answer: 'Фил',
      point: 400,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      deck_id: 3,
      question: 'Кем хотел быть Саша Белый после армии?',
      answer: 'Вулканологом',
      point: 1024,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      deck_id: 4,
      question: 'У каждого факультета был свой призрак. Кто был у Слизерина?',
      answer: 'Кровавый Барон',
      point: 100,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      deck_id: 4,
      question: 'Что Гермиона исправила в своей внешности с помощью магии?',
      answer: 'Длинные передние зубы',
      point: 200,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      deck_id: 4,
      question: 'Что продавала фирма Вернона Дурсля?',
      answer: 'Дрели',
      point: 400,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      deck_id: 4,
      question: 'Какой марки была голубая машина Уизли?',
      answer: 'Форд',
      point: 1024,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cards', null, {});
  },
};
