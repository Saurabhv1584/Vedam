import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import './style.css';

const GalleryCarousel = () => {
  return (
    <div className="2xl:mx-auto 2xl:container flex justify-center animationRight">
      <div className="2xl:px-20 px-6 py-12 w-full lg:w-9/10">
        {/* Carousel for Small-Sized Screen */}
        <CarouselProvider
          className="relative block sm:hidden"
          //   naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={3}
          visibleSlides={1}
          step={1}
          infinite={true}
          naturalSlideWidth={400}
          naturalSlideHeight={700}
        >
          <div className="js-flickity flex justify-center items-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-8 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <Slider>
              <Slide index={0}>
                <div className="gallery-cell lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-full">
                  <div className="relative w-full h-full lg:block hidden">
                    <img
                      src="2.jpeg"
                      alt="sitting area"
                      className="object-center object-cover w-full h-full"
                    />
                    <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                      <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                        Lounge Interior
                      </h1>
                    </div>
                  </div>
                  <div className="relative w-full h-full lg:hidden">
                    <img
                      src="https://i.ibb.co/tMB5CZW/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-3-1.png"
                      alt="sitting area"
                      className="object-center object-cover w-full h-full"
                    />
                    <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                      <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                        Lounge Interior
                      </h1>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide index={1}>
                <div className="gallery-cell lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-full">
                  <div className="relative w-full h-full lg:block hidden">
                    <img
                      src="5.jpeg"
                      alt="chairs"
                      className="object-center object-cover w-full h-full"
                    />
                    <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                      <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                        Lounge Interior
                      </h1>
                    </div>
                  </div>
                  <div className="relative w-full h-full lg:hidden">
                    <img
                      src="8.jpeg"
                      alt="chairs"
                      className="object-center object-cover w-full h-full"
                    />
                    {/* <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                      <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                        Lounge Interior
                      </h1>
                    </div> */}
                  </div>
                </div>
              </Slide>
              <Slide index={2}>
                <div className="gallery-cell lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-full">
                  <div className="relative w-full h-full lg:block hidden">
                    <img
                      src="9.jpeg"
                      alt="chair"
                      className="object-center object-cover w-full h-full"
                    />
                    {/* <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                      <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                        Lounge Interior
                      </h1>
                    </div> */}
                  </div>
                  <div className="relative w-full h-full lg:hidden">
                    <img
                      src="10.jpeg"
                      alt="chair"
                      className="object-center object-cover w-full h-full"
                    />
                    {/* <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                      <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                        Lounge Interior
                      </h1>
                    </div> */}
                  </div>
                </div>
              </Slide>
            </Slider>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-8 right-0 mr-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* Carousel for Medium and Large-Sized Screen */}
        <CarouselProvider
          className="relative hidden sm:block"
          //   naturalSlideWidth={100}
          naturalSlideHeight={500}
          naturalSlideWidth={400}
          isIntrinsicHeight={true}
          totalSlides={3}
          visibleSlides={1}
          infinite={true}
          currentSlide={1}
          step={1}
          interval={2000}
          isPlaying
          touchEnabled
        >
          <div className="js-flickity flex justify-center items-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-8 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <Slider className="carousel__sliderLarge">
              <Slide className="carousel__inner-slideLarge" index={0}>
                <div className="gallery-cell w-full h-full">
                  <div className="relative w-full h-full lg:block hidden">
                    <img
                      src="2.jpeg"
                      alt="sitting area"
                      className="object-center object-cover w-full h-full"
                    />
                    {/* <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                      <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                        Lounge Interior
                      </h1>
                    </div> */}
                  </div>
                  <div className="relative w-full h-full lg:hidden">
                    <img
                      src="https://i.ibb.co/tMB5CZW/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-3-1.png"
                      alt="sitting area"
                      className="object-center object-cover w-full h-full carousel_image"
                    />
                    {/* <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                      <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                        Lounge Interior
                      </h1>
                    </div> */}
                  </div>
                </div>
              </Slide>
              <Slide className="carousel__inner-slideLarge" index={1}>
                <div className="gallery-cell w-full h-full">
                  <div className="relative w-full h-full lg:block hidden">
                    <img
                      src="5.jpeg"
                      alt="chairs"
                      className="object-center object-cover w-full h-full"
                    />
                    {/* <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                      <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                        Lounge Interior
                      </h1>
                    </div> */}
                  </div>
                  <div className="relative w-full h-full lg:hidden">
                    <img
                      src="8.jpeg"
                      alt="chairs"
                      className="object-center object-cover w-full h-full"
                    />
                    {/* <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                      <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                        Lounge Interior
                      </h1>
                    </div> */}
                  </div>
                </div>
              </Slide>
              <Slide className="carousel__inner-slideLarge" index={2}>
                <div className="gallery-cell w-full h-full">
                  <div className="relative w-full h-full lg:block hidden">
                    <img
                      src="9.jpeg"
                      alt="chair"
                      className="object-center object-cover w-full h-full"
                    />
                    {/* <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                      <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                        Lounge Interior
                      </h1>
                    </div> */}
                  </div>
                  <div className="relative w-full h-full lg:hidden">
                    <img
                      src="10.jpeg"
                      alt="chair"
                      className="object-center object-cover w-full h-full"
                    />
                    {/* <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                      <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                        Lounge Interior
                      </h1>
                    </div> */}
                  </div>
                </div>
              </Slide>
            </Slider>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-8 right-0 mr-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>

      <style>
        {`
                    .gallery-cell {
                        height: 550px;
                        padding-right:15px;
                    }
                        .carousel_image{
                        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
                        }
                    @media (min-width: 300px) and (max-width: 420px) {
                        .gallery-cell {
                            height: 286px !important;
                            
                        }
                    }
                    
                    @media (max-width: 640px) {
                        .gallery-cell {
                            padding-right:0;
                        }
                    }

                    .carousel__sliderLarge {
                        padding-left: 5%;
                        padding-right: 5%;
                    }

                    /* gives us the illusion of spaces between the slides */
                    .carousel__inner-slideLarge {
                        width: calc(100% - 20px);
                        height: calc(100% - 20px);
                        left: 10px;
                        top: 10px;
                        
                    }
                `}
      </style>
    </div>
  );
};

export default GalleryCarousel;

/* Install pure-react-carousel using -> npm i pure-react-carousel */
