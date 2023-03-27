import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchSingleSitter,
  fetchSingleSitterRatings,
  fetchSingleSitterReviews,
  selectSitters,
} from '../../slices/sittersSlice';
import { SitterCalendar, SitterPrefSidebar } from '../index';

const SitterProfile = () => {
  const dispatch = useDispatch();
  const [ratings, setRatings] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [avgRating, setAvgRating] = useState(0);

  const { singleSitter, sitterReviews, sitterRatings } =
    useSelector(selectSitters);

  const id = singleSitter.id;

  const total = ratings.reduce((acc, curr) => {
    return acc + curr.rating;
  }, 0);

  useEffect(() => {
    if (id) {
      dispatch(fetchSingleSitterReviews(id));
      setReviews(sitterReviews);
      dispatch(fetchSingleSitterRatings(id));
      setRatings(sitterRatings);
      setAvgRating(total / sitterRatings.length);
    }
  }, [singleSitter]);

  return (
    <div className="font-rubik flex flex-col gap-5 min-w-min">
      <div>
        <h2 className="font-rubikmono">Sitter Profile</h2>
      </div>
      <div className="font-rubik flex flex-row">
        <div className="min-w-4/5 h-[calc(100vh_-_20rem)] overflow-auto flex flex-col pr-10 gap-10">
          <div className="mr-10">
            <h2 className="font-rubikmono">About Me</h2>
            <p>{singleSitter.bio}</p>
          </div>
          <div>
            <h2 className="font-rubikmono pb-3">Availability & Booking</h2>
            <SitterCalendar rate={singleSitter.rate} sitterId={id} />
          </div>
          <div>
            <h2 className="font-rubikmono pb-3">Ratings & Reviews</h2>
            <div>
              <div className="pb-3">
                <h3 className="font-rubikmono text-sm pb-3">Ratings</h3>
                <div>
                  <p>
                    {avgRating} ({ratings.length} ratings)
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-rubikmono text-sm pb-3">Reviews</h3>
                {reviews.length > 0
                  ? reviews.map((review) => (
                      <div key={review.id} className="pb-3">
                        <p>{review.createdAt}</p>
                        <p>{review.context}</p>
                        <p>{review.user.fullName}</p>
                      </div>
                    ))
                  : 'no reviews!'}
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/5">
          <SitterPrefSidebar />
        </div>
      </div>
    </div>
  );
};

export default SitterProfile;
