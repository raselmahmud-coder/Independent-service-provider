import React from "react";
import myImg from "../../../images/branding img.png";
const About = () => {
  return (
    <div>
      <section className="p-6 md:p-12 text-center md:text-left shadow-lg rounded-md">
        <div className="flex justify-center">
          <div className="max-w-3xl">
            <div className="block p-6 rounded-lg shadow-lg bg-white m-4">
              <div className="md:flex md:flex-row">
                <div className="md:w-96 w-36 flex justify-center items-center mb-6 lg:mb-0 mx-auto md:mx-0">
                  <img
                    src={myImg}
                    className="rounded-full shadow-md"
                    alt="avatar"
                  />
                </div>
                <div className="md:ml-6">
                  <p className="text-gray-500 font-light mb-6">
                    Hi, this is Rasel Mahmud from Bangladesh. Currently I'm doing Bsc On Automation Engineering in China. I'm very hard worker and enthusiastic. My expertise area are HTML5, CSS3, JAVASCRIPT, REACT, WORDPRESS, HOSTING MANAGEMENT AND SOME OF STUFF ADOBE PHOTO SHOP.
                  </p>
                  <p className="font-semibold text-xl mb-2 text-gray-800">
                  Rasel Mahmud
                  </p>
                  <p className="font-semibold text-gray-500 mb-0">
                    Become a full Stack Web Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
