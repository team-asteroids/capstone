import React from 'react';

function SignUp() {
  return (
    <div className="bg-[url('img/signup-blue.jpg')] bg-no-repeat bg-cover bg-left h-[calc(100vh_-_5rem)]">
      <div className="flex flex-row">
        <div className="w-1/2">
          <h2 className="text-center text-3xl font-bold">Welcome, New Pup!</h2>
          <section className="flex gap-10 justify-center mt-16 ">
            <form>
              <div className="flex flex-wrap mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label>First Name</label>
                  <input className="appearance-none block w-full bg-white-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-orange" />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label>Last Name</label>
                  <input className="appearance-none block w-full bg-white-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-orange" />
                </div>
              </div>
              <div className="flex flex-wrap px-3 mx-3 mb-6">
                <div className="w-full flex flex-col">
                  <label>Email</label>
                  <input className="appearance-none block w-full bg-white-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-orange" />
                </div>
              </div>
            </form>
          </section>
        </div>
        <div className="w-1/2 h-[calc(100vh_-_5rem)] bg-contain bg-center bg-no-repeat"></div>
      </div>
    </div>
  );
}

export default SignUp;
