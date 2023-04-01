import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API = process.env.REACT_APP_API_URL;

export const fetchAllPosts = createAsyncThunk('/allPosts', async () => {
  const { data } = await axios.get(API + '/api/posts');
  return data;
});

export const fetchAllPostLikes = createAsyncThunk('/allPostLikes', async () => {
  const { data } = await axios.get(API + '/api/posts/likes');
  return data;
});

export const likePost = createAsyncThunk('/likePost', async ({ postId }) => {
  const token = localStorage.getItem('token');
  const { data } = await axios.post(
    API + `/api/posts/${postId}/likes`,
    { postId },
    {
      headers: {
        authorization: token,
      },
    }
  );
  return data;
});

export const unlikePost = createAsyncThunk(
  '/unlikePost',
  async ({ postId }) => {
    const token = localStorage.getItem('token');
    const { data } = await axios.delete(API + `/api/posts/${postId}/likes`, {
      headers: {
        authorization: token,
      },
    });
    return data;
  }
);

export const addPost = createAsyncThunk('/addPost', async ({ content }) => {
  const token = localStorage.getItem('token');
  const { data } = await axios.post(
    API + '/api/posts',
    { content },
    {
      headers: {
        authorization: token,
      },
    }
  );
  return data;
});

export const deletePost = createAsyncThunk('/deletePost', async (postId) => {
  const token = localStorage.getItem('token');
  const { data } = await axios.delete(API + `/api/posts/${postId}`, {
    headers: {
      authorization: token,
    },
  });
  return data;
});

