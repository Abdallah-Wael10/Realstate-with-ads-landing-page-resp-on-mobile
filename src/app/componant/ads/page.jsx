import React from 'react';

const BlackFridayAd = ({ onClose }) => {
  return (
    <section className="fixed inset-0 flex items-center justify-center px-4 z-50">
      <div className="bg-gradient-to-br from-sky-400 via-sky-400 to-violet-400 p-6 sm:p-10 rounded-2xl w-full max-w-md text-white flex flex-col items-center justify-between gap-6">
        <div className="flex flex-col items-center text-center">
          <span className="text-gray-200">Black Friday Sale</span>
          <span className="text-gray-200 text-4xl font-semibold">
            20% off every Product
          </span>
        </div>
        <button className="text-black bg-white hover:bg-gray-50 px-4 py-2 rounded-lg ease duration-300 flex gap-1 items-center group">
          <span>Buy now</span>
          <svg
            viewBox="0 0 256 256"
            height="1em"
            width="1em"
            className="group-hover:translate-x-1 transition-transform ease duration-200"
            role="img"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
        <button
          className="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg w-fit ease duration-300 mt-4"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </section>
  );
};

export default BlackFridayAd;
