import React from "react";
import { toast } from "react-toastify";

export const Landing = () => {
  const notify = () => toast("Wow so easy !");

  return (
    <div>
      Landing
      <button onClick={notify}>Notify !</button>
    </div>
  );
};
