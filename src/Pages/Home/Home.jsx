import React from 'react'
import './home.css'
import { CiSettings, CiSearch } from "react-icons/ci";
import { MdNotificationAdd } from "react-icons/md";
import footbalGround from '../../assets/images/carousel/footbalGround.jpg';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Shazam from '../../assets/images/carousel/Shazam.jpg';
import patch from '../../assets/images/carousel/assassins-creed-valhalla-patch.jpg';
import AtomicHeart from '../../assets/images/carousel/Atomic-Heart.jpg';
import image2021 from '../../assets/images/carousel/2021-03-10-image.jpg';
import { RxDotFilled } from 'react-icons/rx';
import { playOptions } from '../../assets/constants';
function Home() {

  return (
    <>
      <div className="w-full h-full">
        <section className="header w-full">
          <IconSection />
          <div className='items-center h-16'>
            {/* Header Section */}
            {/* Search bar */}
            <SearchBar />
            {/* icon section */}
            {/* <IconSection /> */}
          </div>
          <ImageCarousel />
          <div className='flex h-4'></div>
          {/* <div className="main"> */}
        </section>
        <section className="populargame mt-5 h-12 w-[90%] lg:flex-row sm:flex-col ml-auto mr-auto flex justify-between">
          <h1 className='text-searchbox ml-10 font-bold text-3xl'>Popular Games</h1>
          <select onChange={() => { }} value=""
            className='bg-searchbox text-gray-700 p-4 text-sm rounded-lg outline-none sm:mt-0 mt-3 w-44 z-50'
          >
            {playOptions.map((genre, index) =>
              <option key={index} value={genre.value}>{genre.title}</option>
            )}
          </select>
        </section>
        <section className="grid">
          <h1 className='text-searchbox text-sm'>Popular Games</h1>
        </section>
      </div>

    </>

  )
}
const ImageCarousel = () => {
  const slides = [footbalGround, Shazam, patch, AtomicHeart, image2021];
  const [currentIndex, setCurrentIndex] = React.useState(2);
  const [seconds, setSeconds] = React.useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const index = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  }
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const index = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  }
  const openPlayingGames = () => {

  }
  // window.setInterval(() =>
  // {
  //   nextSlide();
  // }, 5000);
  return (
    //carousel
    <div className="carousel max-w-[1700px] h-[768px] w-full mt-1 m-auto py-10 z-10 px-4 relative group">
      <div style={{ backgroundImage: `url(${slides[currentIndex]})` }} className="carousel-inner absolute w-full h-full top-1 rounded-2xl bg-center bg-cover duration-500">
        {/* left arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          {/* <BsChevronLeft size={30} className='absolute top-1/2 left-4 text-4xl text-white z-50' /> */}
          <BsChevronLeft size={30} onClick={prevSlide} />
        </div>
        {/* right arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          {/* <BsChevronRight size={30} className='absolute top-1/2 right-4 text-4xl text-white z-50' /> */}
          <BsChevronRight size={30} onClick={nextSlide} />
        </div>

      </div>
      <div className="absolute flex bottom-0 ml-[50%] justify-center z-30 py-0">
        {
          slides.map((slide, index) => {
            return (
              <div className={`dot ${index === currentIndex ? 'active' : ''} text-2xl cursor-pointer`} key={index}>
                <RxDotFilled size={20} className='text-colordot' />
              </div>
            )
          })
        }
      </div>
      <div className="flex justify-end absolute bottom-9 right-8 lg:mt-auto pl-7 items-end z-100">
        <button className="py-2 px-3  bg-searchbox outline-none hover:bg-gray-500 hover:text-gray-50 text-gray-900 rounded-full" onClick={openPlayingGames}>
          Play The Game</button>
      </div>
    </div>

  )
}
const IconSection = () => {
  return (
    <div className="flex justify-end m-0 text-gray-600">
      <div className="icon p-3 mr-2 mt-2 bg-searchbox rounded-3xl hover:bg-gray-500 text-green-900">
        <CiSettings size={32} />
      </div>
      <div className="icon p-3 mt-2 relative bg-searchbox rounded-3xl hover:bg-gray-500 text-green-900">
        <div className="absolute right-1 top-1 p-1 w-4 h-5 rounded-full bg-red-400  text-gray-100 leading-[-10px] font-[-10px] z-30">
          <div className="absolute top-[-3px]">
            2
          </div>
        </div>
        <MdNotificationAdd size={32} />
      </div>
    </div>
  )
}
const SearchBar = () => {
  const [search, setSearch] = React.useState('hidden');
  const openSearchBox = () => {
    setSearch('');
  }
  const closeSearchBox = () => {
    setSearch('hidden');
  }
  const Search = () => {
    setSearch('hidden');
  }
  return (

    <>
      <button className="px-4 py-2 mt-2 ml-[7.8em] bg-searchbox outline-none hover:bg-gray-500 text-gray-900 rounded-full" onClick={openSearchBox}>
        Open Search Box</button>
      <div id="search-box" className={`${search} z-50 fixed top-0 left-0 w-screen h-screen bg-gray-800 z-90 backdrop-blur backdrop-opacity-40`}>
        <span className="cursor-pointer text-6xl text-white hover:text-amber-500 absolute right-5 top-5" onClick={closeSearchBox} title="Close">&times;</span>
        <div className="w-full h-full flex justify-center items-center">

          <input type="text" placeholder="Search Everything?" name="search"
            className="w-96 px-3 py-2 rounded-tl-full rounded-bl-full border-0 focus:outline-0" />
          <button type="button" className="px-3 py-2 -ml-1.5 bg-green-500 hover:bg-green-600 text-white rounded-tr-full rounded-br-full" onClick={Search}>Search</button>

        </div>
      </div>
    </>

  )
}
export default Home
