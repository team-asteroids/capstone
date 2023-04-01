import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { selectAuth } from '../../../slices/authSlice';
import {
  selectSitters,
  fetchSingleSitterBooking,
  resetSitterStatus,
  editSitterBooking,
  resetSingleBooking,
  fetchSingleClient,
  fetchClientAccessData,
  resetClientAccess,
} from '../../../slices/sittersSlice';

const BookingDetailsCard = (props) => {
  const { sitter } = props;
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [accessConsent, setAccessConsent] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  const bookingId = +params.bookingId;

  const { token } = useSelector(selectAuth);

  const { sitterBooking, client, clientAccess, accessStatus } =
    useSelector(selectSitters);

  const [bookingForm, setBookingForm] = useState({
    status: sitterBooking.status,
    rate: sitterBooking.rate,
    totalAmount: sitterBooking.totalAmount,
  });

  useEffect(() => {
    // setSaveSuccess(false);
    dispatch(resetSingleBooking());
    dispatch(resetClientAccess());

    if (sitter && sitter.id) {
      const id = +sitter.id;
      dispatch(fetchSingleSitterBooking({ id, bookingId, token }));
    }

    return () => {
      dispatch(resetSitterStatus());
    };
  }, [sitter, bookingId]);

  useEffect(() => {
    setBookingForm({
      status: sitterBooking.status,
      rate: sitterBooking.rate,
      totalAmount: sitterBooking.totalAmount,
    });

    if (sitterBooking && sitterBooking.user && token) {
      const id = +sitter.id;
      const userId = +sitterBooking.user.id;

      dispatch(fetchSingleClient({ id, token, userId }));
    }

    return () => {
      // dispatch(resetSingleBooking());
      dispatch(resetClientAccess());
    };
  }, [bookingId, sitterBooking, sitterBooking.id]);

  useEffect(() => {
    if (token && client && client.id && sitter && sitter.id) {
      const id = +sitter.id;
      const userId = client.id;
      dispatch(fetchClientAccessData({ id, token, userId }));
    }
  }, [client]);

  const goBack = () => {
    dispatch(resetSingleBooking());
    dispatch(resetClientAccess());
    navigate(-1);
  };

  const submitSitterBookingUpdate = async (evt) => {
    evt.preventDefault();
    const id = sitter.id;

    if (sitterBooking && sitterBooking.id) {
      const res = await dispatch(
        editSitterBooking({ id, bookingId, token, bookingForm })
      );
      if (res.type === 'editSitterBooking/fulfilled') {
        setSaveSuccess(true);
      } else setSaveSuccess(false);
    }
  };

  const labelClass = 'text-xs font-rubikmono';

  const validClass =
    'appearance-none block w-full bg-white-200 border border-gray-600 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3 font-rubik';

  const disabledClass =
    'appearance-none block border-slate-400 w-full bg-slate-200/30 border rounded py-3 px-4 leading-tight mt-3 font-rubik';

  const validLinkClass =
    'cursor-pointer appearance-none block w-full bg-white-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3 font-rubik';

  return (
    <div className="font-rubik flex flex-col gap-5">
      <button
        className="text-left text-xs max-w-fit font-semibold hover:text-bold-purple ease-in-out duration-100"
        onClick={goBack}
      >
        BACK
      </button>
      <div>
        <h2 className="font-rubikmono pb-3">Booking Details</h2>
        <div>
          <p className="text-xs font-semibold">
            BOOKING ID: {sitterBooking.id}
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
              {sitterBooking && sitterBooking.id ? (
                <section>
                  <form onSubmit={submitSitterBookingUpdate}>
                    <div className="flex flex-wrap mb-5">
                      <div className="w-1/3 flex flex-col pr-6">
                        <label className={labelClass}>Status</label>
                        <select
                          className={
                            ['pending', 'approved'].includes(
                              sitterBooking.status
                            )
                              ? validClass
                              : disabledClass
                          }
                          value={bookingForm.status}
                          disabled={
                            ['pending', 'approved'].includes(
                              sitterBooking.status
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
                          <option value="pending">pending</option>
                          <option value="approved">approve</option>
                          <option
                            value="complete"
                            disabled={
                              sitterBooking.status === 'pending' ? true : false
                            }
                          >
                            complete
                          </option>
                          <option
                            value="cancelled"
                            disabled={
                              sitterBooking.status === 'pending' ? true : false
                            }
                          >
                            cancel
                          </option>
                          <option
                            disabled={
                              sitterBooking.status === 'pending' ? false : true
                            }
                            value="declined"
                          >
                            decline
                          </option>
                        </select>
                      </div>
                      <div className="w-1/3 flex flex-col pr-6">
                        <label className={labelClass}>Start</label>
                        <input
                          className={disabledClass}
                          value={sitterBooking.startDate}
                          disabled={true}
                        />
                      </div>
                      <div className="w-1/3 flex flex-col">
                        <label className={labelClass}>End</label>
                        <input
                          className={disabledClass}
                          value={sitterBooking.endDate}
                          disabled={true}
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap mb-3">
                      <div className="w-1/4 flex flex-col pr-6">
                        <label className={labelClass}>Location</label>
                        <input
                          className={disabledClass}
                          value={sitterBooking.location}
                          disabled={true}
                        />
                      </div>
                      <div className="w-1/4 flex flex-col pr-6">
                        <label className={labelClass}>Total Days</label>
                        <input
                          className={disabledClass}
                          value={sitterBooking.totalDays}
                          disabled={true}
                        />
                      </div>
                      <div className="w-1/4 flex flex-col pr-6">
                        <label className={labelClass}>Rate</label>
                        <input
                          className={
                            ['pending', 'approved'].includes(
                              sitterBooking.status
                            )
                              ? validClass
                              : disabledClass
                          }
                          type="number"
                          min={0}
                          max={100}
                          step={1}
                          value={bookingForm.rate}
                          disabled={
                            ['pending', 'approved'].includes(
                              sitterBooking.status
                            )
                              ? false
                              : true
                          }
                          onChange={(evt) => {
                            setSaveSuccess(false);
                            const newTotal =
                              evt.target.value * sitterBooking.totalDays;
                            setBookingForm({
                              ...bookingForm,
                              rate: evt.target.value,
                              totalAmount: newTotal,
                            });
                          }}
                        />
                      </div>
                      <div className="w-1/4 flex flex-col">
                        <label className={labelClass}>Total Amount</label>
                        <input
                          className={disabledClass}
                          value={bookingForm.totalAmount}
                          disabled={true}
                        />
                      </div>
                    </div>
                    {['pending', 'approved'].includes(sitterBooking.status) ? (
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
            {sitterBooking && sitterBooking.user ? (
              <section>
                <form>
                  <div className="flex flex-wrap mb-5">
                    <div className="w-full mb-5">
                      <label className={labelClass}>Client</label>
                      <Link to={`/profile/${sitterBooking.user.id}`}>
                        <input
                          className={validLinkClass}
                          type="text"
                          defaultValue={sitterBooking.user.fullName}
                          disabled
                        />
                      </Link>
                    </div>
                    <div className="w-full">
                      <label className={labelClass}>Pets</label>
                      {sitterBooking.pets.map((pet) => (
                        <div className="w-full" key={pet.id}>
                          <Link
                            to={`/profile/${sitterBooking.user.id}/pets/${pet.id}`}
                          >
                            <input
                              key={pet.id}
                              type="text"
                              defaultValue={pet.name}
                              className={validLinkClass}
                              disabled
                            />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </form>
              </section>
            ) : null}
          </div>
          <div>
            <h2 className="font-rubikmono pb-3">Client Personal Info</h2>
            {clientAccess && clientAccess.id ? (
              <section>
                <form>
                  <div className="flex flex-wrap mb-5">
                    <div className="w-full flex flex-col">
                      <label className={labelClass}>Phone</label>
                      <input
                        className={disabledClass}
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
                        className={disabledClass}
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
                        className={disabledClass}
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
                        className={disabledClass}
                        id="city"
                        name="city"
                        type="text"
                        defaultValue={clientAccess.city}
                        disabled
                      />
                    </div>

                    <div className="w-1/3 pr-6">
                      <label className={labelClass}>State</label>
                      <input
                        className={disabledClass}
                        id="state"
                        type="text"
                        name="state"
                        defaultValue={clientAccess.state}
                        disabled
                      />
                    </div>

                    <div className="w-1/3">
                      <label className={labelClass}>Zip Code</label>
                      <input
                        className={disabledClass}
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
                        className={disabledClass}
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
                        className={disabledClass}
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
                        className={disabledClass}
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetailsCard;
