import { Divider } from '@mui/material';
import React from 'react';

const labelClass = 'text-xs font-rubikmono';

const validClass =
  'appearance-none block w-full bg-white-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3 font-rubik';

const invalidClass =
  'appearance-none block w-full border border-red-500 bg-white-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3 font-rubik';

const BookingCard = (props) => {
  const { booking } = props;
  const bookingId = booking.id;
  const bookingPets = booking.pets;
  const client = booking.user;

  return (
    <div className="pt-3 px-5">
      <div className="flex flex-row flex-wrap">
        <div className="w-1/5 flex flex-col justify-between pr-2">
          <div>
            <div>
              <p className="font-rubikmono text-sm pb-1">Booking Id:</p>
              <p>{bookingId}</p>
            </div>
            <div>
              <p className="font-rubikmono text-sm pb-1">Client:</p>
              <p>{client.fullName}</p>
            </div>
            <div>
              <p className="font-rubikmono text-sm pb-1">Pets:</p>

              {bookingPets && bookingPets.length
                ? bookingPets.map((pet) => (
                    <div key={pet.id}>
                      <p>{pet.name}</p>
                    </div>
                  ))
                : 'client did not add any pets!'}
            </div>
          </div>
          <div>
            {booking.status === 'approved' ? (
              <p className="text-sm pb-2.5">see details / update</p>
            ) : (
              <p className="text-sm pb-2.5">see details</p>
            )}
          </div>
        </div>
        <section className="w-4/5">
          <fieldset disabled>
            <form>
              <p className="font-rubikmono text-sm pb-2">Details:</p>
              <div className="flex flex-wrap mb-5">
                <div className="w-1/3 flex flex-col pr-6">
                  <label className={labelClass}>Status</label>
                  <input className={validClass} value={booking.status} />
                </div>
                <div className="w-1/3 flex flex-col pr-6">
                  <label className={labelClass}>Start</label>
                  <input className={validClass} value={booking.startDate} />
                </div>
                <div className="w-1/3 flex flex-col pr-6">
                  <label className={labelClass}>End</label>
                  <input className={validClass} value={booking.endDate} />
                </div>
              </div>
              <div className="flex flex-wrap mb-3">
                <div className="w-1/4 flex flex-col pr-6">
                  <label className={labelClass}>Location</label>
                  <input className={validClass} value={booking.location} />
                </div>
                <div className="w-1/4 flex flex-col pr-6">
                  <label className={labelClass}>Total Days</label>
                  <input className={validClass} value={booking.totalDays} />
                </div>
                <div className="w-1/4 flex flex-col pr-6">
                  <label className={labelClass}>Rate</label>
                  <input className={validClass} value={booking.rate} />
                </div>
                <div className="w-1/4 flex flex-col pr-6">
                  <label className={labelClass}>Total Amount</label>
                  <input className={validClass} value={booking.totalAmount} />
                </div>
              </div>
            </form>
          </fieldset>
        </section>
      </div>
    </div>
  );
};

export default BookingCard;
