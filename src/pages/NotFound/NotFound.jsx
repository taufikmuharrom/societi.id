import Lottie from "lottie-react";
import animation from '../../data/404.json'

const NotFound = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='w-auto py-32 md:w-[39rem]'>
        <Lottie animationData={animation} loop={true} />
      </div>
    </div>
  )
}

export default NotFound