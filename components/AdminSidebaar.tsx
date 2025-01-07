"use client";
import '../app/admin/adminStyle.css';
import React from 'react';

interface AdminSidebaarProps {
  onSelectSection: (section: string) => void;
}

const AdminSidebaar: React.FC<AdminSidebaarProps> = ({ onSelectSection }) => {
  return (
    <div className="sidebar bg-dark text-white vh-100 p-3">
      <h2 className="text-center mb-4">Admin Dashboard</h2>
      <div className="d-flex flex-column gap-3">
        {/* Users Link */}
        <button
          className="text-decoration-none text-white px-3 py-2 rounded hover-effect"
          onClick={() => onSelectSection('users')}
        >
          <i className="bi bi-people-fill me-2"></i> Users
        </button>
        {/* Plates Link */}
        <button
          className="text-decoration-none text-white px-3 py-2 rounded hover-effect"
          onClick={() => onSelectSection('plates')}
        >
          <i className="bi bi-plate-fill me-2"></i> Plates
        </button>
      </div>
    </div>
  );
};

export default AdminSidebaar;
