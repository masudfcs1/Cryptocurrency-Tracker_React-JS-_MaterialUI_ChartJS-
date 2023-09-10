import React, { createContext, useContext, useState, useEffect } from "react";

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setcurrency] = useState("USD");
  const [symbol, setsymbol] = useState("$");

  useEffect(() => {
    if (currency === "TK") setsymbol("৳");
    else if (currency === "INR") setsymbol("₹");
    else if (currency === "USE") setsymbol("$");
  }, [currency]);

  return (
    <Crypto.Provider value={{ currency, setcurrency, symbol }}>
      {children}{" "}
    </Crypto.Provider>
  );
};

export default CryptoContext;
export const CryptoState = () => {
  return useContext(Crypto);
};
