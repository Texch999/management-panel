import React from "react";
import { Images } from "../../images";
import { FaUser, FaLock } from "react-icons/fa";

function Login() {
  return (
    <div className="w-100 h-92vh flex-center">
      <div className="w-100 flex-center">
        <div className="col flex-center">
          <img className="login-logo" src={Images?.SsevenLogo} alt="Logo" />
        </div>
        <div className="col flex-center clr-white">
          <div className="login-bg px-5 py-4 rounded">
            <center>
              <h6 className="clr-white">S7 Boundaries</h6>
              <p className="font-12 th-color">
                Welcome back! Please login to your account.
              </p>
            </center>
            <div className="font-12">
              <label>User Name</label>
              <div className="day-button2 p-2 rounded mt-1 td-color">
                <FaUser className="font-20 border-right me-2 pe-2" />
                <input
                  type="text"
                  className="all-none2 td-color"
                  placeholder="User Name"
                />
              </div>
            </div>
            <div className="font-12 mt-2">
              <label>Password</label>
              <div className="day-button2 p-2 rounded mt-1 td-color">
                <FaLock className="font-20 border-right me-2 pe-2" />
                <input
                  type="text"
                  className="all-none2 td-color"
                  placeholder="Password"
                />
              </div>
              <div className="mt-1 font-12 td-color d-flex justify-content-end">
                Forgot Password?
              </div>
              <div className="mt-2 p-2 font-12 rounded flex-center blue-btn">
                Login
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
