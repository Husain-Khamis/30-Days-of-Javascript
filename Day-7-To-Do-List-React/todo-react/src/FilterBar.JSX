import { useState } from "react";

function FilterBar({ filter, onFilterChange }) {
    return (
        <div className="filter-bar">
            <button className={filter === 'all' ? 'filter-btn active' : 'filter-btn'} onClick={() => onFilterChange('all')}>All Tasks</button>
            <button className={filter === 'active' ? 'filter-btn active' : 'filter-btn'} onClick={() => onFilterChange('active')}>Active Tasks</button>
            <button className={filter === 'completed' ? 'filter-btn active' : 'filter-btn'} onClick={() => onFilterChange('completed')}>Completed Tasks</button>
        </div>
    )
}

export default FilterBar