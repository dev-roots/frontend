import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Import toast
import { toast } from "react-toastify";

// Import API
import { register } from "../../api/auth.api";

// Import images
import logo from "../../assets/img/logo.svg";

export const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = {
        username: username,
        email: email,
        password: password,
      };

      const response = await register(user);

      if (response.status === 200) {
        toast.success("Register successful!");
        navigate("/login");
      }
    } catch (error) {
      toast.error("Register failed!");
      setAuthError(error.response.data);
    }
  };

  return (
    <main className="w-full flex">
      <div className="relative flex-1 hidden items-center justify-center h-screen lg:flex">
        <div className="relative z-10 w-full max-w-md">
          <img src={logo} width={200} alt="devRoots logo" />
          <div className="mt-8 space-y-3">
            <h3 className="text-white text-3xl font-bold">
              Laborum labore do tempor dolor.
            </h3>
            <p className="text-white">A devRoots's product.</p>
          </div>
        </div>
        <div className="absolute inset-0 my-auto h-screen green-gradient"></div>
      </div>
      <div className="flex-1 flex items-center justify-center h-screen">
        <div className="w-full max-w-md space-y-8 px-4 bg-white text-main-color sm:px-0">
          <div>
            <img
              src={logo}
              width={150}
              alt="devRoots logo"
              className="lg:hidden"
            />
            <div className="mt-5 space-y-2">
              <h3 className="text-main-color text-2xl font-bold sm:text-3xl">
                Sign up
              </h3>
              <p>
                Already have an account?{" "}
                <Link
                  title="Go to login page"
                  to="/login"
                  className="font-medium text-main-color hover:text-tertiary-color"
                >
                  Log in
                </Link>
              </p>
            </div>
          </div>
          <div className="relative">
            <span className="block w-full h-px bg-main-color"></span>
            <p className="inline-block w-fit text-sm bg-white text-main-color px-2 absolute -top-2 inset-x-0 mx-auto">
              Or continue with
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="font-medium" htmlFor="username">
                Username
              </label>
              <input
                id="username"
                type="text"
                required
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full mt-2 px-3 py-2 text-main-color bg-transparent outline-none border focus:border-secondary-color shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-2 px-3 py-2 text-main-color bg-transparent outline-none border focus:border-secondary-color shadow-sm rounded-lg"
              />
            </div>

            {authError && <p className="text-red-500">{authError}</p>}

            <button className="w-full px-4 py-2 text-main-color font-medium yellow-gradient hover:opacity-80  rounded-lg">
              Create account
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};
