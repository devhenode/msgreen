import { useState, useEffect } from "react";
import { useRef } from 'react';

const Accordion = ({ id, title, content, isOpen, onToggle }) => {
  const handleClick = () => {
    onToggle(id);
  };

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const lineRef = useRef(null); // Create a ref for the line element

  useEffect(() => {
    // Update line position when accordion opens/closes
    if (lineRef.current) {
      const svgContainer = lineRef.current.closest('.hs-accordion');
      const svgPosition = svgContainer.getBoundingClientRect();
      lineRef.current.setAttribute('d', `M${svgPosition.right - 4} ${svgPosition.bottom + 4} h4`); // Adjust as needed
    }
  }, [isOpen]);

  return (
    <div
      className={`hs-accordion ${
        isOpen ? "active" : ""
      }`}
      id={id}
    >
      <button
        className={`hs-accordion-toggle ${
          isOpen ? "hs-accordion-active:text-white transition-all duration-300 ease-in-out" : "transform transition-all duration-300 ease-in-out"
        } 
        py-3 inline-flex gap-x-3 w-full font-semibold text-start text-lime-400 
        hover:text-lime-400 rounded-lg disabled:opacity-50 disabled:pointer-events-none 
        dark:hs-accordion-active:text-blue-500 dark:text-lime-400 dark:hover:text-lime-400 
        dark:focus:outline-none dark:focus:text-lime-400`}
        onClick={handleClick}
        aria-controls={`${id}-collapse`}
      >
        <span className="transition-all duration-300 ease-in-out">
          <svg
            ref={lineRef}
             className={`${
              isOpen
                ? "rotate-180 transition-all duration-300 ease-in-out"
                : "relative fill-current bg-lime-400 text-green-800 rounded-full h-6 w-6  transform transition-transform duration-500 animate-pulse"
            } `}
            // xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            // strokeLinecap="round"
            // strokeLinejoin="round"
          >
            <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
          </svg>
         
          <svg
            className={`hs-accordion-active:bg-lime-500 text-green-900 hidden w-4 h-4`}
            // xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </span>

        {title}
      </button>

      <div
        id={`${id}-collapse`}
        className={`hs-accordion-content ${
          isOpen
            ? "w-full overflow-hidden transform transition-all mx-8 my-2 duration-300 ease-out"
            : "hidden"
        }`}
        aria-labelledby={id}
      >
        <p className="text-gray-800 dark:text-gray-200 transition-all duration-300 ease-out">{content}</p>
      </div>
    </div>
  );
}

export default Accordion;