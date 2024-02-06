import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center px-8">
          <div className="relative bg-green-950 rounded-lg p-3 max-w-xl w-full  h-mx-4 md:mx-auto">
            <button
              className="absolute top-0 right-0 m-4 text-white text-sm"
              onClick={onClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <p className="text-lime-400 text-[25px] text-center pt-5">BUY TOKEN</p>
            <br />
            <h1 className='text-lime-400 font-black text-[50px] text-center pb-7 underline'>Not on sale yet.
           
            </h1>

            <button className='ring-2 bg-green-900 ring-green-500 group-hovering:ring-1 transition duration-300 text-white px-3 py-2 m-2 md:text-sm rounded md:font-sm hover:bg-green-400 ml-10'>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdn4j77PlNjj7ByXv7YinO-LhC2UBu1-5mkWyOq9Y2HeHHYfQ/viewform?usp=send_form">JOIN WISHLIST</a>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
