import React from "react";

function Signup() {
  return (
    <div className="signup">
      <h2>Create Your Account!</h2>
      <h3>In simple steps.</h3>
      <form>
        <div className="inputfields">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <button className="signbtn">Sign Up</button>
      </form>
      <p className="switch-signin">Already Registerd? Log in</p>
    </div>
  );
}

export default Signup;