export const fetchPostsThroughSearch = createAsyncThunk(
  '/postsSearch',
  async (name, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(API + '/api/posts/search', {
        params: {
          content: name,
        },
      });
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const fetchSinglePostComments = createAsyncThunk(
  '/singlePostComments',
  async (postId) => {
    const token = localStorage.getItem('token');
    const { data } = await axios.get(API + `/api/posts/${postId}/comments`, {
      headers: {
        authorization: token,
      },
    });
    return data;
  }
);

export const addPostComment = createAsyncThunk(
  '/addPostComment',
  async ({ content, postId }) => {
    const token = localStorage.getItem('token');
    const { data } = await axios.post(
      API + `/api/posts/${postId}/comments`,
      { content },
      {
        headers: {
          authorization: token,
        },
      }
    );
    return data;
  }
);

export const deletePostComment = createAsyncThunk(
  '/deletePostComment',
  async ({ postId, commentId }) => {
    const token = localStorage.getItem('token');
    const { data } = await axios.delete(
      `/api/posts/${postId}/comments/${commentId}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    return data;
  }
);

// export const fetchAllCommentLikes = createAsyncThunk(
//   '/allCommentLikes',
//   async ({ postId, commentId }) => {
//     const { data } = await axios.get(API + `/${postId}/comments/${commentId}/likes`);
//     return data;
//   }
// );

export const fetchAllCommentLikes = createAsyncThunk(
  '/allCommentLikes',
  async () => {
    const token = localStorage.getItem('token');
    const { data } = await axios.get(API + `/api/posts/comment-likes`, {
      headers: {
        authorization: token,
      },
    });
    // console.log('data-->', data);
    return data;
  }
);

export const likeComment = createAsyncThunk(
  '/likeComment',
  async ({ postCommentId }) => {
    const token = localStorage.getItem('token');
    const { data } = await axios.post(
      API + `/api/posts/comments/${postCommentId}/likes`,
      { postCommentId },
      {
        headers: {
          authorization: token,
        },
      }
    );
    return data;
  }
);

export const unlikeComment = createAsyncThunk(
  '/unlikeComment',
  async ({ postCommentId }) => {
    const token = localStorage.getItem('token');
    const { data } = await axios.delete(
      API + `/api/posts/comments/${postCommentId}/likes`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    return data;
  }
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    allPosts: [],
    allComments: [],
    singlePostComments: [],
    postLikes: [],
    commentLikes: [],
    error: '',
    status: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPosts.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        // console.log(payload);
        state.error = '';
        state.allPosts = payload;
      })
      .addCase(fetchAllPosts.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchAllPosts.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload;
      })
      .addCase(fetchAllPostLikes.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.error = '';
        state.postLikes = payload;
      })
      .addCase(fetchAllPostLikes.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchAllPostLikes.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload;
      })
      .addCase(likePost.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.error = '';
        // state.likedStatus = true;
        state.postLikes.push(payload);
        // what should we do with payload?
      })
      .addCase(likePost.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(likePost.rejected, (state, { payload }) => {
        state.status = 'failed';
        // state.likedStatus = true; // or dont change at all?
        state.error = payload;
        // check on this
      })
      .addCase(unlikePost.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.error = '';
        // state.likedStatus = false;
        state.postLikes = state.postLikes.filter(
          (like) =>
            !(like.postId === payload.postId && like.userId === payload.userId)
        );
        // what should we do with payload?
      })
      .addCase(unlikePost.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(unlikePost.rejected, (state, { payload }) => {
        state.status = 'failed';
        // state.likedStatus = true; // or dont change at all?
        state.error = payload;
        // check on this
      })
      .addCase(addPost.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.error = '';
        state.allPosts.push(payload);
        // state.posts.push(payload);
      })
      .addCase(addPost.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(addPost.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload;
      })
      .addCase(deletePost.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.error = '';
        console.log('deleted post id--> ', payload.id);
        state.allPosts = state.allPosts.filter(
          (post) => post.id !== payload.id
        );
        // console.log('posts before change--> ', state.posts);
        // what should we do with payload?
      })
      .addCase(deletePost.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(deletePost.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload;
      })
      .addCase(fetchPostsThroughSearch.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        // console.log(payload);
        state.error = '';
        state.allPosts = payload;
      })
      .addCase(fetchPostsThroughSearch.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchPostsThroughSearch.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload;
      })
      .addCase(fetchSinglePostComments.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        // console.log(payload);
        state.error = '';
        state.singlePostComments = payload;
      })
      .addCase(fetchSinglePostComments.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchSinglePostComments.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload;
      })
      .addCase(addPostComment.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.error = '';
        state.allComments.push(payload);
        // state.posts.push(payload);
      })
      .addCase(addPostComment.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(addPostComment.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload;
      })
      .addCase(deletePostComment.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.error = '';
        // console.log('deleted post id--> ', payload.id);
        state.allComments = state.allComments.filter(
          (comment) => comment.id !== payload.id
        );
        // console.log('posts before change--> ', state.posts);
        // what should we do with payload?
      })
      .addCase(deletePostComment.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(deletePostComment.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload;
      })
      .addCase(fetchAllCommentLikes.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.error = '';
        state.commentLikes = payload;
        // console.log('commentLIkes state-->', state.commentLikes);
      })
      .addCase(fetchAllCommentLikes.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchAllCommentLikes.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload;
      })
      .addCase(likeComment.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.error = '';
        // state.likedStatus = true;
        state.commentLikes.push(payload);
        // what should we do with payload?
      })
      .addCase(likeComment.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(likeComment.rejected, (state, { payload }) => {
        state.status = 'failed';
        // state.likedStatus = true; // or dont change at all?
        state.error = payload;
        // check on this
      })
      .addCase(unlikeComment.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.error = '';
        // state.likedStatus = false;
        state.commentLikes = state.commentLikes.filter(
          (like) =>
            !(
              like.postCommentId === payload.postCommentId &&
              like.userId === payload.userId
            )
        );
        // what should we do with payload?
      })
      .addCase(unlikeComment.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(unlikeComment.rejected, (state, { payload }) => {
        state.status = 'failed';
        // state.likedStatus = true; // or dont change at all?
        state.error = payload;
        // check on this
      });
  },
});

export const selectPosts = (state) => state.posts;
export default postsSlice.reducer;
