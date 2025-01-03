import Card from '@/components/Card';
import CardsData from '@/components/Products';
import React from 'react';
import { Button } from 'react-bootstrap';


interface ProductPagesData {
    categoryName: string;
    posterPlateNo: number;
    posterDescription: string;
}

const ProductPages: React.FC<ProductPagesData> = ({ categoryName,posterPlateNo,posterDescription }) => {
    const cards = CardsData?.filter((item) => item.category === `${categoryName}` );
    return (
        <div className="container-fluid p-0">
            <div className="bgImage position-relative">
                <div className="bgColor d-flex flex-row align-items-center justify-content-between my-auto p-5">
                    <div className="fw-bold text-start text-white mx-auto">
                        <h1 className="title">{categoryName} Number Plates</h1>
                        <h4 className="my-4 subtitle">Qatar {posterPlateNo} Best Price</h4>
                        <div className="d-flex gap-4">
                            <Button type="button" className="btn btn-light button-style">Number Plates</Button>
                            <Button type="button" className="btn btn-light button-style">Book Now</Button>
                        </div>
                    </div>
                    <div className="d-none d-md-flex text-white">
                        <p className="fs-4 text-end">{posterDescription}</p>
                    </div>
                </div>
            </div>
            <h2 className="section-title ms-3 mt-4 fw-bold">{categoryName} Plates</h2>
            <p className='ms-3 fw-semibold mb-3'>Number Of plates :{cards.length}</p>
            <div className='row gap-3'>
                <div className='col-12 col-md-11 mx-auto d-flex flex-column flex-wrap flex-md-row gap-3'>
                    {
                        cards.map((card) => (
                            <Card cardData={card} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default ProductPages;
