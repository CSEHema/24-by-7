import React from 'react'
import Hero from './Home/Hero';
import Chatlink from './Home/Chatlink';
import Features from './Home/Features';
import Review from './Home/Review';
import Price from './Home/Price';
import Faq from './Home/Faq';
import Adv from './Home/Adv';

function Home() {
  return (
    <div>
      <Hero/>
      <p className="text-center px-3 py-3 fs-4 fw-bold">
        <span className="text-success">Trusted</span> by the <span style={{
              textDecoration: "underline",
              textDecorationThickness: "3px",
              textUnderlineOffset: "5px",
              textDecorationColor: "#21c948"
        }}>most dynamic brands</span> in emerging markets
      </p>
      <div className='px-3 py-3 mt-3'/>
      <Chatlink/>
      <div className='px-3 py-3 mt-5'/>
      <Features/>
      <div className='px-3 py-3 mt-5'/>
      <Review/>
      <div className='px-3 py-3 mt-5'/>
      <Price/>
      <div className='px-3 py-3 mt-5'/>
      <Faq/>
      <div className='px-3 py-3 mt-5'/>
      <Adv/>
      <div className='px-3 py-3 mt-5'/>
    </div>
  )
}

export default Home
