import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../../img/sitter-profile.jpg';

const SitterCard = ({ id, firstName, rate, rating, reviews, bio }) => {
  return (
    <div className="pt-8">
      <div className="overflow-hidden bg-white shadow sm:rounded-lg mb-8">
        <div className="px-4 py-5 sm:px-6 flex flex-col sm:flex-row">
          <img
            className="h-48 w-48 rounded-full drop-shadow-md"
            src={require('../../img/sitter-profile.jpg')}
          />
          <div className="flex flex-col gap-5 ml-5">
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              {firstName}
            </h3>
            <div className="bg-white px-4 py-5">
              <dt className="text-sm font-medium text-gray-500">Rating ⭐️</dt>
              <dd className="mt-1 text-sm text-gray-900">{rating}</dd>
            </div>
          </div>
          <div className="sm:w-1/2">
            <div className="bg-gray-50 px-4 py-5">
              <dt className="text-sm font-medium text-gray-500">Hourly</dt>
              <dd className="mt-1 text-sm text-gray-900">{rate}</dd>
            </div>
            <div className="bg-white px-4 py-5">
              <dt className="text-sm font-medium text-gray-500">
                Reviews: {reviews}
              </dt>
            </div>

            <div className="bg-white px-4 py-5">
              <dt className="text-sm font-medium text-gray-500">Bio: {bio}</dt>
            </div>
            <div className="bg-gray-50 px-4 py-5">
              <dt className="text-sm font-medium text-gray-500">Details</dt>
              <dd className="mt-1 text-sm text-gray-900">
                <ul className="divide-y divide-gray-200 rounded-md border border-gray-200">
                  <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                    <div className="flex w-0 flex-1 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="ml-2 flex-1 w-0 truncate">
                        <Link // profile or bookings page?
                          to={`/sitters/${id}`}
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Available
                        </Link>
                      </span>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitterCard;
