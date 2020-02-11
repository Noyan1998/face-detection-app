import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
  return(
    <div className='f3'>
      <p>
        {'This app is going to detect a face in an image, Enter URL below'}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />
          <button
            className='f4 w-30 grow link ph3 pv2 dib white bg-dark-blue'
            onClick={onSubmit}
          >Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;
