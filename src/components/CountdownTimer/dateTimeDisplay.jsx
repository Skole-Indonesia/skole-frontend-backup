import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={`flex justify-center gap-x-2 items-center text-base font-normal text-black md:text-2xl ${isDanger} ? 'bg-yellow-200' : 'bg-black`}>
      <h1 className='text-red-500 font-semibold'>{value}</h1>
      <span>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
