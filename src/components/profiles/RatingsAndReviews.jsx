import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../../slices/authSlice';
import {
  selectBookings,
  fetchAllBookings,
  resetBookingStatus,
} from '../../slices/bookingsSlice';
import { postSitterRating, postSitterReview } from '../../slices/usersSlice';
import { format } from 'date-fns';

const RatingsAndReviews = (props) => {
  const { user, sitter } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userAuth, token } = useSelector(selectAuth);

  const { allBookings } = useSelector(selectBookings);

  const [relevantBookings, setRelevantBookings] = useState([]);

  const [sitterRating, setSitterRating] = useState('');
  const [sitterReview, setSitterReview] = useState('');
  const [invalidRating, setInvalidRating] = useState(false);
  const [invalidReview, setInvalidReview] = useState(false);

  useEffect(() => {
    if (userAuth && userAuth.id) {
      const id = userAuth.id;
      dispatch(fetchAllBookings({ id, token }));
    }
  }, [userAuth]);

  useEffect(() => {
    if (allBookings && allBookings.length) {
      const filteredBookings = allBookings.filter(
        (booking) => booking.sitterId === sitter.id
      );
      setRelevantBookings(filteredBookings);
    }
    return () => {
      dispatch(resetBookingStatus());
    };
  }, [allBookings]);

  const labelClass = 'text-xs font-rubikmono';

  const buttonClass =
    'text-sm font-semibold ease-in-out duration-100 hover:text-bold-pink pb-2';

  const validClass =
    'appearance-none block w-full bg-white-200 border rounded py-3 px-6 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-1 font-rubik';

  const invalidClass =
    'border border-red-500 appearance-none block w-full bg-white-200 border rounded py-3 px-6 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-1 font-rubik';

  const goBack = () => {
    navigate(-1);
  };

  const submitRatingAndReview = async (evt) => {
    evt.preventDefault();
    const id = userAuth.id;
    const sitterId = sitter.id;
    let ratingRes;
    let reviewRes;

    if (sitterRating && sitterReview) {
      ratingRes = await dispatch(
        postSitterRating({ id, sitterId, token, sitterRating })
      );
      // console.log(ratingRes);
      setInvalidRating(false);

      reviewRes = await dispatch(
        postSitterReview({ id, sitterId, token, sitterReview })
      );
      // console.log(reviewRes);
      setInvalidReview(false);
    } else {
      setInvalidRating(true);
      setInvalidReview(true);
    }

    if (
      ratingRes.type === 'submitRating/fulfilled' &&
      reviewRes.type === 'submitReview/fulfilled'
    ) {
      goBack();
    }
  };

  return (
    <div className="font-rubik flex flex-col gap-2">
      <div>
        <button
          className="text-left max-w-fit text-xs pb-3 font-semibold hover:text-bold-purple ease-in-out duration-100"
          onClick={goBack}
        >
          BACK
        </button>
      </div>
      <h2 className="font-rubikmono">Throw A Dog A Bone</h2>
      <p
        className={
          invalidRating || invalidReview
            ? 'text-red-500 font-rubik font-bold text-sm text-left'
            : 'collapse mb-1 font-rubik text-xs'
        }
      >
        Please submit a valid rating and review!
      </p>
      {relevantBookings && relevantBookings.length >= 1 ? (
        <section className="w-2/3">
          <form onSubmit={submitRatingAndReview}>
            <div className="flex flex-wrap mb-5">
              <div className="w-1/2 flex flex-col pr-6">
                <label className={labelClass}>Select Sitting</label>
                <select className={validClass}>
                  {relevantBookings.map((booking) => (
                    <option key={booking.id}>{`id: ${booking.id}: ${format(
                      new Date(booking.startDate),
                      'MMM yyyy'
                    )} (${booking.status})`}</option>
                  ))}
                </select>
              </div>
              <div className="w-1/2 flex flex-col">
                <label className={labelClass}>Rating</label>
                <input
                  className={invalidRating ? invalidClass : validClass}
                  type="number"
                  step={0.5}
                  min={0}
                  max={5}
                  value={sitterRating}
                  onChange={(evt) => {
                    setInvalidRating(false);
                    setInvalidReview(false);
                    setSitterRating(evt.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-wrap mb-5">
              <div className="w-full flex flex-col">
                <label className={labelClass}>Review</label>
                <textarea
                  className={invalidReview ? invalidClass : validClass}
                  rows={6}
                  value={sitterReview}
                  onChange={(evt) => {
                    setInvalidReview(false);
                    setInvalidRating(false);
                    setSitterReview(evt.target.value);
                  }}
                />
              </div>
            </div>
            <button className={buttonClass} type="submit">
              SUBMIT
            </button>
          </form>
        </section>
      ) : (
        'must have a booked this sitter to leave a review!'
      )}
    </div>
  );
};

export default RatingsAndReviews;
