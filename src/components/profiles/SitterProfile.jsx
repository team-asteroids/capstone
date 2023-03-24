import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchSingleSitter,
  fetchSingleSitterRatings,
  fetchSingleSitterReviews,
  selectSitters,
} from '../../slices/sittersSlice';

const SitterProfile = () => {
  const dispatch = useDispatch();

  const { singleSitter, sitterReviews, sitterRatings } =
    useSelector(selectSitters);

  const id = singleSitter.id;

  useEffect(() => {
    dispatch(fetchSingleSitterReviews(id));
    dispatch(fetchSingleSitterRatings(id));
  }, [singleSitter]);

  // console.log(sitterRatings, sitterReviews);

  return (
    <div className="font-rubik flex flex-col gap-5">
      <div>
        <h2 className="font-rubikmono">Sitter Profile</h2>
      </div>
      <div className="h-[calc(100vh_-_20rem)] overflow-auto flex flex-col gap-5">
        <div>
          <h2 className="font-rubikmono">About Me</h2>
          <p>{singleSitter.bio}</p>
        </div>
        <div>
          <h2 className="font-rubikmono">Availability</h2>
          <p>{singleSitter.bio}</p>
        </div>
        <div>
          <h2 className="font-rubikmono">Ratings & Reviews</h2>
          <p>{singleSitter.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default SitterProfile;
