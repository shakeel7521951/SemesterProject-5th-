"use client";
import React, { useState } from 'react';
import AdminSidebaar from '@/components/AdminSidebaar';
import Users from '../users/page';
import Plates from '../plates/page';

const AdminDashboard = () => {
    const [activeSection, setActiveSection] = useState<string>('none');

    const renderContent = () => {
        switch (activeSection) {
            case 'users':
                return <Users />;
            case 'plates':
                return <Plates />;
            default:
                return <Users />
        }
    };

    return (
        <div className="d-flex">
            {/* Sidebar */}
            <div className="sidebar-container">
                <AdminSidebaar onSelectSection={setActiveSection} />
            </div>
            {/* Main Content */}
            <div className="content-container flex-grow-1 p-4">
                <h1>Welcome to the Admin Dashboard</h1>
                {renderContent()}
            </div>
        </div>
    );
};

export default AdminDashboard;
