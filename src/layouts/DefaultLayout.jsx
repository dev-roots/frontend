import React from "react";

// Import components
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
        <main>
          {children}
        </main>
      <Footer />
    </>
  );
};
