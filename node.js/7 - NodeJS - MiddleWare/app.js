const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
const blogRoutes = require('./routes/blogsRoutes')

// express app
const app = express();

const ayday = 'mongodb+srv://ayday:test1234@ayday.yldkj.mongodb.net/ayday?retryWrites=true&w=majority'

mongoose.
connect(ayday, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err))

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use('/blogs', blogRoutes)

app.use((req, res, next) => {
  console.log('new request made:');
  console.log('host: ', req.hostname);
  console.log('path: ', req.path);
  console.log('method: ', req.method);
  next();
});

app.use((req, res, next) => {
  console.log('in the next middleware');
  next();
});

app.get('/blogs')

app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

app.get('/add-blog', (req, res) => {
  const blog = new Blog({
    title: 'About npm',
    description: 'npm (аббр. node package manager) — это стандартный менеджер пакетов, автоматически устанавливающийся вместе с Node.',
    imgUrl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--5NzZEMLS--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/7pryn9ls88giuc9m8cau.png',
    date: 'It was a ten years ago'
  });
  blog.save().then((result) => res.send(result))
});

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.render('index', {
    blogs
  })
  res.redirect('./blogs')
});


app.post('/blogs', (req, res) => {
  const blog = new Blog(req.body)
  blog.save().then(() => {
    res.redirect('/blogs')
  })
})


app.get('/blogs/create', (req, res) => {
  res.render('create', {
    title: 'Create a new blog'
  });
});
app.delete('/blogs/:id', (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id).then(() => {
    res.json({
      redirect: '/blogs'
    })
  })
});

app.get('/blogs/:id', (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render('blogDetails', {
        blog: result
      })
    })
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About'
  });
});



// 404 page
app.use((req, res) => {
  res.status(404).render('404', {
    title: '404'
  });
});