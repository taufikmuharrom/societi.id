import { useState } from 'react'
import hero from '../../assets/illustartions/sprint_planning.png'
import societi from "../../assets/societi.png"
import { computer, report, certificate } from '../../assets/icons'
import { onlineLearning, rocketMan } from '../../assets/illustartions'
import { targetContent, programContent } from '../../data'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'


const Home = () => {

  const selectImage = (logo) => {
    if (logo === "computer") return computer
    if (logo === "report") return report
    return certificate
  }
  return (
    <div>
      <div className='bg-gradient-to-t  from-cyan-400 to-cyan-200 h-[35rem] md:h-[46rem]'>
        <div className="mx-auto lg:max-w-7xl px-4 md:px-8">
          <div className='flex pt-5 md:pt-20 flex-col-reverse md:flex-row md:justify-center items-center'>
            <div className='text-center md:text-left'>
              <div className='font-bold text-2xl md:text-5xl mb-5'>
                <h1 className='mb-3'>Menuju masyarakat</h1>
                <h1 className='mb-3'>berwasasan digital</h1>
                <h1>dan berjiwa sosial</h1>
              </div>
              <button className='bg-logo font-bold text-sm hover:bg-blue-100  py-3 px-8 rounded-lg text-white border-b-4 border-blue-100 hover:border-blue-300 transition duration-300"'>Gabung SocieTI</button>
            </div>
            <img src={hero} className="md:w-7/12"></img>
          </div>
        </div>
      </div>
      <div className="mx-auto my-8 px-8  md:my-20 lg:max-w-7xl">
        <h1 className='text-center text-3xl md:text-4xl md:pb-10 pb-7 font-bold md:font-semibold'>Tentang SocieTI</h1>
        <div className='flex flex-col-reverse md:flex-row justify-center items-center'>
          <div className='md:leading-8 leading-6 md:text-base text-sm md:w-2/3 text-justify'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt sapien consequat, pulvinar arcu vel, luctus velit. Nullam et imperdiet eros.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus mi eget condimentum tempor. Aenean non lorem vel libero iaculis accumsan eget
            non lectus. Etiam at risus augue. Donec quis rhoncus eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In
            semper a dui quis efficitur. Quisque vel varius odio, vitae posuere felis. Ut a dui at tortor blandit ultrices finibus quis turpis. Nam feugiat eget
            turpis vel pharetra. Aliquam erat volutpat. Phasellus ac urna aliquet, fringilla elit at, fringilla eros. Nunc dapibus neque vel imperdiet accumsan.
            Duis commodo elit et nisl lobortis tempor.
          </div>
          <div>
            <img src={societi} className="w-8/12 mx-auto mb-5 md:mb-0 " />
          </div>
        </div>
      </div>
      <div className="mx-auto my-8 md:my-0 md:mt-20 lg:max-w-7xl md:px-8">
        <h1 className='text-center text-3xl md:text-4xl pb-10 font-bold md:font-semibold'>Target</h1>
        <div className='md:mt-32 mt-12 grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-10 mx-8 md:mx-0 '>
          {
            targetContent.map((content, idx) => {
              return (
                <div key={"target" + idx} className="md:px-6 shadow-lg px-3 text-justify pt-12 text-sm md:text-base md:pt-32 pb-5 bg-cyan-100 rounded-lg relative ">
                  <img src={selectImage(content.logo)} className="w-2/5 md:w-9/12 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 -top-2" />
                  <h3 className='leading-7'>{content.description}</h3>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="mx-auto my-10 md:my-20 lg:max-w-7xl md:px-8">
        <h1 className='text-center text-3xl md:text-4xl pb-10 font-bold md:font-semibold'>Program</h1>
        <div className='mx-8 md:mx-0 grid-cols-1 md:grid-cols-3 gap-8 hidden md:grid'>
          {
            programContent.map((content, idx) => {
              return (
                <div key={"program" + idx} className="md:px-6 px-3  py-6 text-sm md:text-base bg-cyan-100 rounded-lg ">
                  <img className='w-9/12 md:w-10/12 mx-auto' src={onlineLearning}></img>
                  <h1 className='font-bold text-xl py-2'>{content.title}</h1>
                  <h3 className='text-left leading-6 md:leading-7'>{content.description}</h3>
                </div>
              )
            })
          }
        </div>
        <Carousel showStatus={false} showThumbs={false} autoPlay={true} swipeable={true} stopOnHover={true} className='md:hidden mx-8'>
          {
            programContent.map((content, idx) => {
              return (
                <div key={"program" + idx} className="md:px-6 px-3 pt-6 py-10 text-sm md:text-base bg-cyan-100 rounded-lg ">
                  <img className='w-9/12 md:w-10/12 mx-auto' src={onlineLearning}></img>
                  <h1 className='font-bold text-xl py-2'>{content.title}</h1>
                  <h3 className='text-left leading-6 md:leading-7'>{content.description}</h3>
                </div>
              )
            })
          }
        </Carousel>
      </div>
      <div className='bg-cyan-100'>
        <div className="mx-auto py-6 md:mt-32 lg:max-w-7xl px-8">
          <div className='flex md:flex-row flex-col pb-9 md:pb-0 justify-center items-center'>
            <div>
              <img src={rocketMan} className="w-10/12 mx-auto" />
            </div>
            <div className='md:w-7/12'>
              <h1 className='font-bold text-2xl md:text-4xl'>Yuk tumbuh bareng</h1>
              <div className='leading-8 my-5'>
                Kami percaya dengan semakin banyaknya orang yang meningkat skill digitalnya dan bertambahnya jiwa sosialnya,
                maka target menjadi indonesia digital akan semakin dekat.
              </div>
              <button className='bg-logo font-bold text-sm hover:bg-blue-100  py-3 px-8 rounded-lg text-white border-b-4 border-blue-100 hover:border-blue-300 transition duration-300"'>Gabung SocieTI</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home