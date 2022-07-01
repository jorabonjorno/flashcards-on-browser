const express = require('express');
const ReactDOMServer = require('react-dom/server');
const React = require('react');

const Layout = require('../view/Layout');
const Register = require('../view/Register');
// const Register = require('../view/Register')

const { User, Round } = require('../db/models');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  // с корневой перекидывает на
  res.redirect('/register');
});

router.get('/register', async (req, res) => {
  const title = 'Регистрация';
  const register = React.createElement(Register, { title });
  const html = ReactDOMServer.renderToStaticMarkup(register);
  res.write('<!DOCTYPE html>');
  res.end(html);
  // res.redirect('/themes');
});

router.post('/user/:id', async (req, res) => {
  const obj = req.body.res;
  const user = await User.create(({
    user: obj.name, mail: obj.mail, password: obj.password,
  }));
  res.redirect('/themes/');
});

router.get('/themes', (req, res) => {
  const title = 'Темы';
  const theme = React.createElement(Theme, { title });
  const html = ReactDOMServer.renderToStaticMarkup(theme);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

// router.get('/:themes/:question',(req,res) =>{
//     const question = React.createElement(Question, { question });
//     const html = ReactDOMServer.renderToStaticMarkup(question);
//     res.end(html);
// })
//
// router.post('/:themes/:question/:answer',async (req,res) =>{
//     const answer = req.body.res
//     const findAnswer = await Question.findOne({ where: { question: req.body.res} });
//     findPost.toLowerCase().includes(answer.toLowerCase()) ? await User.decrement('score', {by: 1}) : await User.increment('score', {by: 1})
// })
//
router.get('/results', async (req, res) => {
  const user = {
    id: 5,
    user: 'George',
    mail: 'george@quiz.ru',
    password: 'george123456',
    createdAt: '2022-07-01T10:17:28.018Z',
    updatedAt: '2022-07-01T10:17:28.018Z',
  };

  const findUser = await Round.findAll({
    raw: true,
    where: {
      user_id: user.id,
    },
    include: [Round.User],
  });
  res.send(`${findUser[0]['User.user']},поздравляем с завершением темы, ваш результат ${findUser[0].total_points}`);
});
module.exports = router;
