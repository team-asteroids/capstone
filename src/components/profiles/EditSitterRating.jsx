import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  deleteSitterReview,
  editSitterReview,
  fetchSitterReview,
  selectUser,
} from '../../slices/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../../slices/authSlice';

const EditSitterRating = (props) => {
  const { user, sitter } = props;
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return <div>EditSitterRating</div>;
};

export default EditSitterRating;
