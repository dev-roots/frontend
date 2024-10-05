import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Import toast
import { toast } from "react-toastify";

// Import API
import { login } from "../../api/auth.api";

// Import images
import logo from "../../assets/img/logo.svg";

export const Login = () => {
  const navigate = useNavigate();
  const [emailUsername, setEmailUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = {
        emailUsername: emailUsername,
        password: password,
      };

      const response = await login(user);

      if (response.status === 200) {
        toast.success("Login successful!"); 
        navigate("/");
      }
    } catch (error) {
      toast.error("Login failed!");
      setAuthError(error.response.data);
    }
  };

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-main-color">
        <div className="text-center">
          <Link to="/" title="Go to home page">
            <img
              src={logo}
              width={200}
              className="mx-auto"
              alt="devRoots logo"
            />
          </Link>

          <div className="mt-5 space-y-2">
            <h1 className="text-main-color text-2xl font-bold sm:text-3xl">
              Log in to your account
            </h1>
            <p>
              Don't have an account?{" "}
              <Link
                title="Go to register page"
                to="/register"
                className="font-medium text-main-color hover:text-tertiary-color"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="font-medium" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              required
              name="username"
              value={emailUsername}
              onChange={(e) => setEmailUsername(e.target.value)}
              className="w-full mt-2 px-3 py-2 text-main-color bg-transparent outline-none border focus:border-secondary-color shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 px-3 py-2 text-main-color bg-transparent outline-none border focus:border-secondary-color shadow-sm rounded-lg"
            />
          </div>

          {authError && <p className="text-red-500">{authError}</p>}


          <button
            type="submit"
            className="w-full px-4 py-2 text-main-color font-medium yellow-gradient hover:opacity-80 rounded-lg"
          >
            Sign in
          </button>
          <div className="text-center">
            <Link
              to="/forgot-password"
              title="Forgot password"
              className="text-main-color hover:text-tertiary-color"
            >
              Forgot password?
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};
