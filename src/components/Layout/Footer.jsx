import React from 'react';

const Footer = () => {
  const footerYear = new Date().getFullYear();

  return (
    <footer className='p-4 footer bg-base-300 text-base-content footer-center'>
      <div>
        <p>Copyright © {footerYear} - All right reserved by althafdaa</p>
      </div>
    </footer>
  );
};

export default Footer;
