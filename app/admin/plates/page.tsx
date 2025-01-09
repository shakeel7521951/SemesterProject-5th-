'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import UpdateNumberPlate from '../updateNumberPlate/page';

const NumbersPlates = () => {
    const [plates, setPlates] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };


    useEffect(() => {
        const fetchingPlates = async () => {
            try {
                setLoading(true);
                const res = await axios.get('/api/getAllNumberPlates');
                if (res.status === 200) {
                    setPlates(res.data.plates || []); 
                }
                setLoading(false);
            } catch (error: any) {
                console.log(error?.response?.data?.message);
                setLoading(false);
            }
        }
        fetchingPlates();
    }, []);

    const handleDeleteNumberPlate = async (id: any) => {
        try {
            const res = await axios.delete(`/api/deleteNumberPlate/${id}`);
            if (res.status === 200) {
                toast.success(res?.data?.message, { position: 'top-center' });
            }
            setPlates((prevPlates) => prevPlates.filter((plate: any) => plate._id !== id));
        } catch (error: any) {
            toast.error(error?.response?.data?.message, { position: 'top-center' });
        }
    }

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center w-100" style={{ height: '50vh' }}>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <ul className='d-flex justify-content-between align-items-center list-unstyled bg-dark text-white py-2 px-3 rounded-top'>
                <li className='col'>Plate No</li>
                <li className='col'>Price</li>
                <li className='col'>Category</li>
                <li className='col'>Action</li>
            </ul>
            {plates.length > 0 ? (
                plates.map((data: any) => (
                    <ul
                        key={data._id}
                        className="d-flex justify-content-between align-items-center list-unstyled bg-light py-2 px-3 rounded-bottom shadow-sm"
                    >
                        <li className="col">{data.plateNo}</li>
                        <li className="col">${data.price.toFixed(2)}</li>
                        <li className="col">{data.category}</li>
                        <li className="col gap-3 d-flex text-center">
                            <div>
                                <button className="btn btn-warning btn-sm" onClick={handleOpenModal}>
                                    Update
                                </button>
                                <UpdateNumberPlate showModal={showModal} onClose={handleCloseModal} id={data._id} />
                            </div>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleDeleteNumberPlate(data._id)}
                            >
                                Delete
                            </button>
                        </li>
                    </ul>
                )))
                : (
                    <p className="text-center mt-3">No plates available.</p>
                )
            }

        </div>
    );
};

export default NumbersPlates;