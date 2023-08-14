// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
// Use body parser to parse the request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Use the public directory to host static content
app.use(express.static('public'));
// Load the data file
const data = require('./data');
// Create a new comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  const id = data.comments.length;
  comment.id = id;
  data.comments.push(comment);
  res.json(comment);
});
// Get all comments
app.get('/comments', (req, res) => {
  res.json(data.comments);
});
// Get a comment by id
app.get('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const comment = data.comments.find(comment => comment.id === id);
  res.json(comment);
});
// Update a comment
app.put('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const comment = req.body;
  const index = data.comments.findIndex(comment => comment.id === id);
  comment.id = id;
  data.comments[index] = comment;
  res.json(comment);
});
// Delete a comment
app.delete('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = data.comments.findIndex(comment => comment.id === id);
  data.comments.splice(index, 1);
  res.json(id);
});
// Start the server
app.listen(port, () => console.log(`Server listening on port ${port}!`));