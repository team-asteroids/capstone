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
} from '../../../slices/sittersSlice';

const BookingDetailsCard = (props) => {
  const { sitter } = props;
  const [saveSuccess, setSaveSuccess] = useState('false');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  const bookingId = +params.bookingId;

  const { token } = useSelector(selectAuth);
  const { sitterBooking, client } = useSelector(selectSitters);

  const [bookingForm, setBookingForm] = useState({
    status: sitterBooking.status,
    rate: sitterBooking.rate,
    totalAmount: sitterBooking.totalAmount,
  });

  useEffect(() => {
    setSaveSuccess(false);
    dispatch(resetSingleBooking());
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

    if (sitterBooking && sitterBooking.user) {
      const id = +sitter.id;
      const userId = +sitterBooking.user.id;
      dispatch(fetchSingleClient({ id, token, userId }));
    }

    return () => {
      resetSingleBooking();
    };
  }, [bookingId, sitterBooking]);

  const goBack = () => {
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
    'appearance-none block w-full bg-white-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3 font-rubik';

  const validLinkClass =
    'cursor-pointer appearance-none block w-full bg-white-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3 font-rubik';

  return (
    <div className="font-rubik flex flex-col gap-5">
      <button
        className="text-left text-xs font-semibold hover:text-bold-purple ease-in-out duration-100"
        onClick={goBack}
      >
        BACK
      </button>
      <div>
        <h2 className="font-rubikmono pb-3">Booking Details </h2>
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
        {sitterBooking && sitterBooking.id ? (
          <section>
            <form onSubmit={submitSitterBookingUpdate}>
              <div className="flex flex-wrap mb-5">
                <div className="w-1/3 flex flex-col pr-6">
                  <label className={labelClass}>Status</label>
                  <select
                    className={validClass}
                    value={bookingForm.status}
                    disabled={
                      ['pending', 'approved'].includes(sitterBooking.status)
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
                    <option>pending</option>
                    <option>approved</option>
                    <option>complete</option>
                    <option>cancelled</option>
                    <option
                      disabled={
                        sitterBooking.status === 'pending' ? false : true
                      }
                      value="declined"
                    >
                      declined
                    </option>
                  </select>
                </div>
                <div className="w-1/3 flex flex-col pr-6">
                  <label className={labelClass}>Start</label>
                  <input
                    className={validClass}
                    value={sitterBooking.startDate}
                    disabled={true}
                  />
                </div>
                <div className="w-1/3 flex flex-col">
                  <label className={labelClass}>End</label>
                  <input
                    className={validClass}
                    value={sitterBooking.endDate}
                    disabled={true}
                  />
                </div>
              </div>
              <div className="flex flex-wrap mb-3">
                <div className="w-1/4 flex flex-col pr-6">
                  <label className={labelClass}>Location</label>
                  <input
                    className={validClass}
                    value={sitterBooking.location}
                    disabled={true}
                  />
                </div>
                <div className="w-1/4 flex flex-col pr-6">
                  <label className={labelClass}>Total Days</label>
                  <input
                    className={validClass}
                    value={sitterBooking.totalDays}
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
                    value={bookingForm.rate}
                    disabled={
                      ['pending', 'approved'].includes(sitterBooking.status)
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
                    className={validClass}
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

      <h2 className="font-rubikmono">Client & Pets</h2>
      {/* {sitterBooking && sitterBooking.user ? (
        <EditPetDetails user={sitterBooking.user} />
      ) : null} */}
      {sitterBooking && sitterBooking.user ? (
        <section>
          <form>
            <div className="flex flex-wrap mb-5">
              <div className="w-full mb-5">
                <label className={labelClass}>Client</label>
                <Link to={`/profile/${sitterBooking.user.id}`}>
                  <input
                    className={validLinkClass}
                    defaultValue={sitterBooking.user.fullName}
                    disabled
                  />
                </Link>
              </div>
              <label className={labelClass}>Pets</label>
              {sitterBooking.pets.map((pet) => (
                <div className="w-full" key={pet.id}>
                  <Link to={`/profile/${sitterBooking.user.id}/pets/${pet.id}`}>
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

      <h2 className="font-rubikmono">Access Data</h2>
    </div>
  );
};

export default BookingDetailsCard;
