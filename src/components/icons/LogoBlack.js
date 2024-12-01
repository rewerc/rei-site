import React from 'react';

const LogoBlack = ({ width = 200, height = 'auto' }) => {
  return (
    <img src="vectors/logo-black.svg" alt="logo" style={{ height, width }} draggable={false} />
  )
}

export default LogoBlack;