'use client';

import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.post('api/login', formData);
      if (res.status === 200) {
        toast.success(res.data.message, { position: 'top-center' });
      }
      window.location.href='/';
    } catch (error:any) {
      toast.error(error?.response?.data?.message || 'An error occured! Please try again later',{position:'top-center'})
    }
  };

  return (
    <div className="container py-2">
      <div className="row justify-content-center">
        <div className="col-11 col-md-10 mx-auto">
          <div className="d-flex flex-column flex-md-row align-items-stretch">
            <div className="col-12 col-md-6 p-0 d-none d-md-flex">
              <Image
                src="/login.webp"
                width={100}
                height={100}
                layout="responsive"
                objectFit="fill"
                className="rounded shadow"
                alt="Login poster"
              />
            </div>

            <div className="col-12 col-md-6 d-flex flex-column justify-content-center text-center p-4 shadow rounded-4 pt-5">
              <p className="text-muted fw-semibold">
                "Ready to buy a unique plate? Fill the form below to get started."
              </p>
              <h2 className="mb-4 fw-bold mt-5">Login</h2>
              <Form onSubmit={handleSubmit} className="d-flex flex-column align-items-center gap-3">
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
                <Link href="/forgot-password" className="ms-auto text-decoration-none text-primary">
                  Forgot Password?
                </Link>
                <Button type="submit" className="btn btn-primary px-5 py-2 w-75 fw-bold">
                  Login
                </Button>
              </Form>
              <p className="mt-3">
                Don't have an account?{' '}
                <Link href="/signup" className="text-primary">
                  Signup
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
