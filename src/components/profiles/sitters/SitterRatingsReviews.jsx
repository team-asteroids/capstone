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
        <div className="pb-3">
          <h3 className="font-rubikmono text-sm pb-3">Ratings</h3>
          <div>
            <p>
              {avgRating ? avgRating : ''} ({ratings.length} ratings)
            </p>
          </div>
        </div>
        <div>
          <h3 className="font-rubikmono text-sm pb-3">Reviews</h3>
          <div className="flex flex-col gap-5">
            {reviews.length > 0
              ? reviews.map((review) => (
                  <div key={review.id} className="flex flex-col w-full pb-3">
                    <div className="w-full flex flex-row mb-5 gap-5">
                      <div className="w-1/2 flex flex-col">
                        <input
                          disabled
                          className={validClass}
                          defaultValue={dateFormatter(review.createdAt)}
                        />
                      </div>
                      <div className="w-1/2 flex flex-col">
                        <input
                          disabled
                          className={validClass}
                          defaultValue={review.user.fullName}
                        />
                      </div>
                    </div>
                    <div>
                      <textarea
                        className={validClass}
                        rows={4}
                        disabled
                        defaultValue={review.context}
                      />
                    </div>
                    <Divider className="py-5" />
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
