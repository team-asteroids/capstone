import React, { useState, useEffect } from 'react';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { format, setMonth, getMonth, toDate } from 'date-fns';

const SitterCalendar = (props) => {
  const { rate } = props;
  const today = new Date();
  const maxDay = setMonth(today, getMonth(today) + 6);

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [totalDays, setTotalDays] = useState(0);
  const [bookingTotal, setBookingTotal] = useState(0);
  const [bookingLocation, setBookingLocation] = useState('');
  const [bookingPets, setBookingPets] = useState([]);
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
    console.log(rate);
    if (endDate) {
      checkForBlackoutDays();
      setTotalDays(countDays());
      setBookingTotal(totalDays * rate);
    }
  }, [endDate, totalDays]);

  const validClass =
    'appearance-none block w-full bg-white-200 border rounded py-3 px-6 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-2 font-rubik';

  const invalidClass =
    'appearance-none block border border-red-500 w-full bg-white-200 border rounded py-3 px-6 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-2 font-rubik';

  const submitBookingRequest = async (evt) => {
    evt.preventDefault();
  };

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

            <div className="w-full flex flex-row mb-5 gap-5">
              <div className="w-full flex flex-col md:w-1/2">
                <label>Pets</label>
                <select
                  id="pets"
                  name="pets"
                  type="text"
                  value={bookingPets}
                  className={validClass}
                  onChange={(evt) => {
                    console.log(evt.value.target);
                  }}
                >
                  <option value="pet1">pet 1</option>
                  <option value="pet2">pet 2</option>
                </select>
              </div>
              <div className="w-full flex flex-col md:w-1/2">
                <label>Location</label>
                <select
                  id="location"
                  name="location"
                  type="text"
                  value={bookingLocation}
                  className={validClass}
                  onChange={(evt) => setBookingLocation(evt.target.value)}
                >
                  <option>Owner Home</option>
                  <option>Sitter Home</option>
                </select>
              </div>
            </div>
            <div className="text-center">
              <button
                className="ease-in font-bold text-white duration-300 hover:text-bold-pink hover:transition-all mt-3"
                type="submit"
              >
                SUBMIT REQUEST
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default SitterCalendar;
