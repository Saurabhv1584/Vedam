import React from "react";
import "./style.css";
import Navbar from "../Coponents/navbar";
import Footer from "../Coponents/footer";
import { NavLink } from "react-router-dom";

const WhatSetUsApart = () => {
  return (
    <div className="bg-[#F5F0E9]">
      <Navbar />

      <div className="py-12 setUsApartAnimationLeft">
        <div className=" mx-auto px-6 flex flex-col md:flex-row items-center justify-center">
          {/* Text Section */}
          <div className="flex items-center flex-col px-4 text-center">
            {/* <p className="text-4xl font-bold leading-9 text-[#7a6e66] uppercase tracking-wide mb-4">
              Experience the Vedam difference
            </p> */}
            <h1 className="focus:outline-none font-bold md:text-5xl text-3xl leading-tight text-gray-800 mb-4">
              Experience the
              <span className="font-normal italic"> Vedam difference </span>
            </h1>
            <p
              className="font-sans uppercase text-center text-[#7a6e66] tracking-[0.2em] 
            leading-[2.1] w-[90%] max-w-[1100px] font-light text-[32px] 
            word-spacing-[-0.25em]"
            >
              Vedam Homes isn't just building homes; we're building trust,
              fostering communities, and creating legacies. We invite you to
              experience the Vedam difference.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto px-6 lg:mx-auto relative mt-4 xl:px-20 lg:px-16 md:px-12 md:flex items-center gap-8 setUsApartAnimationRight">
      <img
          className="w-full mt-4 sm:mt-6 md:mt-0 object-fill md:w-2/4 md:-ml-4 lg:-ml-4 xl:ml-0 setUsApartAnimationRight md:h-[85vh]"
          src="SITTING_LOUNGE_VIEW.jpg"
          alt="Sample"
        />
        <div className="text-color flex justify-center flex-col w-4/4 md:w-1/2  pt-4 lg:pt-2 xl:pt-10 md:pl-8 md:pr-12 pl-0 pr-0 text-end md:text-left">
          {/* <h1 className="text-4xl md:text-4xl lg:text-4xl w-11/12 lg:w-11/12 xl:w-full xl:text-4xl text-gray-900 font-extrabold f-f-l">
            Unwavering Credibility
          </h1> */}
                      <h1 className="focus:outline-none md:w-60 font-bold md:text-4xl text-3xl leading-tight text-gray-800">
                      Unwavering<span className="font-normal italic"> Credibility</span>
            </h1>
          <div className="f-f-r text-base lg:text-base pb-10 sm:pb-0 pt-6 sm:pt-10 xl:pt-6">
            <h2>
              Credibility isn't built overnight; it's earned through consistent
              dedication to transparency, integrity, and delivering on our
              promises. At Vedam Homes , we understand that a home is a
              significant investment, both financially and emotionally. We earn
              our clients' trust by maintaining open communication, adhering to
              agreed-upon timelines, and upholding the highest standards of
              professionalism in all our dealings. Our track record speaks for
              itself, demonstrating our commitment to excellence and client
              satisfaction.
            </h2>
          </div>
        </div>
      </div>

      <div className="lg:px-20 md:px-6 px-4 md:py-12 sm:py-8 py-4 setUsApartAnimationLeft">
        <div className="lg:flex items-center justify-between">
          <div className="flex flex-col items-center lg:w-1/3 mt-4">
            <h1 className="focus:outline-none md:w-60 font-bold md:text-4xl text-3xl leading-tight text-gray-800">
              Synergistic<span className="font-normal italic"> Teamwork</span>
            </h1>
            <p className="text-base leading-6 mt-4 text-center text-gray-600">
              Behind every exceptional Vedam home is a team of dedicated experts
              working in perfect harmony. We believe in the power of
              collaboration, bringing together the finest contractors, interior
              designers, architects, and civil engineers. This multidisciplinary
              approach ensures that every aspect of your home, from the
              structural integrity to the aesthetic appeal, is meticulously
              planned and flawlessly executed. We foster a culture of mutual
              respect and open communication, ensuring that every member of the
              team is aligned with our vision of creating exceptional living
              spaces.
            </p>
          </div>
          <img
          className="w-full mt-4 sm:mt-6 md:mt-0 object-fill md:w-2/4 md:-ml-4 lg:-ml-4 xl:ml-0 setUsApartAnimationRight md:h-[85vh]"
          src="SITTING_LOUNGE_VIEW.jpg"
          alt="Sample"
        />
        </div>
      </div>

      <div
        className="py-4 sm:py:14 md:py:20 2xl:px-0 lg:px-12 sm:px-4 2xl:mx-auto setUsApartAnimationRight"
        // style={{ height: 1000 }}
      >
        <div className="md:flex items-center justify-between w-full sm:px-8 px-4">
          <div className="flex flex-col items-center xl:w-1/3 md:w-1/2 w-full">
            <h1 className="focus:outline-none md:w-60 font-bold md:text-4xl text-3xl leading-tight text-gray-800">
              A Sense of<span className="font-normal italic"> Ownership </span>
            </h1>
            <p
              role="contentinfo"
              className="focus:outline-none leading-6 mt-4 sm:mt-8 text-gray-600 2xl:pr-24 xl:pr-0 sm:pr-12 text-center"
            >
              At Vedam Homes , we don't just build houses; we craft homes. We
              instill a sense of ownership in every member of our team, from the
              ground level to the management, so that each project is treated
              with the utmost care and attention to detail. This sense of
              ownership translates into superior quality construction,
              meticulous craftsmanship, and a relentless pursuit of perfection.
              We take pride in every home we build, as if it were our own.
            </p>
          </div>
          <div className="xl:w-4/6 md:w-1/2 w-full xl:pl-48">
            <div className="w-full">
              <img
                src="11.jpg"
                alt="Purple flowers on a book"
                className="w-full mt-8 sm:mt-0 "
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto px-6 lg:mx-auto relative mt-4 xl:px-20 lg:px-16 md:px-12 md:flex items-center gap-8 setUsApartAnimationRight">
      <img
          className="w-full mt-4 sm:mt-6 md:mt-0 object-fill md:w-2/4 md:-ml-4 lg:-ml-4 xl:ml-0 setUsApartAnimationRight md:h-[85vh]"
          src="BALCONY_VIEW.jpg"
          alt="Sample"
        />
        <div className="text-color flex justify-center flex-col w-4/4 md:w-1/2  pt-4 lg:pt-2 xl:pt-10 md:pl-8 md:pr-12 pl-0 pr-0 text-end md:text-left">
          <h1 className="text-4xl md:text-4xl lg:text-4xl w-11/12 lg:w-11/12 xl:w-full xl:text-4xl text-gray-900 font-extrabold f-f-l">
            Deep-Rooted Belief
          </h1>
          <div className="f-f-r text-base lg:text-base pb-10 sm:pb-0 pt-6 sm:pt-10 xl:pt-6">
            <h2>
              Our belief in the potential of every project fuels our passion and
              drives us to exceed expectations. We believe in the power of
              innovative design, sustainable practices, and creating communities
              that thrive. This belief is the driving force behind our
              commitment to continuous improvement, pushing the boundaries of
              what's possible in real estate development. We don't just build
              homes; we build legacies.
            </h2>
          </div>
        </div>
      </div>

      <div className="mx-auto px-6 lg:mx-auto relative mt-4 xl:px-20 lg:px-16 md:px-12 md:flex items-center gap-8 setUsApartAnimationRight">
        <div className="text-color flex justify-center flex-col w-4/4 md:w-1/2  pt-4 lg:pt-2 xl:pt-10 md:pl-8 md:pr-12 pl-0 pr-0 text-end md:text-left">
          <h1 className="text-4xl md:text-4xl lg:text-4xl w-11/12 lg:w-11/12 xl:w-full xl:text-4xl text-gray-900 font-extrabold f-f-l">
            Uncompromising Ethics
          </h1>
          <div className="f-f-r text-base lg:text-base pb-10 sm:pb-0 pt-6 sm:pt-10 xl:pt-6">
            <h2>
              Ethical conduct is the cornerstone of our business. We adhere to
              the highest ethical standards in all our operations, ensuring
              fairness, transparency, and integrity in every interaction. We
              believe in building long-term relationships based on trust and
              mutual respect. Our commitment to ethics extends to our dealings
              with clients, partners, and the communities we serve.
            </h2>
          </div>
        </div>
        <img
          className="w-full mt-4 sm:mt-6 md:mt-0 object-fill md:w-2/4 md:-ml-4 lg:-ml-4 xl:ml-0 setUsApartAnimationRight md:h-[85vh]"
          src="bulding_outside_2.jpg"
          alt="Sample"
        />
      </div>

      <div className="sm:mx-auto  px-6 xl:px-0">
            <div className="flex items-center justify-between md:flex-row flex-col py-12 space-y-6 md:space-y-0 w-full">
                <div className="hidden md:block">
                    <img className="hidden xl:block w-full" src="https://i.ibb.co/ZcSmVGf/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1.png" alt="behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1" />
                    <img className="xl:hidden w-full" src="https://i.ibb.co/mBk8myg/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1-1.png" alt="behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1-1" />
                </div>
                <div className="flex justify-center items-center flex-col xl:w-2/5 md:px-6 sm:w-3/4 md:w-2/4">
                    <div className="">
                        <h1 className="xl:text-4xl text-3xl font-semibold leading-9 text-gray-800">What Set Us Apart!</h1>
                    </div>
                    <div className="mt-4">
                        <p className="xl:text-xl text-base leading-7 text-center text-gray-600">Vedam Homes isn't just building homes; we're building trust, fostering communities, and creating legacies.  We invite you to experience the Vedam difference.</p>
                    </div>
                </div>
                <div className="flex md:w-auto w-full justify-center flex-row space-x-4 md:space-x-0">
                    <div className="w-full">
                        <img className="hidden xl:block w-full" src="https://i.ibb.co/kg4KPBG/sven-brandsma-Qz6-Zx4-Rjd-D8-unsplash-1.png" alt="behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1" />
                        <img className="xl:hidden w-full" src="https://i.ibb.co/JjMcGH1/sven-brandsma-Qz6-Zx4-Rjd-D8-unsplash-1.png" alt="sven-brandsma-Qz6-Zx4-Rjd-D8-unsplash-1" />
                    </div>
                    <div className="md:hidden w-full">
                        <img className="hidden xl:block w-full" src="https://i.ibb.co/ZcSmVGf/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1.png" alt="behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1" />
                        <img className="xl:hidden w-full" src="https://i.ibb.co/mBk8myg/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1-1.png" alt="behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1-1" />
                    </div>
                </div>
            </div>
        </div>

      <Footer />
    </div>
  );
};

export default WhatSetUsApart;
