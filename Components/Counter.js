import React, { useEffect, useState } from 'react'

const Counter = ({Count, SubstractCounter, AddToCounter}) => {

  return <div className='counter'>
    <button className='btn-primary' onClick={SubstractCounter}>
        -
    </button>
    {Count}
    <button className='btn-primary' onClick={AddToCounter}>
        +
    </button>
  </div>
}

export default Counter