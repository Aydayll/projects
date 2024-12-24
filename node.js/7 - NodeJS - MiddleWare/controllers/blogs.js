const Blog = require('../models/blog');


const blogs_index= (req, res) => {
    Blog.find().then((blogs) => {
      res.render('index', {
        blogs
      })
    })
  }

  const blogs_post= (req, res) => {
    const blog = new Blog(req.body)
    blog.save().then(() => {
      res.redirect('/blogs')
    });
  };

  const blogs_create=  (req, res) => {
    res.render('create', {
      title: 'Create a new blog'
    });
  };
  
  const blogs_delete=  (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id).then(() => {
      res.json({
        redirect: '/blogs'
      })
    })
  };
module.exports={blogs_index}
module.exports= {blogs_create}
module.exports= {blogs_delete}
module.exports= {blogs_post}