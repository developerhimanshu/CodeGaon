import React from "react";

function Signup() {
  return (
    <div className="flex flex-col  items-center m-auto bg-zinc-900 w-1/4 gap-y-6 py-8">
      <h2 className="text-2xl">Create Your Account!</h2>
      <h3 className="text-xl">In simple steps.</h3>
      <form className="flex flex-col items-center gap-y-8">
        <div className="flex flex-col gap-y-2">
          <input
            type="text"
            placeholder="Name"
            className="rounded-md m-2 w-full px-3 py-1.5 border-0 outline-0 text-black"
          />
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
          Sign Up
        </button>
      </form>
      <p className="border-b-2 border-solid border-orange-400">
        Already Registerd? Log in
      </p>
    </div>
  );
}

export default Signup;
