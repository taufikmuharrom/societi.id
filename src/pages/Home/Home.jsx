import { useEffect, useRef, useState } from 'react'
import hero from '../../assets/illustartions/sprint_planning.png'
import societi from "../../assets/societi.png"
import { computer, report, certificate } from '../../assets/icons'
import { onlineLearning, rocketMan } from '../../assets/illustartions'
import { targetContent, programContent } from '../../data'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import { useScreen } from '../../stores'
import Lottie from "lottie-react";
import animation from '../../json/email-animation.json'
import TextInput from '../../components/Forms/TextInput'

const Home = () => {
  const didUpdate = useRef(false)
  const [screenState, screenActions] = useScreen()
  const [nama, setNama] = useState('')
  const [no_telepon, setNoTelepon] = useState('')
  const [email, setEmail] = useState('')
  const [domisili, setDomisili] = useState('')
  const [informasi, setInformasi] = useState('')


  const selectImage = (logo) => {
    if (logo === "computer") return computer
    if (logo === "report") return report
    return certificate
  }

  useEffect(() => {
    if (didUpdate.current) return scrollToCoordinate(screenState.coordinateY)
    // scrollToCoordinate(0)
    didUpdate.current = true
  }, [screenState.coordinateY])

  const scrollToCoordinate = (coordinateY) => {
    window.scrollTo({
      top: coordinateY,
      behavior: 'smooth',
    })
  }

  return (
    <div>
      <div className='bg-gradient-to-t pt-20 md:pt-0 from-cyan-400 to-cyan-200 h-[39rem] md:h-[46rem]'>
        <div className="mx-auto lg:max-w-7xl px-4 md:px-8">
          <div className='flex pt-5 md:pt-20 flex-col-reverse md:flex-row md:justify-center items-center'>
            <div className='text-center md:text-left'>
              <div className='font-bold text-2xl md:text-5xl mb-5'>
                <h1 className='mb-3'>Menuju Masyarakat</h1>
                <h1 className='mb-3'>berwasasan digital</h1>
                <h1>dan berjiwa sosial</h1>
              </div>
              <button onClick={() => scollToRef.current.scrollIntoView()} className='bg-logo font-bold text-sm hover:bg-blue-100  py-3 px-8 rounded-lg text-white border-b-4 border-blue-100 hover:border-blue-300 transition duration-300"'>Gabung SocieTI</button>
            </div>
            <img src={hero} className="md:w-7/12"></img>
          </div>
        </div>
      </div>
      <div className="mx-auto my-8 px-8  md:my-20 lg:max-w-7xl" id='about'>
        <h1 className='text-center text-3xl md:text-4xl md:pb-10 pb-7 font-bold md:font-semibold'>Tentang SocieTI</h1>
        <div className='flex flex-col-reverse md:flex-row justify-center items-center'>
          <div className='md:leading-8 leading-6 md:text-base text-sm md:w-2/3 text-justify'>
            SocieTI (Social Education IT) adalah komunitas IT yang fokus di kegiatan edukasi dan sosial.
            SocieTI di dirikan untuk membuka kesempatan bagi ruang publik atau masyarakat yang mempunyai minat belajar hal baru mengenai bidang IT. SocieTI juga memberikan kesempatan bagi IT Profesional untuk menyalurkan kemampuannya bagi masyarakat luas.
            Melangkah menuju IT professional yang berkarakter, berjiwa sosial tinggi dan bermanfaat untuk ruang publik adalah tujuan yang harus di capai oleh SocieTI.
            Untuk mencapai tujuan tersebut, SocieTI memiliki banyak program yang menarik dan berdampak langsung untuk member juga masyarakat luas.
          </div>
          <div>
            <img src={societi} className="w-8/12 mx-auto mb-5 md:mb-0 " />
          </div>
        </div>
      </div>
      {/* <div className="mx-auto my-8 md:my-0 md:mt-20 lg:max-w-7xl md:px-8">
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
      </div> */}
      <div className="mx-auto my-10 md:my-20 lg:max-w-7xl md:px-8" >
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

      <div className="mx-auto py-6 md:mt-32 lg:max-w-7xl px-8">
        <h1 className='text-center text-3xl md:text-4xl md:pb-10 font-bold md:font-semibold'>Hubungi Kami</h1>
        <div className='mx-auto md:flex justify-center items-center gap-4 py-10 md:w-9/12 rounded-xl md:bg-cyan-50 md:shadow-xl'>
          <div className='w-auto md:w-[25rem]'><Lottie animationData={animation} loop={true} />
          </div>
          <div className='rounded-lg border bg-white grid grid-cols-1 gap-5 w-full md:w-96 border-gray-200 p-4'>
            <TextInput
              label="Nama"
              border
              defaultValue={nama}
              placeholder="Tulis nama kamu"
              handleChange={(event) => {
                setNama(event.target.value)
              }}
              onEnter={() => { }}
            />
            <TextInput
              label="Email"
              border
              defaultValue={email}
              placeholder="Tulis email kamu"
              handleChange={(event) => {
                setEmail(event.target.value)
              }}
              onEnter={() => { }}
            />
            <TextInput
              label="No Telepon"
              border
              defaultValue={no_telepon}
              placeholder="Tulis no telepon kamu"
              handleChange={(event) => {
                setNoTelepon(event.target.value)
              }}
              onEnter={() => { }}
            />
            <TextInput
              label="Domisili"
              border
              defaultValue={domisili}
              placeholder="Domisili kamu"
              handleChange={(event) => {
                setDomisili(event.target.value)
              }}
              onEnter={() => { }}
            />
            <div className='w-full'>
              <label className="text-xs font-medium pl-3 text-neutral-500 text-left block mb-1">Pesan</label>
              <textarea value={informasi} onChange={(event) => setInformasi(event.target.value)} className='rounded-lg border border-neutral-100 w-full resize-none py-2 px-3 outline-none text-sm h-32' />
            </div>
            <button onClick={() => scollToRef.current.scrollIntoView()} className='bg-logo font-bold text-sm hover:bg-blue-100  py-3 px-8 rounded-lg text-white border-b-4 border-blue-100 hover:border-blue-300 transition duration-300"'>Kirim Pesan</button>
          </div>
        </div>
      </div>
      <div className='bg-cyan-100'>
        <div className="mx-auto py-6 md:mt-32 lg:max-w-7xl px-8">
          <div className='flex md:flex-row flex-col pb-9 md:pb-0 justify-center items-center'>
            <div>
              <img src={rocketMan} className="w-10/12 mx-auto" />
            </div>
            <div className='md:w-7/12'>
              <h1 className='font-bold text-2xl md:text-4xl'>Yuk Ngimpact Bareng!</h1>
              <div className='leading-8 mt-5 mb-6 md:text-lg'>
                Join SocieTI untuk bersama-sama kita belajar dan berkarya menuju Masyarakat berwasasan digital dan berjiwa sosial. <br /> <span className='font-semibold'>"More People More Impact"</span>
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