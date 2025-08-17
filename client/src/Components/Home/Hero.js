import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Navbar from '../Navbar';
import Lottie from "lottie-react";
import whatsapp1 from "../../assets/whatsapp loop.json";
import whatsapp2 from "../../assets/chat.json";
import whatsapp3 from "../../assets/chatbot.json";
import './Hero.css'; // optional for positioning

function Hero() {
  const nav = useNavigate();

  return (
    <div className="home-top-section">
      <Navbar />
      <div className='hero-container d-flex flex-column align-items-center justify-content-center position-relative'>
        {/* Background Animations */}
        <Lottie animationData={whatsapp1} className="lottie-animation lottie-top-left" loop />
        <Lottie animationData={whatsapp2} className="lottie-animation lottie-bottom-right" loop/>
        <Lottie animationData={whatsapp3} className="lottie-animation lottie-bottom-left" loop />

        {/* Text Content */}
        <h2 className='text-center fw-bold text-big w-50'>Grow your business with 24by7Chat Cloud</h2>
        <p className='text-center fs-5 w-50 px-3 py-3'>
          Personalize communication and sell more with the WhatsApp Business API platform that automates marketing, sales, service and support.
        </p>
        <button onClick={() => nav("/login")} className="tangled-btn">Try Now</button>
        <a href='/signup' className='text-white s-mid px-3 py-3 fst-italic'><span className="ms-2" style={{ fontSize: "1.5em" }}>
                  &rarr;
                </span> or Book a Demo Today</a>
      </div>
    </div>
  );
}

export default Hero;
