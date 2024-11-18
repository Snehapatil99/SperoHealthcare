import React, { createContext, useState, useContext } from 'react';

const FilterContext = createContext();

export const useFilter = () => useContext(FilterContext);

export const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState('total_completed_today'); 

  const changeFilter = (newFilter) => {
    setFilter(newFilter); // Update the filter based on user selection
  };

  return (
    <FilterContext.Provider value={{ filter, changeFilter }}>
      {children}
    </FilterContext.Provider>
  );
};
