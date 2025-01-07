import React from 'react';

const NumbersPlates = () => {
    return (
        <div className="container p-4">
            <h2 className="mb-4">Number Plates</h2>
            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Plate No</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Example Data */}
                        <tr>
                            <td>AB123CD</td>
                            <td>$100</td>
                            <td>Luxury</td>
                            <td className='d-flex gap-3 '>
                                <button className="btn btn-warning btn-sm">Update</button>
                                <button className="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>XY456EF</td>
                            <td>$150</td>
                            <td>Standard</td>
                            <td className='d-flex gap-3 '>
                                <button className="btn btn-warning btn-sm">Update</button>
                                <button className="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default NumbersPlates;
