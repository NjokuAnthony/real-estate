import React from 'react'

import House1 from '../../assets/house1.jpg'
import bed1 from '../../assets/bed1.jpg'
import bed2 from '../../assets/bed2.jpg'
import kitchen from '../../assets/kitchen.jpg'
import bathroom from '../../assets/bath1.jpg'

import './Featured.css'

const Featured = () => {
  return (
    <div>
        <h1 className='feature'>Top Featured Listings</h1>
        <p>Selected Listings by City, State, & Zip based on views.</p>
        <div className="container">
            <img src={House1} alt='' />
            <img src={bed1} alt='' />
            <img src={bed2} alt='' />
            <img src={kitchen} alt='' />
            <img src={bathroom} alt='' />
            <div className="span-3 img-details">
                <div className="top">
                    <h2>123 Njoku St. Lagos, LA</h2>
                    <p>House for Sale</p>
                    <p className='price'>$2,677,000</p>
                </div>
                <div className="info-grid">
                    <div>
                        <div className="info">
                            <p className="bold">Bedrooms:</p><p>5</p>
                        </div>
                    </div>
                    <div>
                        <div className="info">
                            <p className="bold">Bathrooms:</p><p>7</p>
                        </div>
                    </div>
                    <div>
                        <div className="info">
                            <p className="bold">Square Feet:</p><p>8,138</p>
                        </div>
                    </div>
                    <div>
                         <div className="info">
                            <p className="bold">Est Payment:</p><p>$14,797/mo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured