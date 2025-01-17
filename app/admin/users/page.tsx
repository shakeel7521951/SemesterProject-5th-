'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Users = () => {
  const [usersData, setUsersData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchingUserData = async () => {
      setLoading(true);
      try {
        const res = await axios.get('/api/getAllUsers');
        if (res.status === 200) {
          setUsersData(res.data.users);
        }
      } catch (error: any) {
        console.log(error?.response?.data?.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchingUserData();
  }, []);

  const handleDeleteUser = async (id: any) => {
    setLoading(true);
    try {
      const res = await axios.delete(`/api/deleteUser/${id}`);
      if (res.status === 200) {
        toast.success(res?.data?.message, { position: 'top-center' });
        setUsersData(usersData.filter(user => user._id !== id));
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message, { position: 'top-center' });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center w-100" style={{ height: '50vh' }}>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <ul className="d-flex justify-content-between align-items-center list-unstyled bg-dark text-white py-2 px-3 rounded-top">
        <li className="col">#</li>
        <li className="col">Name</li>
        <li className="col">Email</li>
        <li className="col text-center">Actions</li>
      </ul>

      {usersData.length > 0 ? (
        usersData.map((user: any, index: number) => (
          <ul key={user._id} className="d-flex justify-content-between align-items-start list-unstyled bg-light py-2 px-3 rounded-bottom shadow-sm">
            <li className="col">{index + 1}</li>
            <li className="col">{user.name}</li>
            <li className="col">{user.email}</li>
            <li className="col text-center">
              <button className="btn btn-sm btn-danger" onClick={() => handleDeleteUser(user._id)}>Delete</button>
            </li>
          </ul>
        ))
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
};

export default Users;
