import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className="bg-[url('img/signup-blue.jpg')] bg-no-repeat bg-cover bg-right h-[calc(100vh_-_5rem)]">
      <div className="max-w-1/3 flex flex-row m-auto">
        <div className="w-1/2 mx-10 m-auto">
          <h2 className="text-center text-3xl">Welcome, New Pup!</h2>
          <section className="flex gap-10 justify-center mt-16">
            <form>
              <div className="flex flex-wrap mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label>First Name</label>
                  <input className="appearance-none block w-full bg-white-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3" />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label>Last Name</label>
                  <input className="appearance-none block w-full bg-white-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3" />
                </div>
              </div>
              <div className="flex flex-wrap px-3 mx-3 mb-6">
                <div className="w-full flex flex-col">
                  <label>Email</label>
                  <input className="appearance-none block w-full bg-white-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3" />
                </div>
              </div>
              <div className="flex flex-wrap mx-3 mb-6">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label>Zip Code</label>
                  <input
                    className="appearance-none block w-full bg-white-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3"
                    type="text"
                  />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label>Pets</label>
                  <input
                    className="appearance-none block w-full bg-white-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3"
                    type="number"
                    min={0}
                  />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label>Foster</label>
                  <select className="appearance-none block w-full bg-white-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3">
                    {/* <option value="" selected disabled hidden>
                      Can update later
                    </option> */}
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
              <div>
                <button
                  className="ease-in duration-500  hover:bg-primary-button-hover w-full bg-primary-deep-green text-white py-2 rounded-xl mx-auto block text-xl hover:transition-all mt-10"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </section>
          <div className="text-xs mt-5 text-center">
            <p>
              <Link to={'/login'}>Already have an account? Log in!</Link>
            </p>
          </div>
        </div>
        <div className="w-1/2 h-[calc(100vh_-_5rem)]"></div>
      </div>
    </div>
  );
}

export default SignUp;
