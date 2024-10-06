import React from 'react'
import logo from '/solup.png';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0  bg-white shadow-md text-white py-4">
    <div className="container mx-auto flex justify-center items-center">
      {/* Logo in the center */}
      <img src={logo} alt="Company Logo" className="h-8" />
    </div>
  </footer>
  )
}

export default Footer