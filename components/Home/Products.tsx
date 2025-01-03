import React from 'react'
import Card from '../Card';

const Products = () => {
    const CardsData = [
        {
            id: 1,
            plateNo: '9843',
            category: 'Gold',
            createdTime: '5 Days Ago',
            originalPrice: 873,
            discountedPrice: 821
        },
        {
            id: 2,
            plateNo: '8734',
            category: 'Silver',
            createdTime: '3 Days Ago',
            originalPrice: 432,
            discountedPrice: 410
        },
        {
            id: 3,
            plateNo: '9233',
            category: 'VIP',
            createdTime: '1 Days Ago',
            originalPrice: 654,
            discountedPrice: 612.98
        },
    ]
    return (
        <div className='container-fluid mt-5'>
            <div className='row'>
                <div className='col-12 col-md-11 mx-auto'>
                    <h2 className='text-center fw-bold mb-3'>New Today</h2>
                    <div className='row mx-4 mx-md-0 homeCardBg px-2 pt-2 pb-md-4 pb-5 rounded'>
                        <div className='col-12 d-flex flex-wrap flex-column flex-md-row gap-3'>
                            {
                                CardsData.map((card) => (
                                    <>
                                        <Card key={card.id} cardData={card}/>
                                    </>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products