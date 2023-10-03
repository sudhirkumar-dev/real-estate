// LoadingSpinner.js

// import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="w-56 h-56 flex justify-center items-center border-4.5 border-black border-solid rounded-full border-[#0000] animate-spin">
      <div className="w-full h-full rounded-full border-[#dbdcef] border-[#0000] border-solid border-t-[#ff0000] animate-spin-reverse"></div>
    </div>
  );
};

export default LoadingSpinner;
