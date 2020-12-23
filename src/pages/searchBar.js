import React from 'react';

export const SearchBar = ({ value, handleChang }) => {
    return <input className="searchBar" placeholder="Search" value={value} onChange={handleChang} />;
};
