import React from 'react';

const Select = ({children, inputValue, handleChange, defaultLabel})=>(
  <select onChange={handleChange} value={inputValue} className="custom-select custom-select-lg mb-3">
    {children}
  </select>
)


export default Select
