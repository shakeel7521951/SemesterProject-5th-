'use client';
import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { toast } from 'react-toastify';

const AddNewNumberPlate: React.FC = () => {
    const [loading,setLoading] = useState(false);
    const [formData, setFormData] = useState({
        plateNo: '',
        price: '',
        discount: '',
        category: 'Normal',
    });

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async(e: any) => {
        e.preventDefault();
        setLoading(true);
        const { plateNo, price, discount, category } = formData;
        const discountAmount = (Number(discount) * Number(price)) / 100;
        const actualPrice = Number(price) - discountAmount;

        const plateNoData = {
            plateNo: plateNo,
            price: actualPrice,
            discount: discountAmount,
            category,
        };
        try {
            const res = await axios.post('/api/addPlate',plateNoData);
            if(res.status === 200){
                toast.success(res?.data?.message,{position:'top-center'});
            }
            window.location.href="/admin/dashboard";
            setLoading(false);
        } catch (error:any) {
            toast.error(error?.response?.data?.message,{position:'top-center'});
            setLoading(false);
        }
    };

    return (
        <Container className="mt-5">
            <h2>Add New Number Plate</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="plateNo">
                    <Form.Label>Plate Number</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter plate number"
                        name="plateNo"
                        value={formData.plateNo}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="discount">
                    <Form.Label>Discount (%)</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter discount in percentage"
                        name="discount"
                        value={formData.discount}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="category">
                    <Form.Label>Category</Form.Label>
                    <Form.Select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                    >
                        <option value="Silver">Silver</option>
                        <option value="Normal">Normal</option>
                        <option value="Gold">Gold</option>
                        <option value="VIP">VIP</option>
                    </Form.Select>
                </Form.Group>

                <Button variant="primary" type="submit" disabled={loading} className={`${loading?'cursor-not-allowed':''}`}>
                    {loading?'Submitting...':'Submit'}
                </Button>
            </Form>
        </Container>
    );
};

export default AddNewNumberPlate;
