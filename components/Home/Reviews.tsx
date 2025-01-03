import Image from 'next/image';
import React from 'react';
import { FaStar } from "react-icons/fa";

function Reviews() {
    const reviews = [
        {
            id: 1,
            name: 'John Doe',
            handle: '@johndoe',
            daysAgo: '3 Days Ago',
            profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOeZjZWEr4oFmJhILQQgTy7-WUX9BmRrAAFw&s',
            quote: 'An impressive demo that highlights key features with clarity and ease of use. Definitely sparked interest in the full product.'
        },
        {
            id: 2,
            name: 'Jane Smith',
            handle: '@janesmith',
            daysAgo: '2 Days Ago',
            profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOeZjZWEr4oFmJhILQQgTy7-WUX9BmRrAAFw&s',
            quote: 'This product has really helped streamline my workflow. Highly recommend it to anyone looking for efficiency!'
        },
        {
            id: 3,
            name: 'Michael Johnson',
            handle: '@michaeljohnson',
            daysAgo: '1 Day Ago',
            profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOeZjZWEr4oFmJhILQQgTy7-WUX9BmRrAAFw&s',
            quote: "Great user interface and intuitive features. Can’t wait to see more updates!"
        }
    ];

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 col-md-11 mx-auto mt-3'>
                    <h2 className='text-center my-4 text-white fs-2'>What our customers think about us</h2>
                    {/* Added gap-3 class for spacing */}
                    <div className='row justify-content-center'>
                        {reviews.map((testimonial) => (
                            <div 
                                key={testimonial.id} 
                                className='col-10 col-md-4 mx-auto d-flex flex-column justify-content-center align-items-center text-center rounded-2 shadow-lg border-yellow text-white py-3 px-2 my-3' style={{maxWidth:'340px'}}
                            >
                                <div className='d-flex align-items-center my-3'>
                                    {[...Array(5)].map((_, index) => (
                                        <FaStar key={index} className='fs-4 mx-1 yellowColor' />
                                    ))}
                                </div>
                                <Image
                                    src={testimonial.profileImage}
                                    alt={`${testimonial.name} profile`}
                                    width={100}
                                    height={100}
                                    className='rounded-circle mb-2'
                                />
                                <h4>{testimonial.name}</h4>
                                <h6>
                                    {testimonial.handle} . <span className='ms-2'>{testimonial.daysAgo}</span>
                                </h6>
                                <Image 
                                    src="/google.png" 
                                    alt='Google logo' 
                                    width={50} 
                                    height={50} 
                                    className='my-3' 
                                />
                                <p>"{testimonial.quote}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reviews;
