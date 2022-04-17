import React from "react";
import { useServices } from "../../../../Hooks/useServices";
import hopkins from "../../../../images/coach.webp";
import Services from "../Services/Services";


const Header = () => {
  const [services] = useServices();
  return (
    <>
      <header>
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundPosition: "50%",
            backgroundImage:
              "url(https://mdbcdn.b-cdn.net/img/new/slides/146.webp)",
            height: "90vh",
          }}
        >
          <div
            className="w-full h-full"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.85)" }}
          >
            <div className="grid xl:grid-cols-2 sm:grid-cols-1 gap-4">
              <div className="sm:order-2">
                <img className="absolute bottom-0" src={hopkins} alt="" />
              </div>
              <div className="sm:order-1 sm:mt-10 text-center text-white xl:flex items-center">
                <div className="xl:mt-28 sm:mt-10">
                <h1 className="xl:text-3xl sm:text-xl my-10">
                    I HELPED MILLIONS OF PEOPLE TO IMPROVE THEIR LIFES
                  </h1>
                  <p className="xl:text-xl sm:text-base my-10">
                    Are you the next? Discover the simple 3 Steps that I
                    Discovered to Hack Productivity.It works %100. Wanna
                    transform your life?
                  </p>
                  <button
                    type="button"
                    className="px-6 py-2.5 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-blue-600 transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Get started
                  </button>
            </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <h1 className="text-4xl text-center my-10">RECENT COURSES</h1>
      <div className="flex flex-wrap mx-3 overflow-hidden xl:mx-4 sm: mx-3">
        {services.map((service) => (
          <Services key={service.id} service={service} />
        ))}
        </div>
    </>
  );
};

export default Header;
