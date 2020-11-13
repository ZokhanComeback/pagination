const express = require('express');
const router = express.Router();

const textArr = [
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit officia placeat temporibus veniam? Amet aperiam corporis culpa dolore dolorem doloribus ea eligendi eos ex facere facilis fuga illo libero maxime mollitia, nesciunt non nostrum obcaecati qui quia reiciendis repellendus saepe sapiente voluptate voluptates. Ab animi aperiam architecto, aspernatur consectetur cupiditate ea eius id, illo nesciunt omnis placeat quisquam sapiente vitae.',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit officia placeat temporibus veniam? Amet aperiam corporis culpa dolore dolorem doloribus ea eligendi eos ex facere facilis fuga illo libero maxime mollitia, nesciunt non nostrum obcaecati qui quia reiciendis repellendus saepe sapiente voluptate voluptates. Ab animi aperiam architecto, aspernatur consectetur cupiditate ea eius id, illo nesciunt omnis placeat quisquam sapiente vitae.',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit officia placeat temporibus veniam? Amet aperiam corporis culpa dolore dolorem doloribus ea eligendi eos ex facere facilis fuga illo libero maxime mollitia, nesciunt non nostrum obcaecati qui quia reiciendis repellendus saepe sapiente voluptate voluptates. Ab animi aperiam architecto, aspernatur consectetur cupiditate ea eius id, illo nesciunt omnis placeat quisquam sapiente vitae.',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit officia placeat temporibus veniam? Amet aperiam corporis culpa dolore dolorem doloribus ea eligendi eos ex facere facilis fuga illo libero maxime mollitia, nesciunt non nostrum obcaecati qui quia reiciendis repellendus saepe sapiente voluptate voluptates. Ab animi aperiam architecto, aspernatur consectetur cupiditate ea eius id, illo nesciunt omnis placeat quisquam sapiente vitae.',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit officia placeat temporibus veniam? Amet aperiam corporis culpa dolore dolorem doloribus ea eligendi eos ex facere facilis fuga illo libero maxime mollitia, nesciunt non nostrum obcaecati qui quia reiciendis repellendus saepe sapiente voluptate voluptates. Ab animi aperiam architecto, aspernatur consectetur cupiditate ea eius id, illo nesciunt omnis placeat quisquam sapiente vitae.',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit officia placeat temporibus veniam? Amet aperiam corporis culpa dolore dolorem doloribus ea eligendi eos ex facere facilis fuga illo libero maxime mollitia, nesciunt non nostrum obcaecati qui quia reiciendis repellendus saepe sapiente voluptate voluptates. Ab animi aperiam architecto, aspernatur consectetur cupiditate ea eius id, illo nesciunt omnis placeat quisquam sapiente vitae.',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit officia placeat temporibus veniam? Amet aperiam corporis culpa dolore dolorem doloribus ea eligendi eos ex facere facilis fuga illo libero maxime mollitia, nesciunt non nostrum obcaecati qui quia reiciendis repellendus saepe sapiente voluptate voluptates. Ab animi aperiam architecto, aspernatur consectetur cupiditate ea eius id, illo nesciunt omnis placeat quisquam sapiente vitae.'
]

router.get('/', function (req, res) {
  const options = {
    text: textArr[0],
    page: 0,
    all: textArr
  }
  res.render('text', options);
});

router.get('/:page', function(req, res, next) {
  const options = {
    text: textArr[req.params.page],
    page: req.params.page,
    all: textArr
  }
  res.render('text', options);
});

module.exports = router;
