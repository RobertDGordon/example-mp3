'use strict'

const User = require('./user')
const Post = require('./post')

async function init() {
  await User.sync()
  await Post.sync()
}

init()

Post.belongsTo(User);
User.hasMany(Post)

module.exports = {
  User,
  Post
}
