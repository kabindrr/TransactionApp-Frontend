import { useContext } from "react";
import { createContext, useState } from "react";
import { fetchTransactions } from "../helpers/transactionAxios";

export const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [transactions, setTransactions] = useState([]);
  const [show, setShow] = useState(false);

  const toggleModal = (value) => setShow(value);

  const getTransactions = async () => {
    //call axios helper to call api
    const { status, transactions } = await fetchTransactions();

    //receive data and mount to the transactions by setTransactions()

    status === "success" && setTransactions(transactions);
  };

  return (
    <userContext.Provider
      value={{
        user,
        setUser,
        transactions,
        setTransactions,
        getTransactions,
        toggleModal,
        show,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
export const useUser = () => useContext(userContext);
