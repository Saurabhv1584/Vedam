import React from "react";
import "./style.css";
import Navbar from "../Coponents/navbar";
import Footer from "../Coponents/footer";
import { NavLink } from "react-router-dom";

const Building = () => {
  return (
    <div className="bg-[#F5F0E9]">
      <Navbar />
      <div className="flex flex-col justify-center">
        <img
          className="h-[calc(100vh-80px)] p-4"
          src="https://maribellevue.wpengine.com/wp-content/uploads/Dreamlife_Mira2_Cam2_Exterior_Lake_Final-1.jpg"
          alt="building"
        />
      </div>

      <div className="py-12 animationLeft">
        <div className=" mx-auto px-6 flex flex-col md:flex-row items-center justify-center">
          {/* Text Section */}
          <div className="flex items-center flex-col px-4 text-center">
            <p className=" font-sans text-2xl md:text-3xl font-semibold text-[#7a6e66] uppercase tracking-wide mb-4">
              Floor Plans
            </p>
            <p className="font-sans uppercase text-center text-[#7a6e66] tracking-[0.2em] 
            leading-[1.8] w-[90%] max-w-[1100px] font-extralight text-[28px] 
            word-spacing-[-0.22em]">
              The team at MZA and B+H Architects planned every layout to give
              residents an intimate connection with Bellevue’s nature-rich
              landscape.
            </p>
            <button className="bg-[#7a6e66] text-white py-3 px-6 rounded-lg hover:bg-[#6a5b4d] transition duration-300 mt-4">
              {/* Explore */}
              <NavLink>Explore</NavLink>
            </button>
          </div>
          {/* <div className="px-4 lg:px-0">
            <div role="contentinfo" className="flex items-center flex-col px-4">
              <p tabIndex={0} className="focus:outline-none uppercase text-sm text-center text-gray-500 leading-none">in few easy steps</p>
              <h1 tabIndex={0} className="focus:outline-none text-4xl lg:text-4xl pt-4 font-extrabold text-center leading-tight text-gray-800 lg:w-7/12 md:w-9/12 xl:w-5/12">Create Beautiful Landing Pages &amp; Web Apps in a Jiffy</h1>
            </div>
          </div> */}
        </div>
      </div>

      <div className=" mx-auto px-4 flex items-center box-border mt-6 animation">
        <img src='https://maribellevue.wpengine.com/wp-content/uploads/Dreamlife_Mira2_Cam3_Exterior_CityView_Final-1__1.jpg' alt="img" className="ml-auto mr-auto h-[calc(100vh-80px)]" />
      </div>

      <div className=" mx-auto lg:mx-auto relative mt-4 xl:px-20 lg:px-16 md:px-12 md:flex items-center gap-8 animationRight">
        <div class="text-color flex justify-center flex-col w-4/5 md:w-1/3 sm:w-4/5 pt-4 sm:px-12 lg:pt-2 xl:pt-10 md:pl-16 md:pr-12 pl-0 pr-0">
          <h1 className="text-4xl md:text-4xl lg:text-4xl w-11/12 lg:w-11/12 xl:w-full xl:text-4xl text-gray-900 font-extrabold f-f-l">
            Build, review and ship with ease
          </h1>
          <div className="f-f-r text-base lg:text-base pb-20 sm:pb-0 pt-10 xl:pt-6">
            <h2>
              The next big thing starts here. Start building with Prodify and be
              the first to market with a product that is ready to take on the
              competition and delight your customers
            </h2>
          </div>
        </div>
        <img
          className="w-full mt-8 md:mt-0 object-fill md:w-2/3 md:-ml-4 lg:-ml-4 xl:ml-0"
          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Graphic.png"
          alt="Sample"
        />
      </div>

      <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8 animationLeft">
            <div className="lg:flex items-center justify-between">
            <div className="lg:w-7/12 lg:mt-0 mt-8">
                    <div className="w-full h-full bg-red-200">
                        <img src="5.jpeg" alt="apartment design" className="w-full object-cover aspect-[3.2] sm:block hidden" />
                        {/* <img src="https://i.ibb.co/ZVPGjGJ/pexels-max-vakhtbovych-6782351-1.png" alt="apartment design" className="sm:hidden block w-full" /> */}
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
                        <img src="3.jpeg" className="w-full" alt="kitchen" />
                        <img src="10.jpeg" className="w-full" alt="sitting room" />
                    </div>
                </div>
                <div className="lg:w-1/3 mt-4">
                    <h1 className="text-4xl font-semibold leading-9 text-gray-800">Indoor Interiors</h1>
                    <p className="text-base leading-6 mt-4 text-gray-600">Get inspired by our curated selection of luxiwood interiors. We hope get inspired to have luxiwood interior yourself. You’ll find tips here where you can buy a lot of cool furniture.</p>
                    <button aria-label="view catalogue" className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none mt-6 md:mt-8 text-base font-semibold leading-none text-gray-800 flex items-center hover:underline">
                        <NavLink to='/Gallery' end>
                        View Catalogue
                        </NavLink>
                        <svg className="ml-2 mt-1" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.33325 4H10.6666" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8 6.66667L10.6667 4" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8 1.33398L10.6667 4.00065" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

      <div
        className="py-20 2xl:px-0 lg:px-12 px-4 sm:py-0 2xl:mx-auto animationRight"
        style={{ height: 1000 }}
      >
        <div className="md:flex items-center justify-between w-full">
          <div className="xl:w-1/3 md:w-1/2 w-full">
            <h1 className="focus:outline-none md:w-60 font-bold md:text-6xl text-4xl leading-tight text-gray-800">
              Think<span className="font-normal italic"> out loud </span>
            </h1>
            <p
              role="contentinfo"
              className="focus:outline-none text-base leading-6 mt-8 text-gray-600 2xl:pr-24 xl:pr-0 pr-12"
            >
              The design team at MZA Architects conceived an homage to
              Bellevue’s landscape: a monument of stone, wood and glass. The
              palette of cloud-greys, lake-blues, and bark-browns, is
              illuminated by walls of focal windows scaling some of the highest
              residential ceiling heights in the city.
            </p>
            <div className="mt-10">
              <button className="flex items-center md:p-3 p-1 focus:outline-none text-xl font-medium leading-5 text-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
                Discover more
                <svg
                  className="ml-8"
                  width={45}
                  height={40}
                  viewBox="0 0 45 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.2113 33.7887C11.0161 33.9839 11.0157 34.3009 11.2157 34.4911C13.956 37.0978 17.3821 38.8765 21.0982 39.6157C24.9778 40.3874 28.9991 39.9913 32.6537 38.4776C36.3082 36.9638 39.4318 34.4004 41.6294 31.1114C43.827 27.8224 45 23.9556 45 20C45 16.0444 43.827 12.1776 41.6294 8.8886C39.4318 5.59961 36.3082 3.03616 32.6537 1.52241C28.9991 0.00865715 24.9778 -0.38741 21.0982 0.384294C17.3821 1.12346 13.956 2.90221 11.2157 5.50886C11.0157 5.69911 11.0161 6.01609 11.2113 6.21127C11.4065 6.40645 11.7225 6.4059 11.9227 6.21592C14.523 3.74892 17.7711 2.06527 21.2932 1.36468C24.9789 0.631541 28.7993 1.00781 32.2711 2.44591C35.743 3.88401 38.7105 6.31934 40.7983 9.44394C42.8861 12.5685 44.0004 16.2421 44.0004 20C44.0004 23.7579 42.8861 27.4315 40.7983 30.5561C38.7105 33.6807 35.743 36.116 32.2711 37.5541C28.7993 38.9922 24.9789 39.3685 21.2932 38.6353C17.7711 37.9347 14.523 36.2511 11.9227 33.7841C11.7225 33.5941 11.4065 33.5935 11.2113 33.7887Z"
                    fill="#1F2937"
                  />
                  <path
                    d="M1 20H29"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 28L29 20"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 12L29 20"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="xl:w-4/6 md:w-1/2 w-full xl:pl-48">
            {/* <p
              role="contentinfo"
              className=" focus:outline-none text-base leading-6 mb-8 text-gray-600 md:mt-0 mt-10"
            >
              ARCHITECTURE
            </p> */}
            <div className="w-full">
              <img
                src="https://maribellevue.com/wp-content/uploads/mari-1.png"
                alt="Purple flowers on a book"
                className="md:w-full sm:w-1/2 w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="dark:bg-gray-900 animation">
            <div className="flex flex-col lg:flex-row items-stretch justify-between lg:px-0 px-6 lg:py-20 py-8 2xl:mx-auto 2xl:">
                <div className="relative lg:w-1/2">
                    <div className="hidden dark:bg-gray-800 bg-gray-100 w-full lg:w-10/12 lg:h-full lg:flex justify-end items-center">
                        <div className="w-full lg:w-auto lg:-mr-32">
                            <img src="https://i.ibb.co/YQjkqWr/juan-burgos-FIy-XGZ1q0mc-unsplash-1.png" alt="unsplash with decent chairs" className="w-full relative z-1 lg:pl-20 px-6 py-14" />
                        </div>
                    </div>
                    <div className="absolute top-0 dark:bg-gray-800 bg-gray-100 md:h-96 w-full hidden md:block lg:hidden"></div>
                    <div className="w-full h-full lg:hidden">
                        <img src="https://i.ibb.co/YQjkqWr/juan-burgos-FIy-XGZ1q0mc-unsplash-1.png" alt="unsplash" className="w-full relative lg:pl-20 md:px-6 py-5 md:py-14" />
                    </div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 lg:w-1/2 lg:ml-12 lg:p-14 p-8 flex items-center">
                    <div>
                        <h1 className="dark:text-white md:w-8/12 lg:w-10/12 xl:8/12 2xl:w-8/12 w-full xl:text-6xl sm:text-5xl text-4xl font-semibold text-gray-800 capitalize">Modern Interior Decor</h1>
                        <p className="dark:text-gray-300 md:w-9/12 lg:w-11/12 xl:w-10/12 2xl:9/12 text-base leading-normal text-gray-600 mt-5">Get inspired by our curated selection of luxiwood interiors. We hope get inspired to have luxiwood interior yourself. You’ll find tips here where you can buy a lot of cool furniture,decorations, plants, etc.</p>
                        <button className="dark:bg-white dark:hover:bg-gray-400 dark:hover:text-gray-100 dark:text-gray-800 sm:w-auto w-full mt-8 text-base justify-between focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none hover:bg-gray-700 font-medium leading-none text-white py-4 px-8 bg-gray-800 flex items-center">
                            <NavLink>Explore</NavLink>
                            <div className="ml-2 mt-0.5">
                                <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.33325 8H12.6666" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10 10.6667L12.6667 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10 5.33301L12.6667 7.99967" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>

      <Footer />
    </div>
  );
};

export default Building;
