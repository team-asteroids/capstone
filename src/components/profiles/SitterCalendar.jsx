import React, { useState } from 'react';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { format, setMonth, getMonth } from 'date-fns';

const SitterCalendar = () => {
  const today = new Date();
  const maxDay = setMonth(today, getMonth(today) + 3);
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState('');

  const blackoutDays = ['4-4-23', '4-5-23'];

  const checkDate = (date) => {
    const day = format(date, 'M-d-yy');
    return blackoutDays.includes(day);
  };

  return (
    <div className="flex flex-col justify-items-start">
      <div className="flex flex-row gap-10">
        <input value={startDate}></input>
        <input value={endDate}></input>
      </div>
      <div>
        <DateCalendar
          disablePast
          shouldDisableDate={checkDate}
          maxDate={maxDay}
          className=""
        />
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
