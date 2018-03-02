import React from 'react';

const Card = ({children, className})=>(
  <div className={className}>
    <div className="card">
      {children}
    </div>
  </div>
)

export default Card
