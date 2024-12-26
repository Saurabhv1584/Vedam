import React from "react";
import "./style.css";
import { Modal, Splitter } from "antd";

const Banner = (props) => {
  const { isBannerOpn, setIsBannerOpn } = props;

  return (
    <Modal
      open={isBannerOpn}
      onCancel={() => setIsBannerOpn(false)}
      footer={null}
      width={1000}
      closable={false}
      className="banner_modal"
    >
      <Splitter
        style={{
          height: 500,
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          overflow: "hidden"
        }}
      >
        <Splitter.Panel defaultSize="50%">
          <div className="absolute top-0 left-0">
            <button onClick={() => setIsBannerOpn(false)} className="w-10 h-10 flex items-center justify-center text-black text-xl focus:outline-none">
              &times;
            </button>
          </div>

          <div className="px-6 pl-12 xl:px-0 h-full flex justify-center items-center overflow-hidden">
            <div className="items-center justify-between md:flex-row flex-col py-12 space-y-6 md:space-y-0 w-full">
              <div className="flex justify-center items-center flex-col md:px-6">
                <div className="">
                  <h1 className="font-visby font-thin text-[14px] tracking-[0.3em] uppercase text-[#7a6e66]">
                    Exciting News
                  </h1>
                </div>
                <div className="mt-4">
                  <p className="font-hues font-thin text-[32px] uppercase text-[#7a6e66] text-center mb-0 tracking-[0.1em] [text-stroke:0.5px_#7a6e66]">
                    Vedam homes is now Open Move in Today
                  </p>
                </div>
                <div className="mt-8 flex justify-center items-center w-full">
                  <button className="border border-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 md:w-96 w-full hover:bg-black text-base font-medium leading-4 bg-gray-800 py-4 text-white">BOOK A TOUR</button>
                </div>
              </div>
            </div>
          </div>
        </Splitter.Panel>
        <Splitter.Panel>
          <div>
            <img alt="Banner" src="husky_2.png"></img>
          </div>
        </Splitter.Panel>
      </Splitter>
    </Modal>
  );
};

export default Banner;
