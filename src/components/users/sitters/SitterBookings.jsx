import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectSitters,
  fetchSitterBookings,
  resetSitterStatus,
  resetSingleBooking,
} from '../../../slices/sittersSlice';
import { selectAuth } from '../../../slices/authSlice';
import { BookingCard } from '../../index';
import { Divider } from '@mui/material';

const SitterBookings = (props) => {
  const { sitter } = props;

  const dispatch = useDispatch();
  const { token } = useSelector(selectAuth);
  const { singleSitter, sitterBookings } = useSelector(selectSitters);

  const [pending, setPending] = useState([]);
  const [approved, setApproved] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [cancelled, setCancelled] = useState([]);

  // let pending = [];
  // let approved = [];
  // let completed = [];
  // let cancelled = [];

  // console.log(sitter, sitterBookings, singleSitter);

  useEffect(() => {
    if (sitter && sitter.id) {
      const id = sitter.id;
      dispatch(fetchSitterBookings({ id, token }));
    }
    return () => {
      dispatch(resetSitterStatus());
      dispatch(resetSingleBooking());
    };
  }, [sitter, sitter.id]);

  useEffect(() => {
    if (sitterBookings && sitterBookings.length > 0) {
      sitterBookings.forEach((booking) => {
        if (
          booking.status === 'pending' &&
          !pending.some((element) => booking.id === element.id)
        )
          setPending([...pending, booking]);

        if (
          booking.status === 'approved' &&
          !approved.some((element) => booking.id === element.id)
        )
          setApproved([...approved, booking]);

        if (
          booking.status === 'complete' &&
          !completed.some((element) => booking.id === element.id)
        )
          setCompleted([...completed, booking]);

        if (
          ['cancelled', 'withdrawn', 'declined'].includes(booking.status) &&
          !cancelled.some((element) => booking.id === element.id)
        )
          setCancelled([...cancelled, booking]);
      });
    }
  }, [sitter, sitterBookings]);

  // console.log({ sitterBookings, pending, approved, completed });

  if (!sitterBookings.length) return <div>Loading...</div>;

  return (
    <div className="font-rubik flex flex-col gap-5">
      <div>
        <h2 className="font-rubikmono">Manage Sitter Bookings</h2>
      </div>
      <div className="h-[calc(100vh_-_20rem)] overflow-auto flex flex-col gap-5">
        {sitterBookings && sitterBookings.length < 1 ? (
          <div>Loading...</div>
        ) : (
          <div>
            <div>
              <p className="font-rubikmono text-lg pb-2">
                Review New Booking Requests ({pending.length})
              </p>
              <div className="flex flex-col gap-5">
                {pending && pending.length
                  ? pending.map((booking) => (
                      <div key={booking.id}>
                        <BookingCard booking={booking} role={'sitter'} />
                        <div className="pt-5">
                          <Divider />
                        </div>
                      </div>
                    ))
                  : 'no upcoming bookings!'}
              </div>
            </div>
            <div>
              <p className="font-rubikmono text-lg pb-2">
                Upcoming ({approved.length})
              </p>
              <div className="flex flex-col gap-5">
                {approved && approved.length
                  ? approved.map((booking) => (
                      <div key={booking.id}>
                        <BookingCard booking={booking} role={'sitter'} />
                        <div className="pt-5">
                          <Divider />
                        </div>
                      </div>
                    ))
                  : 'no upcoming bookings!'}
              </div>
            </div>
            <div>
              <p className="font-rubikmono text-lg pb-2">
                Completed ({completed.length})
              </p>
              <div className="flex flex-col gap-5">
                {completed && completed.length
                  ? completed.map((booking) => (
                      <div key={booking.id}>
                        <BookingCard booking={booking} role={'sitter'} />
                        <div className="pt-5">
                          <Divider />
                        </div>
                      </div>
                    ))
                  : 'no past bookings!'}
              </div>
            </div>
            <div>
              <p className="font-rubikmono text-lg pb-2">
                Cancelled ({cancelled.length})
              </p>
              <div className="flex flex-col gap-5">
                {cancelled && cancelled.length
                  ? cancelled.map((booking) => (
                      <div key={booking.id}>
                        <BookingCard booking={booking} role={'sitter'} />
                        <div className="pt-5">
                          <Divider />
                        </div>
                      </div>
                    ))
                  : 'no cancelled bookings!'}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SitterBookings;
