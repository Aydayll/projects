const express = require('express');
const morgan = require('morgan');

// express app
const app = express();

app.set('view engine', 'ejs')
app.use(express.static('pubic'))

app.use(morgan('dev'))

const blogs = [
  {title:'how make the website', snippet:'Nothing'},
  {title:'how make the balyk', snippet:'Nothing'},
  {title:'how make the pizza', snippet:'Nothing'}
]

app.get('/', (req, res)=>{
  res.render('index', {blogs})
})

app.get('/about', (req, res)=>{
  res.render('about',{blogs})
})

app.get('/blogs/create', (req, res)=>{
  res.render('create')
})

app.use((req, res)=>{
  res.status(404).render('404')
})

app.listen(3000 , 'localhost', () => {
  console.log('Urraa')
});