import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className='container-fluid text-white py-4'>
            <div className='row'>
                <hr className='mt-5 bg-black' style={{ height: '1px', border: 'none' }} />
                <div className='col-12 col-md-11 mx-auto d-flex flex-wrap justify-content-between align-items-start'>
                    <div className='col-6 col-md-3 mx-auto mb-4 footerLinks'>
                        <h5>Company</h5>
                        <nav className='d-flex flex-column'>
                            <Link href="/" className='text-white'>Home</Link>
                            <Link href="/signup" className='text-white'>Signup</Link>
                            <Link href="/explore" className='text-white'>Explore</Link>
                        </nav>
                    </div>
                    <div className='col-6 col-md-3 mx-auto mb-4 footerLinks'>
                        <h5>Categories</h5>
                        <nav className='d-flex flex-column'>
                            <Link href="/normal" className='text-white'>Normal</Link>
                            <Link href="/silver" className='text-white'>Silver</Link>
                            <Link href="/gold" className='text-white'>Gold</Link>
                            <Link href="/vip" className='text-white'>VIP</Link>
                        </nav>
                    </div>
                    <div className='col-6 col-md-3 mx-auto mb-4 footerLinks'>
                        <h5>Help</h5>
                        <nav className='d-flex flex-column'>
                            <Link href="/" className='text-white'>Contact</Link>
                            <Link href="/signup" className='text-white'>FAQ's</Link>
                            <Link href="/explore" className='text-white'>Support</Link>
                        </nav>
                    </div>
                    <div className='col-6 col-md-3 mx-auto mb-4 footerLinks'>
                        <h5>Contact</h5>
                        <address className='d-flex flex-column'>
                            <Link href="mailto:shakeel7521951@gmail.com" className='text-white'>shakeel7521951@gmail.com</Link>
                            <Link href="tel:03207521951" className='text-white'>0320-7521951</Link>
                            <Link href="tel:03267100227" className='text-white'>0326-7100227</Link>
                        </address>
                    </div>
                </div>
                <hr className='my-2 bg-black' style={{ height: '1px', border: 'none' }} />
                <div className='col-12 col-md-11 mx-auto d-flex flex-wrap justify-content-between'>
                    <p>© 2024 All rights reserved</p>
                    <nav className='footerLinks'>
                        <Link href="/privacy" className='text-white mx-2'>Privacy Policy |</Link>
                        <Link href="/terms" className='text-white'>Terms of Service</Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
