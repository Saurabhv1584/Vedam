import React from "react";
import "./style.css";
import { Modal, Splitter } from "antd";
import { NavLink } from "react-router-dom";

const Banner = (props) => {
  const { isBannerOpn, setIsBannerOpn } = props;

  return (
<Modal
  open={isBannerOpn}
  onCancel={() => setIsBannerOpn(false)}
  footer={null}
  width={1000}
  // style={{ width: '90vw', maxWidth: '1000px' }}
  closable={false}
  className="banner_modal"
>
  <div className="xl:mx-auto xl:container">
    <div className="flex flex-col-reverse md:flex-row items-center lg:space-x-6">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 lg:pl-12 lg:pr-24 h-[45vh] md:h-auto">
        <div className="absolute top-2 right-2 lg:top-0 lg:left-0">
          <button
            onClick={() => setIsBannerOpn(false)}
            className="w-10 h-10 flex items-center justify-center text-white md:text-black text-xl focus:outline-none"
          >
            &times;
          </button>
        </div>

        <div className="px-6 xl:px-0 h-full flex flex-col justify-center items-center overflow-hidden">
          <div className="flex justify-center items-center flex-col">
            <h1 className="font-visby font-thin text-[12px] sm:text-[14px] tracking-[0.2em] uppercase text-[#7a6e66] text-center">
              Exciting News
            </h1>
            <div className="mt-4">
              <p className="font-hues font-thin text-[24px] sm:text-[32px] uppercase text-[#7a6e66] text-center mb-0 tracking-[0.1em] [text-stroke:0.5px_#7a6e66]">
                Vedam homes is now Open Move in Today
              </p>
            </div>
            <NavLink to='/Enquire' className="mt-8 flex justify-center items-center w-full" end>
              <button className="border border-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 sm:w-80 w-full hover:bg-black text-base font-medium leading-4 bg-gray-800 py-3 sm:py-4 text-white">
                BOOK A TOUR
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 h-[60vh] md:h-auto">
        <img
          src="husky_2.png"
          alt="bag"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  </div>
</Modal>

  );
};

export default Banner;
