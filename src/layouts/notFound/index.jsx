import React from "react";
import { NotFoundSVG } from "../../common/svgIcons";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="bg-white-1 dark:bg-dark-1 bg-cover h-screenfit">
      <section className="container h-full mx-auto px-4 sm:px-6 md:px-0">
        <div className="md:w-mini_large lg:w-semi_large mx-auto mt-12">
          <NotFoundSVG className="mx-auto" />
          <div className="mt-16 text-center">
            <h1 className="text-5xl font-black text-purple-1">Oh No!</h1>
            <p className="mt-4 mb-16 text-xl sm:text-3xl font-black text-black-1 dark:text-white-1">
              Sorry page not found! <br />
              Come back to the homepage.
            </p>
            <Link className="bg-purple-gradient py-4 px-8 md:px-16 font-black text-xl md:text-2xl rounded-xl text-white-1" to = "/">
              Back to Homepage
            </Link>
          </div>
          <div className="mt-16 text-center">
            <Link className="font-black dark:text-white-1 text-black-1 underline" to = "/app/purses">
              Go to App
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
