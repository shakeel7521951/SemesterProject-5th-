import React from 'react';
import { FaEye } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import cardImage from '../public/cardImage.jpg';
import Image from 'next/image';
import messageImage from '../public/messageImage.png';
import { FaCartArrowDown } from "react-icons/fa";
import { BiSolidTimeFive } from "react-icons/bi";

interface cardProps {
    cardData: {
        id: number,
        plateNo: string,
        category: string,
        createdTime: string,
        price: number,
        discount: number
    };
}

const calculateTimeOfPlate = (createdTime: string): string => {
    if (!createdTime) return "Invalid date";
  
    const createdDate = new Date(createdTime);
    const now = new Date();
    const differenceInSeconds = Math.floor((now.getTime() - createdDate.getTime()) / 1000);
  
    if (differenceInSeconds < 60) {
      return `${differenceInSeconds} sec ago`;
    } else if (differenceInSeconds < 3600) {
      const minutes = Math.floor(differenceInSeconds / 60);
      return `${minutes} min ago`;
    } else if (differenceInSeconds < 86400) {
      const hours = Math.floor(differenceInSeconds / 3600);
      return `${hours} hours ago`;
    } else {
      const days = Math.floor(differenceInSeconds / 86400);
      return `${days} days ago`;
    }
  };
  


const Card: React.FC<cardProps> = ({ cardData }) => {
    return (
        <div className='rounded px-3 pt-3 mx-auto' style={{ backgroundColor: '#FFD200', maxWidth: '320px' }}>
            <div className='d-flex justify-content-between mb-2 align-items-center px-3'>
                <h5 className='fw-bold'>Plate Number</h5>
                <div className='d-flex gap-3'>
                    <div className='d-flex flex-column align-items-center'>
                        <p className='mb-0 fw-bold'>0</p>
                        <FaEye />
                    </div>
                    <div className='d-flex flex-column align-items-center'>
                        <p className='mb-0 fw-bold'>0</p>
                        <FaHeart className='cursor-pointer' />
                    </div>
                </div>
            </div>
            <div className='position-relative'>
                <Image src={cardImage} width={100} className='rounded' height={100} alt='Card' layout='responsive' />
                <h5 className='position-absolute fs-1 top-0' style={{ marginTop: '35%', marginLeft: '35%' }}>6548</h5>
            </div>
            <div className='d-flex justify-content-between mt-2'>
                <div>
                    <p className='fs-6'>Private Plate <span className='fw-bold'>{cardData.plateNo}</span></p>
                </div>
                <div>
                    <p className='fs-6'>Category : <span className='fw-bold'>{cardData.category}</span> </p>
                </div>
            </div>
            <div className='border cursor-pointer rounded-5 gap-2 w-50 px-1 pt-2 d-flex align-align-items-center my-auto'>
                <Image src={messageImage} className='ms-3 rounded-circle' width={30} height={30} alt='Message' />
                <p className='fw-bold'>Message</p>
            </div>
            <div className='mt-3 d-flex gap-4 gap-md-5'>
                <div className='rounded-5 gap-2 p-2 pt-2 align-items-center align-content-center d-flex border'>
                    <FaCartArrowDown />
                    <p className='my-auto'>For Sale</p>
                </div>
                <div className='rounded-5 gap-2 p-2 pt-2 align-items-center align-content-center d-flex border'>
                    <BiSolidTimeFive />
                    <p className='my-auto'>{calculateTimeOfPlate(cardData.createdTime)}</p>
                </div>
            </div>
            <div className='d-flex gap-3 mt-3'>
                <p className='ms-auto fs-5 text-decoration-line-through'>${cardData.price}</p>
                <p className='fw-bold fs-5'>${cardData.discount}</p>
            </div>
        </div>
    )
}

export default Card