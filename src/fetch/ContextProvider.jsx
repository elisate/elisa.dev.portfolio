import { useContext, useEffect, useState, createContext } from "react";
import axios from "axios";

// Create context
const statement = createContext();

export const Appcontext = ({ children }) => {
  const [project, setProject] = useState([]);
  
  const [users, setUsers] = useState([]);
  const [contact, setContact] = useState([]);

  
  useEffect(() => {
    const getproject = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/projects/getProjects"
        );
        console.log(response.data);
        setProject(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getproject();
  }, []);

  
  
   useEffect(() => {
     const getusers = async () => {
       const userToken = JSON.parse(localStorage.getItem("userToken"));
       const token = userToken?.user?.tokens?.accessToken;

       try {
         const response = await axios.get(
           "https://future-focus-rwanada.onrender.com/user/getAllUsers",
           { headers: { Authorization: `Bearer ${token}` } }
         );
         console.log(response.data);
         setUsers(response.data);
       } catch (error) {
         console.log(error);
       }
     };
     getusers();
   }, []);
  
  
    useEffect(() => {
      const getcontact = async () => {
        const userToken = JSON.parse(localStorage.getItem("userToken"));
        const token = userToken?.user?.tokens?.accessToken;

        try {
          const response = await axios.get(
            "https://future-focus-rwanada.onrender.com/contact/getAllContacts",
            { headers: { Authorization: `Bearer ${token}` } }
          );
          console.log(response.data);
          setContact(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      getcontact();
    }, []);
    
   
 
  return (
    <statement.Provider value={{
      project, setProject,users,setUsers,contact,setContact
    }}>
      {children}
    </statement.Provider>
  );
};

export const mycontext = () => useContext(statement);
