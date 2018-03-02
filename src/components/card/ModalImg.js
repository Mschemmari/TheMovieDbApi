import React from 'react';

const ModalImg = ({src})=>(
  <img class="card-img-top" src={src} alt="Card cap"/>
)

ModalImg.defaultProps = {
  src: 'http://via.placeholder.com/350x150'
};

export default ModalImg
