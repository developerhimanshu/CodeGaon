import React from "react";

function Signin() {
  return (
    <div className="signup">
      <h2>Log In to you account!</h2>
      <form>
        <div className="inputfields">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <button className="signbtn">Log In</button>
      </form>
      <p className="switch-signin">Din't have an accout? Sign Up</p>
    </div>
  );
}

export default Signin;
