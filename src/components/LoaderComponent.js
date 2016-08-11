'use strict';

import React from 'react';

require('styles//Loader.css');

let LoaderComponent = (props) => (
  <div className='cssload-loader'>
    <div className='cssload-inner cssload-one'></div>
    <div className='cssload-inner cssload-two'></div>
    <div className='cssload-inner cssload-three'></div>
  </div>
);

LoaderComponent.displayName = 'LoaderComponent';

// Uncomment properties you need
// LoaderComponent.propTypes = {};
// LoaderComponent.defaultProps = {};

export default LoaderComponent;
