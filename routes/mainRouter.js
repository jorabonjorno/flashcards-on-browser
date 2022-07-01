const express = require('express');
const ReactDOMServer = require('react-dom/server');
const React = require('react');

const Home = require('../views/Home');
const Like = require('../views/Like')
const { Post } = require('../db/models');


const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
   //с корневой перекидывает на
    res.redirect('/register');
});

router.get('/register', async (req, res) => {
    const title = 'Регистрация'
    const register = React.createElement(Register, { title });
    const html = ReactDOMServer.renderToStaticMarkup(register);
    res.write('<!DOCTYPE html>');
    res.end(html);
    // res.redirect('/themes');
});

router.post('/user/:id', async (req, res) => {
    const obj = req.body.res
   const user = await User.create(({ username: obj.name, email: obj.email, password: obj.password, score: 0}))
    res.redirect('/themes/');
});

router.get('/themes',(req, res) => {
    const title = 'Темы'
    const theme = React.createElement(Theme, { title });
    const html = ReactDOMServer.renderToStaticMarkup(theme);
    res.write('<!DOCTYPE html>');
    res.end(html);
})

router.get('/:themes/:question',(req,res) =>{
    const question = React.createElement(Question, { question });
    const html = ReactDOMServer.renderToStaticMarkup(question);
    res.end(html);
})

router.post('/:themes/:question/:answer',async (req,res) =>{
    const answer = req.body.res
    const findAnswer = await Question.findOne({ where: { question: req.body.res} });
    findPost === answer ? await User.increment('score', { by: 1 }) : await User.decrement('score', { by: 1 })
})

router.get('/results', async (req,res)=>{
    const findUser = await User.findAll({ where: { question: req.body.res} });
    res.send(`${findUser.name},поздравляем с завершением темы, ваш результат ${findUser.score}`)
})
