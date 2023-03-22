import React from 'react';
import { Link } from 'react-router-dom';

function LogIn() {
  return (
    <div className="bg-[url('img/dog-head.jpg')] bg-bottom bg-no-repeat bg-cover h-[calc(100vh_-_5rem)]">
      <div className="w-full flex flex-col max-w-sm m-auto pt-16">
        <h2 className="text-center text-3xl">Log in!</h2>
        <section className="flex gap-10 justify-center mt-16">
          <form>
            <div className="flex flex-col gap-10">
              <div className="w-full">
                <label>Email</label>
                <input className="appearance-none block w-full bg-white-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3" />
              </div>
              <div className="w-full">
                <label>Password</label>
                <input
                  className="appearance-none block w-full bg-white-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3"
                  type="password"
                />
              </div>
            </div>
            <div>
              <button
                className="ease-in duration-500  hover:bg-primary-button-hover w-full bg-primary-deep-green text-white py-2 rounded-xl mx-auto block text-xl hover:transition-all mt-10"
                type="submit"
              >
                Log in
              </button>
            </div>
          </form>
        </section>
        <div className="text-xs mt-5">
          <p className="text-center">
            <Link to={'/signup'}>Don't have an account? Sign Up!</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
