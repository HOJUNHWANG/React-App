import React, {useState} from 'react';
import {FaPencilAlt, FaTrashAlt} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {useFetch} from "../hooks/useFetch";
import toast from "react-hot-toast";

function SneakerCard({sneaker, showOptions}) {
  const [isHovered, setIsHovered] = useState(false);
  const {deleteRequest} = useFetch();
  const onDelete = async (e) => {

    e.preventDefault();
    try {
      const response = await deleteRequest(
        `sneakers/delete/${sneaker._id}`, {
          headers: {
            Authorization: "JWT " + localStorage.getItem("token"),
          },
        });
      window.location.reload();
      toast.success(response.data.message);
    } catch (err) {
      toast.error(err);
    }
  };


  return (
    <div
      className="bg-card flex flex-col items-center gap-y-4 px-10 py-32 rounded-lg shadow-sm hover:shadow-lg cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {showOptions && isHovered && (
        <div className="absolute top-0 right-0 mt-2 mr-2 flex flex-col items-end gap-y-2">
          <Link to={`/edit/${sneaker._id}`} className="bg-gray-700 text-white p-2 rounded-full">
            <FaPencilAlt/>
          </Link>
          <button className="bg-primary text-white p-2 rounded-full" onClick={onDelete}>
            <FaTrashAlt/>
          </button>
        </div>
      )}
      <div className="flex justify-center items-center">
        <img className="h-64" src={sneaker.imageUrl} alt={sneaker.name}/>
      </div>
      <h2 className="text-black text-lg font-orbitron font-bold">{sneaker.name}</h2>
      <p className="text-gray-700 text-base font-anuphan font-medium">{sneaker.type}</p>
      <p className="text-black text-lg font-barlow-condensed font-bold">${sneaker.price}</p>
    </div>
  );
}

export default SneakerCard;
