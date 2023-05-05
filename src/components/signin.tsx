import React from "react";

function Signin() {
  return (
    <div className="flex flex-col  items-center m-auto bg-zinc-900 w-1/4 gap-y-8 py-8">
      <h2 className="text-2xl">Log In to you account!</h2>
      <form className="flex flex-col items-center gap-y-8">
        <div className="flex flex-col gap-y-2">
          <input
            type="email"
            placeholder="Email"
            className="rounded-md m-2 w-full px-3 py-1.5 border-0 outline-0 text-black"
          />
          <input
            type="password"
            placeholder="Password"
            className="rounded-md m-2 w-full px-3 py-1.5 border-0 outline-0 text-black"
          />
        </div>
        <button className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl py-1.5 px-8 flex items-center pb-2 text-xl">
          Log In
        </button>
      </form>
      <p className="border-b-2 border-solid border-orange-400">
        Din't have an accout? Sign Up
      </p>
    </div>
  );
}

export default Signin;
