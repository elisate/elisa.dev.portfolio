import { useContext, useEffect, useState, createContext } from "react";
import axios from "axios";

// Create context
const statement = createContext();

export const Appcontext = ({ children }) => {
const [project, setProject] = useState([]);
useEffect(() => {
  const getproject = async () => {
    try {
      const response = await axios.get(
        "https://elis-dev-backend.onrender.com/project/getProjects"
      );
      console.log(response.data);
      setProject(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  getproject();
}, []);
  return (
    <statement.Provider value={{
      project, setProject
    }}>
      {children}
    </statement.Provider>
  );
};

export const mycontext = () => useContext(statement);
