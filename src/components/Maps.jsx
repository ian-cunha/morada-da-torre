import React from 'react';
const AddressMap = () => {
  return (
    <div className="google-map-code">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.554910069278!2d-34.9060555!3d-8.044737499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18fd50faffc7%3A0x4983fef54a11d79a!2sR.%20Benjamin%20Constant%2C%20159%20-%20Torre%2C%20Recife%20-%20PE%2C%2050710-150!5e0!3m2!1spt-BR!2sbr!4v1701324363703!5m2!1spt-BR!2sbr"
        width="800"
        height="450"
        frameBorder={0}
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex={0}></iframe>
    </div>
  );
}
export { AddressMap }