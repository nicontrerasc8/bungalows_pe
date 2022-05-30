import React from 'react';
import { SyncLoader } from 'react-spinners';

const LoadingContainer = () => {
  return <div className='loading-container'>
       <SyncLoader color={"#e93c3c"} size={30}/>
  </div>;
};

export default LoadingContainer;
