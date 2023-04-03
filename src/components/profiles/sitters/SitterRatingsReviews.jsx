import React, { useEffect } from 'react';
import { format, setMonth, getMonth } from 'date-fns';
import { Divider } from '@mui/material';
import { useLocation, Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../../slices/authSlice';

const SitterRatingsReviews = (props) => {
  const location = useLocation();
  const params = useParams();
  const { userAuth } = useSelector(selectAuth);

  const { reviews, ratings, avgRating } = props;
  useEffect(() => {}, [ratings]);

  const dateFormatter = (date) => {
    const formattedDate = new Date(date);
    return format(formattedDate, 'MMMM d, yyyy');
  };

  const validClass =
    'appearance-none block w-full bg-white-200 border rounded py-3 px-6 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-1 font-rubik';

  return (
    <div>
      <div>
        {userAuth && +userAuth.id === +params.id ? null : (
          <div className="text-left pb-3">
            <p>Throw a dog a bone!</p>
            <p>
              <Link to={`${location.pathname}/reviews`}>Leave a review</Link>
            </p>
          </div>
        )}
        <div className="pb-5">
          <h3 className="font-rubikmono text-sm pb-3">Ratings</h3>
          <div>
            <p>
              {avgRating ? avgRating : ''} ({ratings.length} ratings)
            </p>
          </div>
        </div>
        <div>
          <h3 className="font-rubikmono text-sm pb-5">Reviews</h3>
          <div className="flex flex-col gap-5">
            {reviews.length > 0
              ? reviews.map((review) => (
                  <div
                    key={review.id}
                    className="flex flex-col rounded-lg w-full pb-3 bg-slate-50 px-8 py-10 gap-5"
                  >
                    <div className="flex flex-row gap-2 items-center">
                      <Link to={`/profile/${review.userId}`}>
                        <img
                          className="w-10 h-10 rounded-full"
                          src={require('../../../img/default-dog.jpg')}
                          alt="alt"
                        />
                      </Link>
                      <div className="flex flex-row gap-2">
                        <Link to={`/profile/${review.userId}`}>
                          <p>{review.user.fullName}</p>
                        </Link>
                        <p className="text-slate-400">
                          {dateFormatter(review.createdAt)}
                        </p>
                      </div>
                    </div>
                    <div className="pb-8">
                      <p>{review.context}</p>
                    </div>
                  </div>
                ))
              : 'no reviews!'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitterRatingsReviews;
