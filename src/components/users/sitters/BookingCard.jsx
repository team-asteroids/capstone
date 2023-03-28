import React from 'react';

const BookingCard = (props) => {
  const { booking } = props;
  return (
    <div>
      <section>
        <form>
          <div>
            <label>{booking.status}</label>
            <input></input>
          </div>
        </form>
      </section>
    </div>
  );
};

export default BookingCard;
