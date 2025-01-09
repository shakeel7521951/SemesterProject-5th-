'use client';
import React, { useEffect, useState } from 'react';
import Card from '../Card';
import axios from 'axios';

interface CardData {
    _id: string;
    title: string;
    description: string;
    price: number;
    image: string;
}

const Products = () => {
    const [cardsData, setCardsData] = useState<CardData[]>([]);
    const cards = Array.isArray(cardsData) ? cardsData.slice(0, 3) : [];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('/api/getAllNumberPlates');
                if (res.status === 200 && Array.isArray(res.data.plates)) {
                    setCardsData(res.data.plates);
                    console.log(res.data.plates);
                } else {
                    console.error('Unexpected data format:', res.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-12 col-md-11 mx-auto">
                    <h2 className="text-center fw-bold mb-3">New Today</h2>
                    <div className="row mx-4 mx-md-0 homeCardBg px-2 pt-2 pb-md-4 pb-5 rounded">
                        <div className="col-12 d-flex flex-wrap flex-column flex-md-row gap-3">
                            {cards.map((card) => (
                                <Card key={card._id} cardData={card} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
