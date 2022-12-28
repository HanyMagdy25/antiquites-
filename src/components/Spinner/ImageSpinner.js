import React from 'react';
import "./Spinner.css";
import imgSpin from "./../../assets/logo.png"

function ImageSpinner() {
  return (
    <div className="imageSpinner">
      <img src={imgSpin} alt='ImageSpinner'/>
    </div>
  );
}

export default ImageSpinner;