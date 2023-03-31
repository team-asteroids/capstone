import React from 'react';
import { useNavigate } from 'react-router-dom';

const RatingsAndReviews = (props) => {
  const { user, sitter } = props;
  const navigate = useNavigate();
  // console.log({ user: user, sitter: sitter });

  const labelClass = 'text-xs font-rubikmono';

  const validClass =
    'appearance-none block w-full bg-white-200 border rounded py-3 px-6 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-1 font-rubik';

  const goBack = () => {
    navigate(-1);
  };

  const submitRatingAndReview = (evt) => {
    evt.preventDefault();
    console.log('submitted!');
  };

  return (
    <div className="font-rubik flex flex-col gap-5">
      <div>
        <button
          className="text-left max-w-fit text-xs font-semibold hover:text-bold-purple ease-in-out duration-100"
          onClick={goBack}
        >
          BACK
        </button>
      </div>
      <h2 className="font-rubikmono">Throw A Dog A Bone</h2>
      <section className="w-2/3">
        <form onSubmit={submitRatingAndReview}>
          <div className="flex flex-wrap mb-5">
            <div className="w-1/2 flex flex-col pr-6">
              <label className={labelClass}>Select Sitting</label>
              <select className={validClass}>
                <option>sitting1</option>
                <option>sitting2</option>
              </select>
            </div>
            <div className="w-1/2 flex flex-col">
              <label className={labelClass}>Rate</label>
              <input
                className={validClass}
                type="number"
                step={0.5}
                min={0}
                max={5}
              />
            </div>
          </div>
          <div className="flex flex-wrap mb-5">
            <div className="w-full flex flex-col">
              <label className={labelClass}>Review</label>
              <textarea className={validClass} rows={6} />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default RatingsAndReviews;
