import React from "react";
import { innerNav } from "../../static/data";
import Navbar from "../../layout/purseLayout/components/header";

const Swap = () => {
  return (
    <section className="bg-overlay-img bg-dark-1 h-screen flex justify-center">
      <div className="container">
        <Navbar data={innerNav} />
      </div>
    </section>
  );
};

export default Swap;
