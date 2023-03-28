import React from 'react';

const labelClass = 'text-xs font-rubikmono';

const validClass =
  'appearance-none block w-full bg-white-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3 font-rubik';

const invalidClass =
  'appearance-none block w-full border border-red-500 bg-white-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3 font-rubik';

const BookingCard = (props) => {
  const { booking } = props;
  const bookingId = booking.id;

  return (
    <div>
      <p className="font-rubikmono pb-2">{booking.id}</p>
      <section>
        <form>
          <div className="flex flex-wrap mb-3">
            <div className="w-1/3 flex flex-col pr-6">
              <label className={labelClass}>Status</label>
              <input className={validClass} value={booking.status}></input>
            </div>
            <div className="w-1/3 flex flex-col pr-6">
              <label className={labelClass}>Days</label>
              <input className={validClass} value={booking.totalDays}></input>
            </div>
            <div className="w-1/3 flex flex-col pr-6">
              <label className={labelClass}>Total</label>
              <input className={validClass} value={booking.totalAmount}></input>
            </div>
          </div>
          <div className="flex flex-wrap mb-3">
            <div className="w-1/3 flex flex-col pr-6">
              <label className={labelClass}>Start</label>
              <input className={validClass} value={booking.startDate}></input>
            </div>
            <div className="w-1/3 flex flex-col pr-6">
              <label className={labelClass}>End</label>
              <input className={validClass} value={booking.endDate}></input>
            </div>
            <div className="w-1/3 flex flex-col pr-6">
              <label className={labelClass}>Location</label>
              <input className={validClass} value={booking.location}></input>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default BookingCard;
