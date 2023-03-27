import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../../../slices/authSlice';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { format, setMonth, getMonth } from 'date-fns';
import {
  createNewBooking,
  resetBookingStatus,
  selectBookings,
} from '../../../slices/bookingsSlice';
import { useNavigate } from 'react-router-dom';

const SitterCalendar = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { rate, sitterId } = props;
  const { userAuth, token } = useSelector(selectAuth);
  const { newBooking, status } = useSelector(selectBookings);
  const id = userAuth.id;

  const today = new Date();
  const maxDay = setMonth(today, getMonth(today) + 6);

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [totalDays, setTotalDays] = useState(0);
  const [bookingTotal, setBookingTotal] = useState(0);
  const [bookingLocation, setBookingLocation] = useState('owner');
  const [setter, setSetter] = useState(true);

  const [includesBlackoutDays, setIncludesBlackoutDays] = useState(false);

  const blackoutDays = ['4-4-23', '4-5-23'];

  const checkDate = (date) => {
    const day = format(date, 'M-d-yy');
    return blackoutDays.includes(day);
  };

  const checkForBlackoutDays = () => {
    blackoutDays.map((day) =>
      new Date(day) >= startDate && new Date(day) <= endDate
        ? setIncludesBlackoutDays(true)
        : ''
    );
  };

  const countDays = () => {
    const days = (new Date(endDate) - new Date(startDate)) / (1000 * 3600 * 24);
    return days;
  };

  const setDates = (evt) => {
    if (!startDate || setter) {
      setStartDate(evt);
      setSetter(!setter);
      setIncludesBlackoutDays(false);
    } else {
      setEndDate(evt);
      setSetter(!setter);
    }
  };

  useEffect(() => {
    if (endDate) {
      checkForBlackoutDays();
      setTotalDays(countDays());
      setBookingTotal(totalDays * rate);
    }
  }, [endDate, totalDays]);

  const validClass =
    'appearance-none block w-full bg-white-200 border rounded py-3 px-6 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-1 font-rubik';

  const invalidClass =
    'appearance-none block border border-red-500 w-full bg-white-200 border rounded py-3 px-6 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-1 font-rubik';

  const validButtonClass =
    'ease-in duration-300 hover:bg-pale-blue font-bold text-white bg-bold-blue px-5 py-2.5 rounded-lg hover:transition-all mt-3';

  const disabledButtonClass =
    'bg-bold-blue px-4 py-2 rounded-lg text-white disabled:opacity-25 duration-300 mt-3';

  const submitBookingRequest = async (evt) => {
    evt.preventDefault();

    const bookingDetails = {
      status: 'pending',
      startDate: format(startDate, 'yyyy-MM-dd'),
      endDate: format(endDate, 'yyyy-MM-dd'),
      rate,
      location: bookingLocation,
      sitterId,
      userId: id,
      totalDays,
      totalAmount: bookingTotal,
    };

    if (token && userAuth.id) {
      dispatch(createNewBooking({ id, bookingDetails, token }));
    }
  };

  useEffect(() => {
    if (newBooking && status === 'success') {
      const bookingId = newBooking.id;
      navigate(`/bookings/${bookingId}/confirmation`);
    }
    return () => {
      dispatch(resetBookingStatus());
    };
  }, [status]);

  return (
    <div className="flex flex-row flex-wrap justify-items-start">
      <div className="mr-5">
        <DateCalendar
          disablePast
          shouldDisableDate={checkDate}
          minDate={!setter ? startDate : ''}
          maxDate={maxDay}
          disableHighlightToday={true}
          style={{ margin: 0 }}
          onChange={(evt) => setDates(evt)}
        />
      </div>
      <div className="flex flex-col pl-5">
        <section>
          <form onSubmit={submitBookingRequest} className="w-full">
            <div className="flex flex-row gap-5">
              <div className="w-full flex flex-col md:w-1/2">
                <label>Start</label>
                <input
                  id="start"
                  name="start"
                  type="text"
                  disabled
                  defaultValue={startDate ? format(startDate, 'E M/d/yy') : ''}
                  className={includesBlackoutDays ? invalidClass : validClass}
                ></input>
              </div>

              <div className="w-full flex flex-col md:w-1/2">
                <label>End</label>
                <input
                  id="end"
                  name="end"
                  type="text"
                  disabled
                  defaultValue={endDate ? format(endDate, 'E M/d/yy') : ''}
                  className={includesBlackoutDays ? invalidClass : validClass}
                ></input>
              </div>
            </div>
            <div
              className={
                includesBlackoutDays
                  ? 'text-red-600 font-medium my-2 text-sm text-center'
                  : 'collapse'
              }
            >
              <p>Oops! Dates selected include sitter blackout days</p>
            </div>

            <div className="w-full flex flex-row mb-5 gap-5">
              <div className="w-full flex flex-col md:w-1/2">
                <label>Total Days</label>
                <input
                  id="days"
                  name="days"
                  type="number"
                  disabled
                  defaultValue={totalDays ? totalDays : ''}
                  className={validClass}
                ></input>
              </div>
              <div className="w-full flex flex-col md:w-1/2">
                <label>Total</label>
                <div className="flex">
                  <input
                    id="total"
                    name="total"
                    type="number"
                    defaultValue={bookingTotal ? bookingTotal : ''}
                    className={validClass}
                    disabled
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex flex-row mb-5 gap-5">
              <div className="w-full flex flex-col">
                <label>Location</label>
                <select
                  id="location"
                  name="location"
                  type="text"
                  value={bookingLocation}
                  className={validClass}
                  onChange={(evt) => setBookingLocation(evt.target.value)}
                >
                  <option value="owner">Owner Home</option>
                  <option value="sitter">Sitter Home</option>
                </select>
              </div>
            </div>
            <div className="text-center">
              <button
                className={
                  userAuth && userAuth.id
                    ? validButtonClass
                    : disabledButtonClass
                }
                disabled={userAuth && userAuth.id ? false : true}
              >
                SUBMIT
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default SitterCalendar;
