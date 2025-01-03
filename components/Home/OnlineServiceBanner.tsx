import Image from 'next/image'
import React from 'react'

const OnlineServiceBanner = () => {
    return (
        <div className='container-fluid mt-4'>
            <div className='row'>
                <div className='col-12 col-md-11 mx-auto my-4'>
                    <div className='bg-white d-flex flex-column flex-md-row rounded-3 p-4 p-md-5 gap-3'>
                        <div className='col-12 col-md-6 mx-auto order-0'>
                            <h3 className=''>QATAR plates services at your fingertips</h3>
                            <p className='mt-3' style={{textAlign: "justify"}}>Welcome to our innovative online platform, where buying and selling exclusive car numbers is made simple and convenient. Whether you're looking for a unique number plate to make a statement or need a specific combination for your vehicle, we offer a wide selection of personalized and rare car numbers to suit every preference. Our user-friendly website allows you to easily browse, search, and purchase the perfect car number from a vast collection. We provide secure payment options and fast delivery to ensure a smooth transaction experience. With a dedicated customer support team, we are always here to assist you with any queries or concerns.</p>
                        </div>
                        <div className='col-12 col-md-6 mx-auto my-auto position-relative order-1 mt-4 mt-md-0'>
                            <Image src='/OnlineServiceBanner.webp' width={100} height={150} className='rounded' layout="responsive" alt='Online Service Banner' />
                            <div className='position-absolute end-0 rounded-5 me-2 px-1 text-center py-3 text-white' style={{top:'-45px', backgroundColor:'#CCD6D1',width:'65%'}}>
                                <p className='fs-4 text-center mb-0' >Best Quality Number plates </p><span className='fs-6'>With 99% of happy Clients</span>
                            </div>
                            <div className=' bottom-0' style={{marginLeft:'80%'}}>
                                <button className='btn mt-2' style={{backgroundColor:'#FFF04E'}}>Join Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OnlineServiceBanner
