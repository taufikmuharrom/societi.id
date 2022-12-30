import hero from '../../assets/illustartions/disscussion.png'

const Home = () => {
  return (
    <div>
      <div className='bg-gradient-to-t from-cyan-400 to-cyan-200 h-[30rem] md:h-[34rem]'>
        <div className="mx-auto lg:max-w-7xl px-4 md:px-8">
          <div className='flex flex-col-reverse md:flex-row md:justify-center items-center'>
            {/* <div className='my-auto md:text-4xl text-xl font-bold'>
              <h1>Sendiri mungkin bisa membuat</h1>
              <h1>langkah lebih cepat</h1>
              <h1>Tetapi bersama-sama membuat</h1>
              <h1>langkah lebih jauh</h1>
            </div> */}

            <div className='text-center md:text-left'>
              <h1 className='font-bold  text-2xl md:text-5xl mb-3'>Menuju Tak Terbatas <br />dan melampauinya</h1>
              <button className='bg-logo font-bold md:text-xl hover:bg-blue-100  py-3 px-8 rounded-lg text-white border-b-4 border-blue-100 hover:border-blue-300 transition duration-300"'>Gabung</button>
            </div>
            <img src={hero} className="md:w-1/2"></img>
          </div>
        </div>
      </div>
      <div className="h-[32rem] mx-auto lg:max-w-7xl">
        PART 2
      </div>
    </div>
  )
}

export default Home