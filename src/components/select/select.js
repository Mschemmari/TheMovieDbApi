import React from 'react';


const Select = ({children, inputValue, handleChange, handleApi})=>(
  <select onChange={handleChange} onSelect={handleApi} value={inputValue} className="custom-select custom-select-lg mb-3">
    {children}
  </select>
)


export default Select
