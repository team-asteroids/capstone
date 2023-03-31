import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth, fetchAllUserAuthSitters } from '../../slices/authSlice';
import {
  selectBookings,
  fetchAllBookings,
  resetBookingStatus,
} from '../../slices/bookingsSlice';
import { format } from 'date-fns';

const RatingsAndReviews = (props) => {
  const { user, sitter } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userAuth, token } = useSelector(selectAuth);

  const { allBookings } = useSelector(selectBookings);

  const [relevantBookings, setRelevantBookings] = useState([]);

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

  const validClass =
    'appearance-none block w-full bg-white-200 border rounded py-3 px-6 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-1 font-rubik';

  const goBack = () => {
    navigate(-1);
  };

  const submitRatingAndReview = (evt) => {
    evt.preventDefault();
    console.log('submitted!');
  };

  return (
    <div className="font-rubik flex flex-col gap-5">
      <div>
        <button
          className="text-left max-w-fit text-xs font-semibold hover:text-bold-purple ease-in-out duration-100"
          onClick={goBack}
        >
          BACK
        </button>
      </div>
      <h2 className="font-rubikmono">Throw A Dog A Bone</h2>
      {relevantBookings && relevantBookings.length >= 1 ? (
        <section className="w-2/3">
          <form onSubmit={submitRatingAndReview}>
            <div className="flex flex-wrap mb-5">
              <div className="w-1/2 flex flex-col pr-6">
                <label className={labelClass}>Select Sitting</label>
                <select className={validClass}>
                  {relevantBookings.map((booking) => (
                    <option key={booking.id}>{`Id: ${booking.id} - ${format(
                      new Date(booking.startDate),
                      'MMM yyyy'
                    )}`}</option>
                  ))}
                </select>
              </div>
              <div className="w-1/2 flex flex-col">
                <label className={labelClass}>Rating</label>
                <input
                  className={validClass}
                  type="number"
                  step={0.5}
                  min={0}
                  max={5}
                />
              </div>
            </div>
            <div className="flex flex-wrap mb-5">
              <div className="w-full flex flex-col">
                <label className={labelClass}>Review</label>
                <textarea className={validClass} rows={6} />
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>
      ) : (
        'must have a booking with sitter to leave a review!'
      )}
    </div>
  );
};

export default RatingsAndReviews;
