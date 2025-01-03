import React from 'react';
import './Home.css';
import { Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className='container-fluid p-0 w-100 overflow-hidden rounded'>
      <div className='row'>
        <div className='col-12'>
          <div className='position-relative'>
            <img
              src='/Home1.jpg'
              alt='Home Page Image'
              className='d-block w-100 Home-page-image'
            />
            <div className='position-absolute text-section'>
              <div className='text-center HeroText'>
                <h1>Lusail Number Plates</h1>
                <h3>Qatar 8832</h3>
                <h5>$879</h5>
                <div className='mt-3 d-flex gap-3'>
                  <Button variant="light">Buy Now</Button>
                  <Button variant='light'>Explore More</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
