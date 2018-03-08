import React from 'react';


const Select = ({children, inputValue, handleChange})=>(
  <select value={inputValue} onChange={handleChange} className="custom-select custom-select-lg mb-3">
    {children}
  </select>
)


export default Select
