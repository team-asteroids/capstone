import React from 'react';

const SitterOverview = () => {
  return (
    <div className="font-rubik flex flex-col gap-5">
      <div>
        <h2 className="font-rubikmono">Sitter Profile Overview</h2>
      </div>
      <div className="h-[calc(100vh_-_20rem)] overflow-auto flex flex-col gap-5">
        <div>Sitters Details</div>
        <div>Upcoming Bookings</div>
        <div>Pet Prefs</div>
        <div>Ratings / Reviews</div>
      </div>
    </div>
  );
};

export default SitterOverview;
