'use client';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import '../../admin/adminStyle.css';
import axios from 'axios';
import { toast } from 'react-toastify';

interface ModalProps {
    showModal: boolean;
    onClose: () => void;
    id: string;
}

const UpdateNumberPlate: React.FC<ModalProps> = ({ showModal, onClose, id }) => {
    const [formData, setFormData] = useState({
        plateNo: '',
        price: '',
        discount: '',
        category: 'Normal',
    });

    useEffect(() => {
        const fetchSinglePlate = async () => {
            try {
                console.log()
                const res = await axios.get(`/api/getSinglePlate/${id}`);
                if (res.status === 200) {
                    setFormData(res.data.numberPlate);
                }
            } catch (error: any) {
                console.log(error?.response?.data?.message);
            }
        };
        if (id) {
            fetchSinglePlate();
        }
    }, [id]);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleUpdate =async(e:any)=>{
        e.preventDefault();
        try {
            const res = await axios.put(`/api/updatePlateNumber/${id}`,formData);
            if(res.status === 200){
                toast.success(res?.data?.message,{position:'top-center'});
                window.location.href="/admin/dashboard"
            }
        } catch (error:any) {
            toast.error(error?.response?.data?.message,{position:'top-center'});
        }
    }

    if (!showModal) return null;

    return (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Update Number Plate</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <Form>
                            <Form.Group className="mb-3" controlId="plateNo">
                                <Form.Label className="text-start">Plate Number</Form.Label>
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
                                <Form.Label className="text-start">Price</Form.Label>
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
                                <Form.Label className="text-start">Discount (%)</Form.Label>
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
                                <Form.Label className="text-start">Category</Form.Label>
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
                        </Form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>
                            Close
                        </button>
                        <button type="button" className="btn btn-primary" onClick={handleUpdate}>
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateNumberPlate;
