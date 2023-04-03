import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../../img/sitter-profile.jpg';
import { useDispatch, useSelector } from 'react-redux';

import { fetchSingleUser, selectUser } from '../../slices/usersSlice';
import { fetchAllUsers } from '../../slices/usersSlice';

const SitterCard = (props) => {
  const {
    id,
    sitter,
    firstName,
    lastName,
    rate,
    rating,
    reviews,
    bio,
    userId,
    zip,
  } = props;

  // console.log({ id, sitter });
  const dispatch = useDispatch();

  return (
    <div className="font-rubik">
      <div className="overflow-hidden bg-slate-50 sm:rounded-lg">
        <div className="px-10 py-10 flex flex-row gap-5">
          <div className="flex flex-col w-1/4">
            <div className="flex flex-col gap-5">
              <Link to={`/profile/${userId}/sitter/${id}`}>
                <img
                  className="h-36 w-36 object-cover rounded-full drop-shadow-md"
                  src={
                    sitter.imageSrc || require('../../img/sitter-profile.jpg')
                  }
                  alt="alt"
                />
              </Link>
              <Link to={`/profile/${userId}/sitter/${id}`}>
                <div>
                  <h3 className="text-base font-rubikmono leading-6 text-gray-900">
                    {`${firstName} ${sitter.lastName}`}
                  </h3>
                  <p>({sitter.userName})</p>
                </div>
              </Link>
              <div className="font-semibold"></div>
            </div>
          </div>

          <div className="w-3/4 flex flex-col gap-3">
            <h2 className="font-rubikmono text">DETAILS</h2>
            <div className="flex flex-row gap-5">
              <div className="flex flex-row gap-2">
                <p className="font-semibold">REVIEWS: </p> <p>{reviews}</p>
              </div>
              <div className="">⭐️ {rating}</div>
            </div>
            <div className="flex flex-row gap-2">
              <p className="font-semibold">RATE: </p>
              <p>${rate}</p>
            </div>
            <div className="flex flex-row gap-2">
              <p className="font-semibold">BIO: </p>
              <p className="pr-10">{bio}</p>
            </div>
            <div className="flex flex-row gap-2">
              <p className="font-semibold">Location:</p>
              <p>{sitter.sitterZip}</p>
            </div>
            <Link
              to={`/profile/${userId}/sitter/${sitter.id}`}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Check Availability
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitterCard;
