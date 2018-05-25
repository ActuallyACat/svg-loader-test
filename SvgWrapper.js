import React from 'react';

const SvgWrapper = ({
  icon='empty-box',
  width='35px',
  height='35px'
}) => (
  <svg width={width} height={height}>
    <use href={`#${icon}`}></use>
  </svg>
);

export default SvgWrapper;