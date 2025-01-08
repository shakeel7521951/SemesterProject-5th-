import React from 'react';

const NumbersPlates = () => {
    return (
        <div className="container mt-5">
            <ul className='d-flex justify-content-between align-items-center list-unstyled bg-dark text-white py-2 px-3 rounded-top'>
                <li className='col'>Plate No</li>
                <li className='col'>Price</li>
                <li className='col'>Category</li>
                <li className='col'>Action</li>
            </ul>
            {/* Example Data */}
            <ul className='d-flex justify-content-between align-items-center list-unstyled bg-light py-2 px-3 rounded-bottom shadow-sm'>
                <li className='col'>AB123CD</li>
                <li className='col'>$100</li>
                <li className='col '>Luxury</li>
                <li className='col gap-3 d-flex text-center'>
                    <button className="btn btn-warning btn-sm">Update</button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                </li>
            </ul>
            <ul className='d-flex justify-content-between align-items-center list-unstyled bg-light py-2 px-3 rounded-bottom shadow-sm'>
                <li className='col'>AB123CD</li>
                <li className='col'>$100</li>
                <li className='col text-start'>Luxury</li>
                <li className='col gap-3 d-flex text-center'>
                    <button className="btn btn-warning btn-sm">Update</button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                </li>
            </ul>
        </div>
    );
};

export default NumbersPlates;
