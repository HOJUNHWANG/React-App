import Header from "./components/Header";
import SneakerCards from "./components/SneakerCards";
import {useEffect, useState} from 'react';
import {useFetch} from "./hooks/useFetch";
import toast from "react-hot-toast";

const Home = ({isLoggedIn}) => {
  const {get} = useFetch();
  const [sneakers, setSneakers] = useState([]);

  useEffect(() => {
    getAllSneakers();
  }, []);

  const getAllSneakers = async () => {
    try {
      const response = await get("sneakers/all");
      if (response.data) {
        setSneakers(response.data);
        console.log(response.data);
      }
    } catch (err) {
      toast.error("Failed to retrieve sneakers collection.");
    }
  };

  const handleDelete = (updatedProducts) => {
    setSneakers(updatedProducts);
  };

  return (
    <div className="App">
      <Header/>
      <SneakerCards sneakers={sneakers} showOptions={isLoggedIn} onDelete={handleDelete}/>
    </div>
  );
};

export default Home;
