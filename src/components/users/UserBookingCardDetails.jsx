import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { selectAuth, updateClientSitterStatus } from '../../slices/authSlice';
// import { format } from 'date-fns';
import {
  selectBookings,
  fetchSingleBooking,
  addPetsToBooking,
  updateBooking,
  resetBookingStatus,
  resetSingleBooking,
} from '../../slices/bookingsSlice';
import {
  resetSitterStatus,
  resetSingleSitter,
} from '../../slices/sittersSlice';

const UserBookingCardDetails = (props) => {
  const { user } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const { singleBooking } = useSelector(selectBookings);

  const bookingId = +params.bookingId;
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [saveAccessSuccess, setSaveAccessSuccess] = useState(false);
  console.log('singleBooking', singleBooking);
  const { token, accessPermissions } = useSelector(selectAuth);

  const [clientSitterStatus, setClientSitterStatus] = useState(
    singleBooking.clientStatus
  );
  console.log(singleBooking.clientStatus);
  const [bookingForm, setBookingForm] = useState({});

  useEffect(() => {
    if (user && user.id) {
      const id = user.id;
      dispatch(fetchSingleBooking({ id, token, bookingId }));
    }
    return () => {
      dispatch(resetBookingStatus());
      dispatch(resetSitterStatus());
    };
  }, [user, bookingId]);

  useEffect(() => {
    setBookingForm({
      status: singleBooking.status,
      startDate: singleBooking.startDate,
      endDate: singleBooking.endDate,
      location: singleBooking.location,
      totalDays: singleBooking.totalDays,
    });

    setClientSitterStatus(singleBooking.clientStatus);

    return () => {
      dispatch(resetBookingStatus());
      dispatch(resetSitterStatus());
      // dispatch(resetSingleSitter());
    };
  }, [singleBooking]);

  const goBack = () => {
    dispatch(resetBookingStatus());
    dispatch(resetSitterStatus());
    dispatch(resetSingleSitter());
    dispatch(resetSingleBooking());

    navigate(-1);
  };

  const labelClass = 'text-xs font-rubikmono';

  const validClass =
    'appearance-none block w-full bg-white-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3 font-rubik';

  const validLinkClass =
    'cursor-pointer appearance-none block w-full bg-white-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3 font-rubik';

  const toggleClass =
    "checked w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pale-blue  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all  peer-checked:bg-bold-pink";

  const submitBookingUpdate = () => {};

  const updatePermissions = async (accessStatus) => {
    const id = user.id;
    const sitterId = singleBooking.sitterId;
    const token = window.localStorage.getItem('token');

    const res = await dispatch(
      updateClientSitterStatus({ id, sitterId, token, accessStatus })
    );

    if (res.type === 'updatePermissions/fulfilled') {
      setSaveAccessSuccess(true);
    } else setSaveAccessSuccess(false);
  };

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
                            ['cancelled', 'withdrawn', 'declined'].includes(
                              singleBooking.status
                            )
                              ? true
                              : false
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
            <h2 className="font-rubikmono pb-3">Sitter & Pets</h2>
            {singleBooking && singleBooking.sitterId ? (
              <section>
                <form>
                  <div className="flex flex-wrap mb-5">
                    <div className="w-full mb-5">
                      <label className={labelClass}>Sitter</label>
                      <Link
                        to={`/profile/${singleBooking.sitterInfo.id}/sitter/${singleBooking.sitter.id}`}
                      >
                        <input
                          className={validLinkClass}
                          defaultValue={singleBooking.sitterInfo.fullName}
                          disabled
                        />
                      </Link>
                    </div>
                    <div className="w-full">
                      <label className={labelClass}>Pets</label>
                      {singleBooking.pets.length ? (
                        singleBooking.pets.map((pet) => (
                          <div className="w-full" key={pet.id}>
                            <Link to={`/account/pets/${pet.id}`}>
                              <input
                                key={pet.id}
                                defaultValue={pet.name}
                                className={validLinkClass}
                                disabled
                              />
                            </Link>
                          </div>
                        ))
                      ) : (
                        <div>
                          <p>no pets!</p>
                        </div>
                      )}
                    </div>
                  </div>
                </form>
              </section>
            ) : null}
          </div>
          <div>
            <h2 className="font-rubikmono pb-3">Send Sitter Personal Info</h2>
            <p className="mb-2">
              To review / edit your personal info, please see{' '}
              <Link
                className="hover:text-bold-purple ease-in-out duration-200"
                to="/account/editprofile"
              >
                Edit Profile
              </Link>
            </p>
            <div className="pl-2">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={clientSitterStatus ? true : false}
                  onChange={() => {
                    // console.log('before:', clientSitterStatus);
                    setClientSitterStatus(!clientSitterStatus);
                    // console.log('after:', clientSitterStatus);
                    updatePermissions(!clientSitterStatus);
                    setSaveAccessSuccess(false);
                  }}
                />
                <div className={toggleClass}></div>
                {clientSitterStatus ? (
                  <span className="ml-3 text-sm font-medium text-bold-pink">
                    Active
                  </span>
                ) : (
                  <span className="ml-3 text-sm font-medium text-gray-900">
                    Inactive
                  </span>
                )}
              </label>
            </div>
            <p
              className={
                saveAccessSuccess
                  ? 'text-center font-rubik font-semibold text-bold-blue text-xs'
                  : 'font-rubik text-xs collapse'
              }
            >
              SAVE SUCCESSFUL!
              {clientSitterStatus ? (
                <p className="pt-1">
                  sitter <span className="text-semibold">CAN</span> see your
                  personal info
                </p>
              ) : (
                <p className="pt-1">
                  sitter <span className="text-red-600">CANNOT</span> see your
                  personal info
                </p>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBookingCardDetails;
