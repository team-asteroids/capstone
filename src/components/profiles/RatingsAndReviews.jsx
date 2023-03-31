import React from 'react';

const RatingsAndReviews = (props) => {
  const { user, sitter } = props;
  // console.log({ user: user, sitter: sitter });

  const submitRatingAndReview = () => {};

  return (
    <div className="font-rubik flex flex-col gap-5">
      <h2 className="font-rubikmono">Throw A Dog A Bone</h2>
      <section className="w-2/3">
        <form onSubmit={submitRatingAndReview}>
          <div className="flex flex-wrap mb-5">
            <div className="w-full flex flex-col pr-6">
              <label>Select Sitting</label>
              <select>
                <option>sitting1</option>
                <option>sitting2</option>
              </select>
            </div>
          </div>
          <div className="flex flex-wrap mb-5">
            <div className="w-full flex flex-col pr-6">
              <label>Rate</label>
              <input type="number" step={0.5} min={0} max={5} />
            </div>
          </div>
          <div className="flex flex-wrap mb-5">
            <div className="w-full flex flex-col pr-6">
              <label>Review</label>
              <textarea rows={6} />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default RatingsAndReviews;
