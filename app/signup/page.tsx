'use client';

import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

const signup = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', password: '', cPassword: '' });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);

        if (formData.password !== formData.cPassword) {
            toast.warn("Passwords do not match!", { position: 'top-center' });
            return;
        }

        try {
            const res = await axios.post("/api/signup", {
                name: formData.name,
                email: formData.email,
                password: formData.password,
            });

            if (res.status === 201) {
                toast.success(res?.data?.message, { position: 'top-center' });
                setFormData({ name: '', email: '', password: '', cPassword: '' });
            }
            window.location.href = '/';
            setLoading(false);
        } catch (error: any) {
            toast.error(error.response?.data?.message || "An error occurred during signup.", { position: 'top-center' });
            setLoading(false);
        }
    };


    return (
        <div className="container py-2">
            <div className="row justify-content-center">
                <div className="col-11 col-md-11 mx-auto">
                    <div className="d-flex flex-column flex-md-row align-items-stretch">
                        <div className="col-12 col-md-6 p-0 d-none d-md-flex">
                            <Image
                                src="/login.webp"
                                width={100}
                                height={100}
                                layout="responsive"
                                objectFit="cover"
                                className="rounded shadow"
                                alt="Login poster"
                            />
                        </div>

                        <div className="col-12 col-md-6 d-flex flex-column justify-content-center text-center p-4 shadow rounded-4 pt-5">
                            <p className="text-muted fw-semibold">
                                "Complete your detail to access exclusive plate number in Qatar"
                                "Enter your detail for seamless experience on Lusail Numbers"
                            </p>
                            <h3 className="mb-4 fw-bold mt-5">Signup</h3>
                            <Form onSubmit={handleSubmit} className="d-flex flex-column align-items-center gap-3">
                                <input
                                    type="text"
                                    className="form-control w-75 fs-6 p-2 rounded"
                                    required
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                />
                                <input
                                    type="email"
                                    className="form-control w-75 fs-6 p-2 rounded"
                                    required
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                />
                                <input
                                    type="password"
                                    className="form-control w-75 fs-6 p-2 rounded"
                                    required
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Enter your password"
                                />
                                <input
                                    type="password"
                                    className="form-control w-75 fs-6 p-2 rounded"
                                    required
                                    name="cPassword"
                                    value={formData.cPassword}
                                    onChange={handleChange}
                                    placeholder="Confirm Password"
                                />
                                <Button
                                    type="submit"
                                    className={`btn btn-primary px-5 py-2 w-75 fw-bold ${loading ? 'cursor-not-allowed' : ''}`}
                                    disabled={loading}
                                >
                                    {loading ? 'loading...' : 'Signup'}
                                </Button>

                            </Form>
                            <p className="mt-3">
                                Already have an account?{' '}
                                <Link href="/login" className="text-primary">
                                    Login
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default signup;
