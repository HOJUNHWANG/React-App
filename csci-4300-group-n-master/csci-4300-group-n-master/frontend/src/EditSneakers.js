import EditSneakersForm from "./components/EditSneakersForm";
import {useParams} from "react-router-dom";

const EditSneakers = () => {
  const {id} = useParams();

  return <div>
    <div className="bg-white py-10">
      <h1 className="text-4xl text-black font-bold font-orbitron text-center">Edit Sneakers</h1>
    </div>
    <EditSneakersForm sneakerId={id}/>
  </div>
};

export default EditSneakers;
