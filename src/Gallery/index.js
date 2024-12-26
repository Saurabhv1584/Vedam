import React from "react";
import './styles.css'
import Navbar from "../Coponents/navbar";
import Footer from "../Coponents/footer";
import GalleryCarousel from "../Coponents/GalleryCarousel";

const Gallery = () => {
  return (
    <div className="bg-[#F5F0E9]">
      <Navbar />
      {/* <div className="bg-[#F5F0E9]"> */}
      <div className="flex justify-center items-center">
        <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800">
              Welcome to Veda homes
            </h1>
            <p className="text-base leading-normal text-center text-gray-600 mt-4 lg:w-1/2 md:w-10/12 w-11/12">
            The team at B+H Architects planned every layout to give residents an intimate connection with Bellevue’s nature-rich landscape
            </p>
          </div>
          <div className="lg:flex items-stretch md:mt-12 mt-8">
            <div className="lg:w-1/2">
              <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                <div className="sm:w-1/2 relative">
                  <div>
                    {/* <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                      12 April 2021
                    </p> */}
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-white">
                        The Decorated Ways
                      </h2>
                      <p className="text-base leading-4 text-white mt-2">
                        Dive into minimalism
                      </p>
                    </div>
                  </div>
                  <img
                    src="https://i.ibb.co/DYxtCJq/img-1.png"
                    className="w-full"
                    alt="chair"
                  />
                </div>
                <div className="sm:w-1/2 sm:mt-0 mt-4 relative">
                  <div>
                    {/* <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                      12 April 2021
                    </p> */}
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-white">
                        The Decorated Ways
                      </h2>
                      <p className="text-base leading-4 text-white mt-2">
                        Dive into minimalism
                      </p>
                    </div>
                  </div>
                  <img
                    src="https://i.ibb.co/3C5HvxC/img-2.png"
                    className="w-full"
                    alt="wall design"
                  />
                </div>
              </div>
              <div className="relative">
                <div>
                  {/* <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                    12 April 2021
                  </p> */}
                  <div className="absolute bottom-0 left-0 md:p-10 p-6">
                    <h2 className="text-xl font-semibold 5 text-white">
                      The Decorated Ways
                    </h2>
                    <p className="text-base leading-4 text-white mt-2">
                    Layout setting and mood
                    </p>
                  </div>
                </div>
                <img
                  src="https://i.ibb.co/Ms4qyXp/img-3.png"
                  alt="sitting place"
                  className="w-full mt-8 md:mt-6 hidden sm:block"
                />
                <img
                  className="w-full mt-4 sm:hidden"
                  src="https://i.ibb.co/6XYbN7f/Rectangle-29.png"
                  alt="sitting place"
                />
              </div>
            </div>
            <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
              <div className="relative">
                <div>
                  {/* <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                    12 April 2021
                  </p> */}
                  <div className="absolute bottom-0 left-0 md:p-10 p-6">
                    <h2 className="text-xl font-semibold 5 text-white">
                      The Decorated Ways
                    </h2>
                    <p className="text-base leading-4 text-white mt-2">
                    Minimimalism and modern day architecture
                    </p>
                  </div>
                </div>
                <img
                  src="https://i.ibb.co/6Wfjf2w/img-4.png"
                  alt="sitting place"
                  className="w-full sm:block hidden"
                />
                <img
                  className="w-full sm:hidden"
                  src="https://i.ibb.co/dpXStJk/Rectangle-29.png"
                  alt="sitting place"
                />
              </div>
              <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
                <div className="relative w-full">
                  <div>
                    {/* <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                      12 April 2021
                    </p> */}
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-white">
                        The Decorated Ways
                      </h2>
                      <p className="text-base leading-4 text-white mt-2">
                      Minimimalism and modern
                      </p>
                    </div>
                  </div>
                  <img
                    src="https://i.ibb.co/3yvZBpm/img-5.png"
                    className="w-full"
                    alt="chair"
                  />
                </div>
                <div className="relative w-full sm:mt-0 mt-4">
                  <div>
                    {/* <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                      12 April 2021
                    </p> */}
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-white">
                        The Decorated Ways
                      </h2>
                      <p className="text-base leading-4 text-white mt-2">
                       Layout setting and mood
                      </p>
                    </div>
                  </div>
                  <img
                    src="https://i.ibb.co/gDdnJb5/img-6.png"
                    className="w-full"
                    alt="wall design"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <GalleryCarousel />

      <div className="xl:flex items-center 2xl:mx-40 2xl:container py-16 sm:mx-20 animationRight">
            <div className="lg:p-24 sm:p-9 md:p-16 p-4 2xl:w-8/12 xl:w-11/12 w-full custom_box_shadow">
                <h1 className="text-4xl font-semibold leading-9 text-gray-800">Subscribe</h1>
                <p className="text-base leading-4 mt-2 text-gray-600">Subscribe to our newsletter to get news about latest trends</p>
                <div className="sm:flex items-center mt-10 xl:pb-0 pb-32">
                    <div className="flex items-center bg-gray-100 lg:w-96 w-full">
                        <div className="px-4 py-4">
                            <svg width={18} height={16} viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.6667 1.33333H2.33333C1.59695 1.33333 1 1.93028 1 2.66666V9.33333C1 10.0697 1.59695 10.6667 2.33333 10.6667H11.6667C12.403 10.6667 13 10.0697 13 9.33333V2.66666C13 1.93028 12.403 1.33333 11.6667 1.33333Z" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M1 2.66667L7 6.66667L13 2.66667" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <input className="pl-2 w-full text-base font-medium leading-none text-gray-600 placeholder-gray-600 focus:outline-none bg-gray-100" placeholder="Enter your email address here" />
                    </div>
                    <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-black text-base font-medium leading-none text-white py-4 px-6 bg-gray-800 sm:ml-2 sm:w-auto w-full sm:mt-0 mt-4">Subscribe</button>
                </div>
            </div>
            <div className="w-1/2 xl:block absolute hidden  right-0 2xl:-mr-0 -mr-24 ">
                <img src="https://i.ibb.co/DwT275g/img-1.png" alt="tv-lounge" />
            </div>
            <div className="w-full xl:hidden  flex items-center justify-center xl:-mt-0 -mt-32 sm:px-0 px-4">
                <img src="https://i.ibb.co/DwT275g/img-1.png" alt="tv-lounge" className="sm:w-10/12 w-full" />
            </div>
        </div>

      <Footer />
    </div>
  );
};

export default Gallery;
