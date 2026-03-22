
import React, { useEffect } from 'react'; 
import AOS from 'aos';                 
import 'aos/dist/aos.css';

import myImg from './image1.jpg'
import myImg2 from './image2.jpg'
import myImg3 from './image3.jpg'
import myImg4 from './image4.jpg'
import myImg5 from './image5.jpg'
import myImg6 from './image6.jpg'
import myImg7 from './image7.jpg'
import myImg8 from './image8.jpg'
import myImg9 from './image9.jpg'

import bg1 from './bgmar1.png'
import bg2 from './bigleafbg.png'
import bg3 from './cloudbg.png'
import bg4 from './cyclebg.png'
import bg5 from './greencloudbg.png'
import bg6 from './leaf2bg.png'
import bg7 from './leaf3bg.png'
import bg8 from './leaf4bg.png'
import bg9 from './pinkdotbg.png'
import bg10 from './h3leaf.png'
import bg11 from './butterflybg.png'

import img1h3 from './h3pink.png'
import img2h3 from './h3leafright.png'
import img3h3 from './h3petal.png'
import img4h3 from './h3letter.png'
import img5h3 from './h3man.png'
import img6h3 from './h3fly.png'
import img7h3 from './h3bird.png'
import img8h3 from './h3leafsmall.png'

import logo from './logo maree.png'



import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'


function Header() {
    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: true,  
            offset:50,
            // startEvent:'DOMContentLoaded',
        });
    }, []);
    const handleMouseEnter = (e) => {
        const btn = e.currentTarget;
        const fill = btn.querySelector('.fill-layer');
        const rect = btn.getBoundingClientRect();
        
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        fill.style.left = `${x}px`;
        fill.style.top = `${y}px`;
    }
    return (
        <>
        
            <div className="hero1" style={{ position: 'relative', marginBottom: '30px' }}>
                <img data-aos="fade-left" src={bg1} className="bg bird" />
                <img src={bg2} className="bg leaf-2" />
                <img data-aos="fade-down" src={bg3} className="bg cloud-1" />
                <img data-aos="fade-right" src={bg4} className="bg cycle" />
                <img data-aos="fade-down" src={bg5} className="bg cloud-2" />
                <img data-aos="fade-left" src={bg6} className="bg leaf-3" />
                <img data-aos="fade-left" src={bg7} className="bg leaf-4" />
                <img data-aos="fade-right" src={bg8} className="bg leaf-5" />
                <img data-aos="fade-left" src={bg10} className="bg leaf-skin" />
                <img src={bg9} className="bg dot" />
                <img src={bg9} className="bg dot2" />
                <img src={bg9} className="bg dot3" />
                <img src={bg9} className="bg dot4" />
                <img data-aos="fade-down" src={bg11} className="bg fly" />






                <div className="texth1">
                    <h1 className='logotext'>
                        <img src={logo} alt=""  />
                        <svg className="loader-butterfly" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <path className="wing left-wing"
                             d="M30 80 Q 5 60 20 20 Q 70 30 30 80 Z" 
                             fill="#F08080" />
<path className="wing right-wing" d="M30 80 Q 60 95 90 80 Q 60 30 30 80 Z" fill="#F08080" opacity="0.9" />
                        </svg>
                    </h1>

                    <p className='subText'> Welcome to Marée, a brand new illustration & design portfolio just
                        waiting for your work to start populating its templates!</p>
                    <button className="hero3-btn" onMouseEnter={handleMouseEnter}>
                    <span className="fill-layer"></span>
                    <span className="btn-text">PURCHASE</span></button>
                </div>
            </div>

            <div className="portfolio-grid">
  <div className="portfolio-item">
    <div className="portfolio-img-wrap">
      <img src={myImg2} alt="Main Home" />
    </div>
    <p className="portfolio-title">Main Home</p>
  </div>

  <div className="portfolio-item">
    <div className="portfolio-img-wrap">
      <img src={myImg} alt="Floating Portfolio" />
    </div>
    <p className="portfolio-title">Floating Portfolio</p>
  </div>

  <div className="portfolio-item">
    <div className="portfolio-img-wrap">
      <img src={myImg3} alt="Portfolio Pinterest" />
    </div>
    <p className="portfolio-title">Portfolio Pinterest</p>
  </div>

  <div className="portfolio-item">
    <div className="portfolio-img-wrap">
      <img src={myImg4} alt="Animated Slider" />
    </div>
    <p className="portfolio-title">Animated Slider</p>
  </div>

  <div className="portfolio-item">
    <div className="portfolio-img-wrap">
      <img src={myImg5} alt="Portfolio Metro" />
    </div>
    <p className="portfolio-title">Portfolio Metro</p>
  </div>

  <div className="portfolio-item">
    <div className="portfolio-img-wrap">
      <img src={myImg6} alt="Portfolio Gallery" />
    </div>
    <p className="portfolio-title">Portfolio Gallery</p>
  </div>

  <div className="portfolio-item">
    <div className="portfolio-img-wrap">
      <img src={myImg7} alt="Interactive Links" />
    </div>
    <p className="portfolio-title">Interactive Links</p>
  </div>

  <div className="portfolio-item">
    <div className="portfolio-img-wrap">
      <img src={myImg8} alt="Split Slider Showcase" />
    </div>
    <p className="portfolio-title">Split Slider Showcase</p>
  </div>

  <div className="portfolio-item">
    <div className="portfolio-img-wrap">
      <img src={myImg9} alt="Portfolio Carousel" />
    </div>
    <p className="portfolio-title">Portfolio Carousel</p>
  </div>
</div>

            <div className="hero3">
                {/* <img src={img1h3} alt="" className='h3-1' /> */}
                <img data-aos="fade-right" src={img2h3} alt="" className='h3-2' />
                <img data-aos="fade-right"src={img3h3} alt="" className='h3-3' />
                <img data-aos="fade-down"  src={img4h3} alt="" className='h3-4' />
                <img src={img5h3} alt="" className='h3-5' />
                <img data-aos='fade-down'   src={img6h3} alt="" className='h3-6' />
                <img data-aos='fade-up'   src={img7h3} alt="" className='h3-7' />
                <img data-aos='fade-up'   src={img8h3} alt="" className='h3-8' />



                <div className="texth3">
                    <p> Your new folio with a professional layout collection and quite a cheerful <span className='pers'>personality!</span></p>
                </div>
                    <button className="hero3-btn" onMouseEnter={handleMouseEnter}>
                    <span className="fill-layer"></span>
                    <span className="btn-text">PURCHASE</span>
                </button>
            </div>
        </>
    );
}

export default Header