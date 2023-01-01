import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../../data/404.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const NotFound = () => {



  return (
    <div className='mx-auto lg:max-w-7xl px-4 md:px-8'>
      <div className='py-32 text-center'>
        <div>
          <Lottie options={defaultOptions}
            height={300}
            width={300}
          />
        </div>
      </div>
    </div>
  )
}

export default NotFound