const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Blog = require('./models/blog');
const { render } = require('ejs');

//express app
const app = express();
dotenv.config();

mongoose.set('strictQuery', false);
//connect to mongodb
const dbURI = 'mongodb+srv://netninja:test1234@nodetuts.jfadvtx.mongodb.net/node-tuts?retryWrites=true&w=majority'
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000))
    .catch((err)=> console.log(err));

// register view engne
app.set('view engine', 'ejs');

//listen for request
//app.listen(3000);
// middelware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'));

// //mongoose and mongo sandbox routes
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'new blog 2',
//         snippet: 'about my new blog',
//         body: 'more about my new blog'
//     });

//     blog.save()
//       .then((result) => {
//         res.send(result)
//       })
//       .catch((err) => {
//         console.log(err);
//       });
// });
// app.get('/single-blog', (req, res) => {
//     Blog.findById('63d3c89387634347516095f6')
//         .then((result)=>{
//             res.send(result);
//         })
//         .catch((err)=>{
//             res.send(err);
//         })
// })
// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             res.send(err);
//         })
// })

app.use((req, res, next) => {
    console.log('new request made')
    console.log('host', req.hostname);
    console.log('path', req.path);
    console.log('method', req.method);
    next();
});
app.use((req, res, next) => {
    console.log('in the next middelware');
    
    next();
});

app.get('/', (req, res) => {
//   const blogs = [
//     {title: 'Yoshi finds aggs', snippet: 'Lorem dolor sit amet consectetr'},
//     {title: 'mario finds aggs', snippet: 'Lorem dolor sit amet consectetr'},
//     {title: 'how to defeat aggs', snippet: 'Lorem dolor sit amet consectetr'},
// ];

//     res.render('index', {title: 'Home', blogs});
    res.redirect('/blogs');
});
app.get('/about', (req, res) => {
    //without EJS
    //res.sendFile('./views/about.html', { root: __dirname});
    //with ejs
    res.render('about', {title: 'About'});
});
// blog routes
app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
      .then((result) => {
        res.render('index', { title:  'All Blogs', blogs: result})
      })
      .catch((err) => {
        console.log(err);
      })
})
app.post('/blogs', (req, res) =>{
    const blog = new Blog (req.body);
    blog.save()
    .then((result) =>{
        res.redirect('/blogs');
    })
    .catch((err) => {
        console.log(err);
    })
})
app.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
      .then(result => {
        res.render('details', { blog: result, title: 'Blog Details' });
      })
      .catch(err => {
        console.log(err);
      });
  });
//redirect
app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create a new blog'});
}); 
// 404 page
app.use((req, res) => {
    res.status(404).render('404', {title: '404'});
});