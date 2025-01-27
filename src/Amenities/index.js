import React from "react";
import Navbar from "../Coponents/navbar";
import Footer from "../Coponents/footer";
import GalleryCarousel from "../Coponents/GalleryCarousel";
import './style.css'
import { NavLink } from "react-router-dom";

const Amenities = () => {
  return (
    <div className="bg-[#f5f0e9]">
      <Navbar />

      <div className="mx-auto pb -4 sm:py-8 sm:px-6 md:px-16 amenityAnimation">
        <div className="flex flex-col lg:flex-row justify-center items-center 2xl:space-x-40 xl:space-x-34 lg:space-x-12 space-y-8 lg:space-y-0">
          <div>
            <img src="amenities-1.jpg" className="aspect-[1.4/1]" alt="girl" />
          </div>
          <div className="md:px-4 lg:px-0 flex flex-col justify-start items-start lg:w-2/3 xl:w-3/3 2xl:w-3/3 px-8 sm:px-0">
            <div className="xl:mt-4 mt-2">
              <p className="text-4xl font-semibold leading-9 text-[#7a6e66]">
                SKYCLUB AND SKYDECK
              </p>
            </div>
            <div className="xl:mt-6 mt-4">
              <p className="tracking-wide text-justify font-normal leading-6 text-[#7a6e66]">
                You don’t have to live in a VEDAM Penthouse to enjoy the
                limitless view from the top. All residents have open-air and
                indoor access to the stunning panorama of Bellevue and beyond
                from the 20th floor rooftop. The SkyClub at VEDAM, a private
                parlor with full kitchen, fireplace and double-height ceilings
                opens out onto the landscaped SkyDeck at VEDAM with Flame Grill
                Stations—the first of its kind in downtown Bellevue. Also
                available to residents are the reservable Altitude Dining Room
                and Summit Room.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto py-2 sm:py-6 px-8 sm:px-8 md:px-16 amenityAnimationLeft">
        <div className="flex flex-col-reverse sm:flex-col lg:flex-row justify-center items-center 2xl:space-x-40 xl:space-x-34 lg:space-x-24 space-y-8 lg:space-y-0">
          <div className="md:px-12 lg:px-0 flex flex-col justify-start items-start lg:w-2/3 xl:w-3/3 2xl:w-3/3">
            <div className="xl:mt-4 mt-2">
              <p className="text-4xl font-semibold leading-9 text-[#7a6e66]">
                12 PEAK Fitness Center
              </p>
            </div>
            <div className="xl:mt-6 mt-4">
              <p className="tracking-wide text-justify font-normal leading-6 text-[#7a6e66]">
                Build up to balanced wellness in the fully equipped Peak Fitness
                Center and Harmony Yoga Studio. Here, workouts overlook a
                symphony of nature: wide open sky meeting mist-veiled mountains,
                dotted and surrounded by a diversity of spruce and maple trees.
              </p>
            </div>
          </div>
          <div>
            <img src="7.jpeg" className="aspect-[1.4/1] mb-4" alt="girl" />
          </div>
        </div>
      </div>

      <div className="mx-auto container py-16 px-6 md:px-16 animationRight">
        <div className="flex flex-col lg:flex-row justify-center items-center 2xl:space-x-40 xl:space-x-34 lg:space-x-24 space-y-8 lg:space-y-0">
          <div>
            <img src="1.jpeg" alt="girl" className="aspect-[1.4/1]" />
          </div>
          <div className="md:px-12 lg:px-0 flex flex-col justify-start items-start lg:w-2/3 xl:w-3/3 2xl:w-3/3">
            <div className="xl:mt-4 mt-2">
              <p className="text-4xl font-semibold leading-9 text-[#7a6e66]">
                SKYCLUB AND SKYDECK
              </p>
            </div>
            <div className="xl:mt-6 mt-4">
              <p className="tracking-wide text-justify font-normal leading-6 text-[#7a6e66]">
                You don’t have to live in a VEDAM Penthouse to enjoy the
                limitless view from the top. All residents have open-air and
                indoor access to the stunning panorama of Bellevue and beyond
                from the 20th floor rooftop. The SkyClub at VEDAM, a private
                parlor with full kitchen, fireplace and double-height ceilings
                opens out onto the landscaped SkyDeck at VEDAM with Flame Grill
                Stations—the first of its kind in downtown Bellevue. Also
                available to residents are the reservable Altitude Dining Room
                and Summit Room.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="dark:bg-gray-900">
        <div className="container mx-auto py-9 md:py-12 lg:py-24">
          <div className="relative mx-4">
            <img
              src="https://i.ibb.co/q5k5j57/bench-accounting-nvzv-OPQW0gc-unsplash-1-1.png"
              alt="A work table with house plants"
              className="w-full h-full hidden lg:block"
            />
            <img
              src="https://i.ibb.co/94jQFsV/bench-accounting-nvzv-OPQW0gc-unsplash-1-1.png"
              alt="A work table with house plants"
              className="hidden sm:block lg:hidden w-full h-full"
            />
            <img
              src="https://i.ibb.co/cJz8LZ2/bench-accounting-nvzv-OPQW0gc-unsplash-1-1.png"
              alt="A work table with house plants"
              className="sm:hidden w-full h-full"
            />

            <div className="absolute z-2 top-0 left-0 mx-4 sm:mx-0 mt-36 sm:mt-0 sm:py-20 md:py-28 lg:py-20 xl:py-28 sm:pl-14 flex flex-col sm:justify-start items-start">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#7a6e66] sm:w-8/12">
                Minimalist Furniture Design
              </h1>
              <p className="text-[#897c4a] text-xl font-semibold tracking-wide leading-6 mt-4 sm:mt-5 sm:w-5/12">
              Experience the Epitome of Elegance. Schedule a Private Tour.  
              </p>
              <NavLink to='/Enquire' >
              <button className="hidden sm:flex bg-gray-800 py-4 px-8 text-base font-medium text-white mt-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700 hover:text-white">
                Explore
              </button>
              </NavLink>
            </div>
            
            <NavLink to='/Enquire' >
            <button className="absolute bottom-0 sm:hidden dark:bg-white dark:text-gray-800 bg-gray-800 py-4 text-base font-medium text-white mt-8 flex justify-center items-center w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">
              Explore
            </button>
            </NavLink>
          </div>
        </div>
      </div> */}

      <GalleryCarousel />

      <Footer />
    </div>
  );
};

export default Amenities;
