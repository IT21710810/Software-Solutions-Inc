import React, { useState } from 'react';
import './Admin.css';

function Admin() {
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const inquiries = JSON.parse(localStorage.getItem('inquiries')) || [];

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === 'admin123') {
            setIsAuthenticated(true);
        } else {
            alert('Incorrect password');
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setPassword('');
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const handleItemsPerPageChange = (e) => {
        setItemsPerPage(Number(e.target.value));
        setCurrentPage(1);
    };

    const totalPages = Math.ceil(inquiries.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedInquiries = inquiries.slice(startIndex, startIndex + itemsPerPage);

    if (!isAuthenticated) {
        return (
            <div className="admin-login">
                <div className="login-container">
                    <h1 className="logo">Software Solutions</h1>
                    <h2>Admin Login</h2>
                    <form onSubmit={handleLogin}>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                            className="login-input"
                        />
                        <button type="submit" className="login-button">Log In</button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="admin-dashboard">
            <div className="main-content">
                <div className="header">
                    <h1 className="admin-title">Admin Dashboard</h1>
                    <button onClick={handleLogout} className="logout-button">Logout</button>
                </div>

                <div className="table-section">
                    <div className="table-header">
                        <h2>All Inquiries</h2>
                    </div>
                    <p>Total Inquiries: {inquiries.length}</p>
                    {/* Removed the "Show [number] entries" dropdown from here */}
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Company</th>
                                <th>Country</th>
                                <th>Job Title</th>
                                <th>Job Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedInquiries.map((inquiry, index) => (
                                <tr key={index}>
                                    <td>{inquiry.name}</td>
                                    <td>{inquiry.email}</td>
                                    <td>{inquiry.phone}</td>
                                    <td>{inquiry.company}</td>
                                    <td>{inquiry.country}</td>
                                    <td>{inquiry.jobTitle}</td>
                                    <td>{inquiry.jobDetails}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="pagination">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <span> Page {currentPage} of {totalPages} </span>
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                        {/* Moved the "Show [number] entries" dropdown here */}
                        <label className="items-per-page">
                            Show
                            <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
                                <option value={10}>10</option>
                                <option value={20}>20</option>
                                <option value={50}>50</option>
                            </select> entries
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;