import React, { createContext, useEffect, useState } from "react";

const AllDataScafoldcontext = createContext();

export function ScaffoldDataProvider({ children }) {
  let [scafoldData, setScafoldData] = useState([]);
  let [cartItems, setCartItems] = useState([]);
  let [currentproductDetail, setCurrentDetail] = useState([]);

  useEffect(() => {
    function getAllscafoldData() {
      fetch("https://rcz-backend.onrender.com/api/allDataForScafold")
        .then((res) => res.json())
        .then((res) => {
          setScafoldData(res);
        });
    }
    getAllscafoldData();
  }, []);

  return (
    <AllDataScafoldcontext.Provider
      value={{
        scafoldData,
        setScafoldData,
        cartItems,
        setCartItems,
        currentproductDetail,
        setCurrentDetail,
      }}
    >
      {children}
    </AllDataScafoldcontext.Provider>
  );
}

export default AllDataScafoldcontext;
