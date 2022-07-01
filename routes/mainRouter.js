const express = require('express');
const ReactDOMServer = require('react-dom/server');
const React = require('react');

const Layout = require('../view/Layout');
const Theme = require('../view/Theme');
const Register = require('../view/Register');
// const Register = require('../view/Register')

const { User, Deck, Card } = require('../db/models');
const Question = require('../view/Question');
const Answer = require('../view/Answer');

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

router.post('/user/', async (req, res) => {
  const obj = req.body;
  console.log(obj);
  const user = await User.create(({ user: obj.login, mail: obj.email, password: obj.password }));
  res.redirect('/themes/');
});

router.get('/themes', async (req, res) => {
  const title = 'Темы';
  const findThemes = await Deck.findAll({
    raw: true,
  });
  //   console.log(findThemes);
  const theme = React.createElement(Theme, { title, findThemes });
  const html = ReactDOMServer.renderToStaticMarkup(theme);
  res.write('<!DOCTYPE html>');
  res.end(html);
});
router.get('/question/:id', async (req, res) => {
  const title = 'Вопросы';
  const { id } = req.params;
  const findQuestion = await Card.findAll({
    raw: true,
    where: {
      deck_id: id,
    },
  });
  console.log(findQuestion);
  const theme = React.createElement(Question, { title, findQuestion });
  const html = ReactDOMServer.renderToStaticMarkup(theme);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.get('/question/:id/:answer', async (req, res) => {
    const title = 'Вопросы';
    const { id } = req.params;
    const findQuestion = await Card.findAll({
      raw: true,
      where: {
        deck_id: id,
      },
    });
    console.log(findQuestion);
    const theme = React.createElement(Answer, { title, findQuestion });
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
// router.get('/results', async (req,res)=>{
//     const findUser = await User.findAll({ where: { question: req.body.res} });
//     res.send(`${findUser.name},поздравляем с завершением темы, ваш результат ${findUser.score}`)
// })
module.exports = router;
