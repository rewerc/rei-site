import React from 'react';

const LogoTeal = ({ width = 200, height = 'auto' }) => {
  return (
    <img src="vectors/logo-transparent.svg" alt="logo" style={{ height, width }} draggable={false} />
  )
}

export default LogoTeal;