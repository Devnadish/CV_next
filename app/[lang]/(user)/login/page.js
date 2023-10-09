
import PageContainer from  "@/components/shared/pagecontainer/PageContainer";
import React from "react";



function page() {
  return (
    <PageContainer>
      <div className="relative flex items-center justify-center w-full sm:max-w-sm sm:mx-auto">
        <BackGround></BackGround>

        <div className="relative px-4 py-4 bg-white shadow-lg rounded-3xl sm:rounded-3xl sm:p-4">
          <div className="max-w-sm mx-auto">
            <div className="mt-3 text-2xl font-semibold"><h1>Login Please</h1></div>

            <div className="divide-y divide-gray-200">
              <div className="py-8 space-y-4 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="email"
                    name="email"
                    type="text"
                    className="w-full h-10 text-gray-900 placeholder-transparent border-b-2 border-gray-300 peer focus:outline-none focus:borer-rose-600"
                    placeholder="Email address"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email Address
                  </label>
                </div>
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="password"
                    name="password"
                    type="password"
                    className="w-full h-10 text-gray-900 placeholder-transparent border-b-2 border-gray-300 peer focus:outline-none focus:borer-rose-600"
                    placeholder="Password"
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Password
                  </label>
                </div>
                <div className="relative">
                  <button className="px-2 py-1 text-white bg-blue-500 rounded-md">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </PageContainer>
  );
}

export default page;

function BackGround() {
  return (
    <div
      className="absolute inset-0 p-4 skew-y-0 shadow-lg transhtmlForm bg-gradient-to-r from-green-300 to-green-600 -rotate-6 rounded-3xl"
    ></div>
  );
}