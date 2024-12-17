import React, { useState } from 'react';

const Filters = ({ filters, setFilters }) => {
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFilters({ ...filters, [name]: value });
    };

    return (
        <div id="filters">
            <label>
                Age:
                <select name="age" onChange={handleChange} value={filters.age}>
                    <option value="15-25">15-25</option>
                    <option value=">25">&gt;25</option>
                </select>
            </label>
            <label>
                Gender:
                <select name="gender" onChange={handleChange} value={filters.gender}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </label>
            <label>
                Date Range:
                <input type="date" name="dateFrom" onChange={handleChange} value={filters.dateFrom} />
                <input type="date" name="dateTo" onChange={handleChange} value={filters.dateTo} />
            </label>
        </div>
    );
};

export default Filters;
