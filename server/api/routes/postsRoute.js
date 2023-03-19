const router = require('express').Router();
const { Post, Post_Comment } = require('../../db');

// get all posts
router.get('/', async (req, res, next) => {
  try {
    const allPosts = await Post.findAll();
    res.status(200).json(allPosts);
  } catch (e) {
    console.log('Backend issue fetching all posts');
    next(e);
  }
});

//  get a single post
router.get('/:id', async (req, res, next) => {
  try {
    const singlePost = await Post.findByPk(req.params.id, {
      include: { model: Post_Comment },
    });
    res.status(200).json(singlePost);
  } catch (e) {
    console.log('Backend issue fetching single post');
    next(e);
  }
});

//  get a creator's posts
router.get('/user/:id', async (req, res, next) => {
  try {
    const postsBySingleUser = await Post.findAll({
      where: { creatorId: req.params.id },
    });
    res.status(200).json(postsBySingleUser);
  } catch (e) {
    console.log("Backend issue fetching a single user's posts");
    next(e);
  }
});

// add a single post
router.post('/', async (req, res, next) => {
  try {
    const [newPost, wasCreated] = await Post.findOrCreate({
      where: { content: req.body.content, creatorId: req.body.creatorId },
    });
    if (!wasCreated) return res.status(409).send('Post already exists');
    res.status(201).json(newPost);
  } catch (e) {
    console.log('Backend issue adding single post');
    next(e);
  }
});

//  edit a single post
router.put('/:id', async (req, res, next) => {
  try {
    const singlePost = await Post.findByPk(req.params.id);
    if (!singlePost) return res.status(404).send('No post exists!');
    const updatedPost = await singlePost.update(req.body);
    res.json(updatedPost);
  } catch (e) {
    console.error('Backend issue editing a post');
    next(e);
  }
});

//  delete a single post (& comments)
router.delete('/:id', async (req, res, next) => {
  try {
    const deletedPost = await Post.findByPk(req.params.id);
    const deletedPostComments = await Post_Comment.findAll({
      where: {
        postId: req.params.id,
      },
    });
    await Post_Comment.destroy({
      where: {
        postId: req.params.id,
      },
    });
    await deletedPost.destroy();
    res.json({ deletedPost, deletedPostComments });
  } catch (e) {
    console.log('Backend issue deleting post');
    next(e);
  }
});

// _____________________________________________________________

// get all post comments on a post
router.get('/:id/comments', async (req, res, next) => {
  try {
    const allPostComments = await Post_Comment.findAll({
      where: { postId: req.params.id },
    });
    res.status(200).json(allPostComments);
  } catch (e) {
    console.log('Backend issue fetching all comments');
    next(e);
  }
});

//  add post comment
router.post('/:id/comments', async (req, res, next) => {
  try {
    const [newPostComment, wasCreated] = await Post_Comment.findOrCreate({
      where: {
        content: req.body.content,
        userId: req.body.userId,
        postId: req.body.postId,
      },
    });
    if (!wasCreated) return res.status(409).send('Post_Comment already exists');
    res.status(201).json(newPostComment);
  } catch (e) {
    console.log('Backend issue adding post_comment');
    next(e);
  }
});

//  edit post comment
router.put('/:id/comments/:commentId', async (req, res, next) => {
  try {
    const postComment = await Post_Comment.findOne({
      where: { id: req.params.commentId, postId: req.params.id },
    });
    if (!postComment)
      return res.status(404).send('That post_comment does not exist!');
    const updatedPostComment = await postComment.update(req.body);
    res.json(updatedPostComment);
  } catch (e) {
    console.error('Backend issue editing a post_comment');
    next(e);
  }
});

//  delete post comment
router.delete('/:id/comments/:commentId', async (req, res, next) => {
  try {
    const deletedPostComment = await Post_Comment.findOne({
      where: { id: req.params.commentId, postId: req.params.id },
    });
    if (!deletedPostComment)
      return res.status(404).send('That post_comment does not exist!');
    await deletedPostComment.destroy();
    res.json(deletedPostComment);
  } catch (e) {
    console.log('Backend issue deleting post_comment');
    next(e);
  }
});

// _____________________________________________________________

// get all likes on a post

//  like a post

//  remove like from post

// _____________________________________________________________

// get all likes on a post-comment

// like a post-comment

// remove like from post-comment

module.exports = router;
