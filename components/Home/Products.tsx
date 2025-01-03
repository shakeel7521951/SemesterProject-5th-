import React from 'react'
import Card from '../Card';
import CardsData from '../Products';

const Products = () => {
    const cards = CardsData.slice(1,4);
    return (
        <div className='container-fluid mt-5'>
            <div className='row'>
                <div className='col-12 col-md-11 mx-auto'>
                    <h2 className='text-center fw-bold mb-3'>New Today</h2>
                    <div className='row mx-4 mx-md-0 homeCardBg px-2 pt-2 pb-md-4 pb-5 rounded'>
                        <div className='col-12 d-flex flex-wrap flex-column flex-md-row gap-3'>
                            {
                                cards.map((card) => (
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