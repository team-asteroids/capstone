import React, { useState, useEffect } from 'react';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { format, setMonth, getMonth, toDate } from 'date-fns';

const SitterCalendar = () => {
  const today = new Date();
  const maxDay = setMonth(today, getMonth(today) + 3);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
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
    checkForBlackoutDays();
  }, [endDate]);

  const validClass =
    'appearance-none block w-full bg-white-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3 font-rubik';

  const invalidClass =
    'appearance-none block border border-red-500 w-full bg-white-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3 font-rubik';

  return (
    <div className="flex flex-row flex-wrap justify-items-start">
      <div className="m-0">
        <DateCalendar
          disablePast
          shouldDisableDate={checkDate}
          minDate={!setter ? startDate : ''}
          maxDate={maxDay}
          style={{ margin: 0 }}
          onChange={(evt) => setDates(evt)}
        />
      </div>
      <div className="flex flex-col pl-5">
        <section>
          <form>
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
                  ? 'text-red-600 font-medium text-sm text-center'
                  : 'collapse'
              }
            >
              <p>Oops! Dates selected include sitter blackout days</p>
              <p>Try again!</p>
            </div>
            <div className="w-full flex flex-col">
              <label>Total Days</label>
              <input
                id="days"
                name="days"
                type="number"
                disabled
                defaultValue={endDate ? format(endDate, 'E M/d/yy') : ''}
                className={includesBlackoutDays ? invalidClass : validClass}
              ></input>
            </div>
          </form>
        </section>
      </div>
      {/* <DatePicker
        disablePast
        shouldDisableDate={checkDate}
        maxDate={maxDay}
        onChange={(evt) => {
          setStartDate(evt);
        }}
      />

      <DatePicker
        disablePast
        shouldDisableDate={checkDate}
        minDate={startDate}
        maxDate={maxDay}
        onChange={(evt) => {
          setEndDate(evt);
        }}
      /> */}
    </div>
  );
};

export default SitterCalendar;
