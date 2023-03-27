import React from 'react';

function SitterBookings() {
  return (
    <div className="font-rubik flex flex-col gap-5">
      <div>
        <h2 className="font-rubikmono">Manage Sitter Bookings</h2>
      </div>
      <div className="h-[calc(100vh_-_20rem)] overflow-auto flex flex-col gap-5">
        <div>Pending Bookings</div>
        <div>Upcoming Bookings</div>
        <div>Past Bookings</div>
      </div>
    </div>
  );
}

export default SitterBookings;
