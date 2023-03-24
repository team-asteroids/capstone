import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { attemptTokenLogin, selectAuth } from '../../slices/authSlice';
import {
  fetchAllBookings,
  resetBookingStatus,
  selectBookings,
} from '../../slices/bookingsSlice';

function UserBookings() {
  const dispatch = useDispatch();
  const { userAuth, token } = useSelector(selectAuth);
  const [bookingFilter, setBookingFilter] = useState('');

  const { status, allBookings } = useSelector(selectBookings);

  let bookingArr = allBookings;

  if (bookingFilter === 'approved') {
    const approvedBookings = allBookings.filter(
      (booking) => booking.status === 'approved'
    );
    bookingArr = approvedBookings;
  }

  if (bookingFilter === 'pending') {
    const approvedBookings = allBookings.filter(
      (booking) => booking.status === 'pending'
    );
    bookingArr = approvedBookings;
  }
  if (bookingFilter === 'completed') {
    const approvedBookings = allBookings.filter(
      (booking) => booking.status === 'completed'
    );
    bookingArr = approvedBookings;
  }

  if (bookingFilter === 'cancelled') {
    const approvedBookings = allBookings.filter((booking) =>
      ['cancelled', 'withdrawn', 'declined'].includes(booking.status)
    );
    bookingArr = approvedBookings;
  }

  useEffect(() => {
    dispatch(attemptTokenLogin());
  }, [dispatch]);

  useEffect(() => {
    if (userAuth.id) {
      const id = userAuth.id;
      dispatch(fetchAllBookings({ id, token }));
    }

    // setUserBookings(allBookings);

    return () => {
      dispatch(resetBookingStatus());
    };
  }, [userAuth]);

  if (!userAuth && !userAuth.firstName)
    return <div className="font-rubikmono">Fetching good things...</div>;

  return (
    <div className="flex flex-col gap-5 font-rubik">
      <div id="filter" className="flex flex-row justify-between">
        <h2 className="font-rubikmono">Manage Sitter Bookings</h2>
        <div>
          <select
            id="filter"
            className="bg-white-smoke border border-white-smoke text-gray-900 text-sm rounded-lg focus:ring-pale-blue focus:border-pale-blue block p-1.5 px-3 drop-shadow-sm"
            onChange={(evt) => {
              setBookingFilter(evt.target.value);
            }}
            defaultValue={bookingFilter}
          >
            <option value="">all</option>
            <option value="approved">approved</option>
            <option value="pending">pending</option>
            <option value="completed">completed</option>
            <option value="cancelled">cancelled</option>
          </select>
        </div>
      </div>
      <div className="h-[calc(100vh_-_20rem)] overflow-auto flex flex-col">
        <div id="bookings" className="flex gap-5 flex-col w-full">
          <div className="">
            {status === 'success' && bookingArr.length > 0 ? (
              bookingArr.map((booking) => {
                return (
                  <div
                    className="bg-white-smoke flex flex-row justify-between drop-shadow-sm p-5 rounded-xl"
                    key={booking.id}
                  >
                    <div>
                      <div>
                        <div>
                          <h2>{booking.status}</h2>
                          <p>
                            {booking.startDate} - {booking.endDate}
                          </p>
                        </div>
                        <div>
                          <p>Sitter Details Placeholder</p>
                          <p>${booking.rate}</p>
                        </div>
                        <div>
                          <p>Pets Placeholder</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-col content-between gap-12">
                        <button
                          className="bg-bold-purple border border-bold-purple ease-in duration-300 hover:bg-pale-purple hover:border-pale-purple
                           text-white py-2 px-4 rounded-lg"
                        >
                          Message Sitter
                        </button>
                        <button className="text-red-600 self-end hover:text-red-800">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="font-rubikmono">No Bookings!</div>
            )}
          </div>

          <div className="bg-white-smoke drop-shadow-sm p-5 rounded-xl">
            <div>
              <h2>status test</h2>
              <p>startDate - endDate</p>
            </div>
            <div>
              <p>Sitter Details Placeholder</p>
              <p>Rate</p>
            </div>
            <div>
              <p>CTA Placeholder</p>
            </div>
            <div>
              <p>Pets Placeholder</p>
            </div>
          </div>

          <div className="bg-white-smoke drop-shadow-sm p-5 rounded-xl">
            <div>
              <h2>status</h2>
              <p>startDate - endDate</p>
            </div>
            <div>
              <p>Sitter Details Placeholder</p>
              <p>$rate</p>
            </div>
            <div>
              <p>CTA Placeholder</p>
            </div>
            <div>
              <p>Pets Placeholder</p>
            </div>
          </div>

          <div className="bg-white-smoke drop-shadow-sm p-5 rounded-xl">
            <div>
              <h2>status</h2>
              <p>startDate - endDate</p>
            </div>
            <div>
              <p>Sitter Details Placeholder</p>
              <p>$rate</p>
            </div>
            <div>
              <p>CTA Placeholder</p>
            </div>
            <div>
              <p>Pets Placeholder</p>
            </div>
          </div>
          <div className="bg-white-smoke drop-shadow-sm p-5 rounded-xl">
            <div>
              <h2>status</h2>
              <p>startDate - endDate</p>
            </div>
            <div>
              <p>Sitter Details Placeholder</p>
              <p>$rate</p>
            </div>
            <div>
              <p>CTA Placeholder</p>
            </div>
            <div>
              <p>Pets Placeholder</p>
            </div>
          </div>
          <div className="bg-white-smoke drop-shadow-sm p-5 rounded-xl">
            <div>
              <h2>status</h2>
              <p>startDate - endDate</p>
            </div>
            <div>
              <p>Sitter Details Placeholder</p>
              <p>$rate</p>
            </div>
            <div>
              <p>CTA Placeholder</p>
            </div>
            <div>
              <p>Pets Placeholder</p>
            </div>
          </div>
          <div className="bg-white-smoke drop-shadow-sm p-5 rounded-xl">
            <div>
              <h2>status</h2>
              <p>startDate - endDate</p>
            </div>
            <div>
              <p>Sitter Details Placeholder</p>
              <p>$rate</p>
            </div>
            <div>
              <p>CTA Placeholder</p>
            </div>
            <div>
              <p>Pets Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserBookings;
