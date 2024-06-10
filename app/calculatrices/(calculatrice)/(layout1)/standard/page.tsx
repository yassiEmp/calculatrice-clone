"use client"
import React from 'react';
import Button from '@/components/Button';
// a table of number or string value 

const CalculatorLayout = () => {
  const buttons = [
    '%', 'CE', 'C', '←',
    '1/x', 'x²', '²√x', '÷',
    '7', '8', '9', '×',
    '4', '5', '6', '−',
    '1', '2', '3', '+',
    '±', '0', ',', '='
  ];

  return (
    <div className='h-full w-full grid grid-cols-4 grid-rows-6 gap-1 p-2'>
      {buttons.map((name) => (
        <Button
          key={name}
          name={name}
        />
      ))}
    </div>
  );
};

export default CalculatorLayout;
