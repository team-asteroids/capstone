import React, { useEffect } from 'react';
import { format, setMonth, getMonth } from 'date-fns';

const SitterRatingsReviews = (props) => {
  const { reviews, ratings, avgRating } = props;
  useEffect(() => {}, [ratings]);

  const dateFormatter = (date) => {
    const formattedDate = new Date(date);
    return format(formattedDate, 'MMMM d, yyyy');
  };

  return (
    <div>
      <div>
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
          {reviews.length > 0
            ? reviews.map((review) => (
                <div key={review.id} className="pb-3">
                  <p>{dateFormatter(review.createdAt)}</p>
                  <p>{review.context}</p>
                  <p>{review.user.fullName}</p>
                </div>
              ))
            : 'no reviews!'}
        </div>
      </div>
    </div>
  );
};

export default SitterRatingsReviews;
