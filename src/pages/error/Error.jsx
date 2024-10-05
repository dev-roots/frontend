import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Error = ({ typeError, title, desc }) => {
  const navigate = useNavigate();

  return (
    <main>
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
        <div className="max-w-lg mx-auto space-y-3 text-center">
          <h3 className="text-secondary-color font-semibold">{typeError}</h3>
          <p className="text-main-color text-4xl font-semibold sm:text-5xl">
            {title}
          </p>
          <p className="text-main-color">{desc}</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => navigate(-1)}
              title="Go to previous page"
              className="block py-2 px-4 text-main-color font-medium yellow-gradient hover:opacity-80 rounded-lg"
            >
              Go back
            </button>
            <Link
              title="Go to home page"
              to="/"
              className="block py-2 px-4 text-main-color green-gradient hover:opacity-80 font-medium  border rounded-lg"
            >
              Go to home page
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
