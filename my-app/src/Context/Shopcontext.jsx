import React, { createContext } from 'react';
import all_product from '../Component/Assest/all_product'; // Ensure the path and export are correct

// Create the context
export const ShopContext = createContext(null);

// Create the provider component
const ShopContextProvider = (props) => {
    const contextValue = { all_product };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
