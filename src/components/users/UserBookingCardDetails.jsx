import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { selectAuth } from '../../slices/authSlice';
import { format } from 'date-fns';
import {
  selectBookings,
  fetchSingleBooking,
  addPetsToBooking,
  updateBooking,
  resetBookingStatus,
} from '../../slices/bookingsSlice';

const UserBookingCardDetails = (props) => {
  const { user } = props;

  const [saveSuccess, setSaveSuccess] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  const bookingId = +params.bookingId;

  const { token } = useSelector(selectAuth);
  const { singleBooking } = useSelector(selectBookings);

  const [bookingForm, setBookingForm] = useState({});

  useEffect(() => {
    if (user && user.id) {
      const id = user.id;
      dispatch(fetchSingleBooking({ id, token, bookingId }));
    }
  }, [user]);

  useEffect(() => {
    setBookingForm({
      status: singleBooking.status,
      startDate: singleBooking.startDate,
      endDate: singleBooking.endDate,
      location: singleBooking.location,
      totalDays: singleBooking.totalDays,
    });
  }, [singleBooking]);

  const goBack = () => {
    navigate(-1);
  };

  const labelClass = 'text-xs font-rubikmono';

  const validClass =
    'appearance-none block w-full bg-white-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3 font-rubik';

  const validLinkClass =
    'cursor-pointer appearance-none block w-full bg-white-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3 font-rubik';

  const submitBookingUpdate = () => {};

  return (
    <div className="font-rubik flex flex-col gap-5">
      <button
        className="text-left text-xs font-semibold hover:text-bold-purple ease-in-out duration-100"
        onClick={goBack}
      >
        BACK
      </button>
      <div>
        <h2 className="font-rubikmono pb-3">Booking Details</h2>
        <div>
          <p className="text-xs font-semibold">
            BOOKING ID: {singleBooking.id}
          </p>
          <p
            className={
              saveSuccess
                ? 'text-center font-rubik font-semibold text-bold-blue text-xs'
                : 'font-rubik text-xs collapse'
            }
          >
            SAVE SUCCESSFUL!
          </p>
        </div>
        <div className="flex flex-col gap-5 overflow-auto h-[calc(100vh_-_20rem)]">
          <div>
            <div>
              {singleBooking && singleBooking.id ? (
                <section>
                  <form onSubmit={submitBookingUpdate}>
                    <div className="flex flex-wrap mb-5">
                      <div className="w-1/3 flex flex-col pr-6">
                        <label className={labelClass}>Status</label>
                        <select
                          className={validClass}
                          value={bookingForm.status}
                          disabled={
                            ['pending', 'approved'].includes(
                              singleBooking.status
                            )
                              ? false
                              : true
                          }
                          onChange={(evt) => {
                            setSaveSuccess(false);
                            setBookingForm({
                              ...bookingForm,
                              status: evt.target.value,
                            });
                          }}
                        >
                          <option
                            value="pending"
                            disabled={
                              singleBooking.status === 'approved' ? true : false
                            }
                          >
                            pending
                          </option>
                          <option disabled>approved</option>
                          <option
                            value="withdrawn"
                            disabled={
                              singleBooking.status === 'pending' ? false : true
                            }
                          >
                            withdraw
                          </option>
                          <option
                            value="cancelled"
                            disabled={
                              singleBooking.status === 'approved' ? false : true
                            }
                          >
                            cancel
                          </option>
                          <option disabled>declined</option>
                        </select>
                      </div>
                      <div className="w-1/3 flex flex-col pr-6">
                        <label className={labelClass}>Start</label>
                        <input
                          className={validClass}
                          type="date"
                          value={bookingForm.startDate}
                          onChange={(evt) => {
                            const days =
                              (new Date(bookingForm.endDate) -
                                new Date(evt.target.value)) /
                              (1000 * 3600 * 24);
                            setBookingForm({
                              ...bookingForm,
                              startDate: evt.target.value,
                              totalDays: days,
                            });
                          }}
                        />
                      </div>
                      <div className="w-1/3 flex flex-col">
                        <label className={labelClass}>End</label>
                        <input
                          className={validClass}
                          type="date"
                          value={bookingForm.endDate}
                          onChange={(evt) => {
                            const days =
                              (new Date(evt.target.value) -
                                new Date(bookingForm.startDate)) /
                              (1000 * 3600 * 24);

                            setBookingForm({
                              ...bookingForm,
                              endDate: evt.target.value,
                              totalDays: days,
                            });
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap mb-3">
                      <div className="w-1/4 flex flex-col pr-6">
                        <label className={labelClass}>Location</label>
                        <select
                          className={validClass}
                          value={bookingForm.location}
                          onChange={(evt) => {
                            setBookingForm({
                              ...bookingForm,
                              location: evt.target.value,
                            });
                          }}
                        >
                          <option>owner</option>
                          <option>sitter</option>
                        </select>
                      </div>
                      <div className="w-1/4 flex flex-col pr-6">
                        <label className={labelClass}>Total Days</label>
                        <input
                          className={validClass}
                          value={bookingForm.totalDays}
                          disabled={true}
                        />
                      </div>
                      <div className="w-1/4 flex flex-col pr-6">
                        <label className={labelClass}>Rate</label>
                        <input
                          className={validClass}
                          type="number"
                          min={0}
                          max={100}
                          step={1}
                          value={singleBooking.rate}
                          disabled
                        />
                      </div>
                      <div className="w-1/4 flex flex-col">
                        <label className={labelClass}>Total Amount</label>
                        <input
                          className={validClass}
                          value={singleBooking.totalAmount}
                          disabled={true}
                        />
                      </div>
                    </div>
                    {['pending', 'approved'].includes(singleBooking.status) ? (
                      <button
                        type="submit"
                        className="text-sm font-semibold ease-in-out duration-100 hover:text-bold-orange pb-2"
                      >
                        SAVE CHANGES
                      </button>
                    ) : null}
                  </form>
                </section>
              ) : (
                'loading'
              )}
            </div>
          </div>
          <div>
            <h2 className="font-rubikmono pb-3">Client & Pets</h2>
            {singleBooking && singleBooking.user ? (
              <section>
                <form>
                  <div className="flex flex-wrap mb-5">
                    <div className="w-full mb-5">
                      <label className={labelClass}>Client</label>
                      <Link to={`/profile/${singleBooking.user.id}`}>
                        <input
                          className={validLinkClass}
                          defaultValue={singleBooking.user.fullName}
                          disabled
                        />
                      </Link>
                    </div>
                    <label className={labelClass}>Pets</label>
                    {singleBooking.pets.map((pet) => (
                      <div className="w-full" key={pet.id}>
                        <Link
                          to={`/profile/${singleBooking.user.id}/pets/${pet.id}`}
                        >
                          <input
                            key={pet.id}
                            defaultValue={pet.name}
                            className={validLinkClass}
                            disabled
                          />
                        </Link>
                      </div>
                    ))}
                  </div>
                </form>
              </section>
            ) : null}
          </div>
          <div>
            <h2 className="font-rubikmono pb-3">Client Personal Info</h2>
            {/* {clientAccess && clientAccess.id ? (
              <section>
                <form>
                  <div className="flex flex-wrap mb-5">
                    <div className="w-full flex flex-col">
                      <label className={labelClass}>Phone</label>
                      <input
                        className={validClass}
                        id="phone"
                        name="phone"
                        type="text"
                        defaultValue={clientAccess.phone}
                        disabled
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap mb-5">
                    <div className="w-1/2 pr-6">
                      <label className={labelClass}>Address Line 1</label>
                      <input
                        className={validClass}
                        id="address1"
                        name="address1"
                        type="text"
                        defaultValue={clientAccess.address1}
                        disabled
                      />
                    </div>
                    <div className="w-1/2">
                      <label className={labelClass}>Address Line 2</label>
                      <input
                        className={validClass}
                        id="address2"
                        name="address2"
                        type="text"
                        defaultValue={clientAccess.address2}
                        disabled
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap mb-5">
                    <div className="w-1/3 pr-6">
                      <label className={labelClass}>City</label>
                      <input
                        className={validClass}
                        id="city"
                        name="city"
                        defaultValue={clientAccess.city}
                        disabled
                      />
                    </div>

                    <div className="w-1/3 pr-6">
                      <label className={labelClass}>State</label>
                      <input
                        className={validClass}
                        id="state"
                        name="state"
                        defaultValue={clientAccess.state}
                        disabled
                      />
                    </div>

                    <div className="w-1/3">
                      <label className={labelClass}>Zip Code</label>
                      <input
                        className={validClass}
                        type="text"
                        id="zip"
                        name="zip"
                        defaultValue={clientAccess.zip}
                        disabled
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap mb-5">
                    <div className="w-1/2 text-left pr-6">
                      <label className={labelClass}>
                        Emergency Contact Name
                      </label>
                      <input
                        className={validClass}
                        id="emergencyContactName"
                        name="emergencyContactName"
                        type="text"
                        defaultValue={clientAccess.emergencyContactName}
                        disabled
                      />
                    </div>
                    <div className="w-1/2 text-left">
                      <label className={labelClass}>
                        Emergency Contact Phone
                      </label>
                      <input
                        className={validClass}
                        id="emergencyContactPhone"
                        name="emergencyContactPhone"
                        type="tel"
                        defaultValue={clientAccess.emergencyContactPhone}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-5">
                    <div className="w-full text-left">
                      <label className={labelClass}>Additional Notes</label>
                      <textarea
                        className={validClass}
                        id="additionalNotes"
                        name="additionalNotes"
                        type="text"
                        rows={6}
                        defaultValue={clientAccess.additionalNotes}
                        disabled
                      />
                    </div>
                  </div>
                </form>
              </section>
            ) : (
              'this information is not available, please contact owner!'
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBookingCardDetails;
