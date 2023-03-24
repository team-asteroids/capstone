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
  const [userBookings, setUserBookings] = useState([]);
  const { status, allBookings } = useSelector(selectBookings);

  useEffect(() => {
    dispatch(attemptTokenLogin());
  }, [dispatch]);

  useEffect(() => {
    if (userAuth.id) {
      const id = userAuth.id;
      dispatch(fetchAllBookings({ id, token }));
    }

    setUserBookings(allBookings);

    return () => {
      dispatch(resetBookingStatus());
    };
  }, [userAuth]);

  if (!userAuth && !userAuth.firstName)
    return <div className="font-rubikmono">Fetching good things...</div>;

  // map through bookings and add a filter for (pending, approved, completed, declined/cancelled/withdrawn)

  return (
    <div className="flex flex-col gap-5 font-rubik">
      <div id="filter" className="flex flex-row justify-between">
        <h2 className="font-rubikmono">Manage Bookings</h2>
        <div>
          <select
            id="filter"
            class="bg-white-smoke border border-white-smoke text-gray-900 text-sm rounded-lg focus:ring-pale-blue focus:border-pale-blue block p-1.5 px-3 drop-shadow-sm"
          >
            <option selected disabled>
              filter
            </option>
            <option value="all">all</option>
            <option value="approved">approved</option>
            <option value="pending">pending</option>
            <option value="completed">completed</option>
            <option value="cancelled">cancelled</option>
          </select>
        </div>
      </div>
      <div className="h-[calc(100vh_-_20rem)] overflow-auto flex flex-col gap-5">
        <div id="bookings" className="flex flex-col gap-5" h-48 w-full>
          <div className="flex flex-col gap-5">
            {status === 'success' && userBookings.length > 0
              ? userBookings.map((booking) => {
                  return (
                    <div
                      className="bg-white-smoke drop-shadow-sm p-5 rounded-xl"
                      key={booking.id}
                      h-48
                      w-full
                    >
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
                        <p>CTA Placeholder</p>
                      </div>
                      <div>
                        <p>Pets Placeholder</p>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>

          <div
            className="bg-white-smoke drop-shadow-sm p-5 rounded-xl"
            h-48
            w-full
          >
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

          <div
            className="bg-white-smoke drop-shadow-sm p-5 rounded-xl"
            h-48
            w-full
          >
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

          <div
            className="bg-white-smoke drop-shadow-sm p-5 rounded-xl"
            h-48
            w-full
          >
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
          <div
            className="bg-white-smoke drop-shadow-sm p-5 rounded-xl"
            h-48
            w-full
          >
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
          <div
            className="bg-white-smoke drop-shadow-sm p-5 rounded-xl"
            h-48
            w-full
          >
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
          <div
            className="bg-white-smoke drop-shadow-sm p-5 rounded-xl"
            h-48
            w-full
          >
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
