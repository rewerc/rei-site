import React from 'react';

const LogoTranstyled = ({ width = 200, height = 'auto' }) => {
  return (
    <img src="vectors/logo-transtyled.svg" alt="logo" style={{ height, width }} draggable={false} />
  )
}

export default LogoTranstyled;