import React from 'react';

const LogoWhite = ({ width = 200, height = 'auto' }) => {
  return (
    <img src="vectors/logo-w-transparent.svg" alt="logo" style={{ height, width }} draggable={false} />
  )
}

export default LogoWhite;