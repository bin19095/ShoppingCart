import React from 'react'
import Footers from '../Components/Footer/Footers';
import HeaderSlider from '../Components/Slider/HeaderSlider';
import AllCategories from '../Components/Categories/AllCategories';
import LatestProducts from '../Components/Product/LatestProducts';

function HomePage() {
  return (
    <>
    <HeaderSlider/>
    <div className='mb-5 pb-5'></div>
    <div className='mb-5 pb-5'></div>
    <AllCategories/>
    <LatestProducts productTypes="" />
    <AllCategories/>
    <LatestProducts productTypes="" />
    <div className='mb-5 pb-5'></div>
    <div className='mb-5 pb-5'></div>
    <Footers />
    </>
  )
}

export default HomePage