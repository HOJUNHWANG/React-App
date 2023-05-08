import InputField from "./InputField";
import {useEffect, useState} from "react";
import NumberField from "./NumberField";
import SelectMenu from "./SelectMenu";
import {sneakersTypes} from "../utils/config";
import SubmitButton from "./SubmitButton";
import {useFetch} from "../hooks/useFetch";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";

const EditSneakerForm = ({sneakerId}) => {
  const {get, put} = useFetch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState(sneakersTypes[0]);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    getSneaker();
  }, []);

  const getSneaker = async () => {
    try {
      const response = await get(
        `sneakers/get/${sneakerId}`,
        {
          headers: {
            Authorization: "JWT " + localStorage.getItem("token"),
          },
        }
      );
      const responseData = response.data;
      if (responseData) {
        console.log(response.data);
        setName(responseData.name);
        setPrice(responseData.price);
        setType(sneakersTypes.find(option => option.name === responseData.type));
        setImageUrl(responseData.imageUrl);
      }
    } catch (err) {
      console.error(err);
    }
  }

  const onEdit = async (e) => {
    e.preventDefault();
    try {
      const response = await put(
        `sneakers/edit/${sneakerId}`,
        {
          name: name,
          price: price,
          type: type.name,
          imageUrl: imageUrl
        }, {
          headers: {
            Authorization: "JWT " + localStorage.getItem("token"),
          },
        });
      toast.success(response.data.message);
      navigate("/");
    } catch (err) {
      console.log()
    }
  };


  return (
    <div className="max-w-2xl mx-auto mb-10">
      <form onSubmit={onEdit} className="flex flex-col gap-y-10">
        <InputField label={"Sneakers Name"} input={name} setInput={setName}/>
        <NumberField label={"Prices"} input={price} setInput={setPrice} step={0.01} max={10000}/>
        <SelectMenu label={"Sneakers Type"} options={sneakersTypes} selected={type} setSelected={setType}/>
        <InputField label={"Image URL"} input={imageUrl} setInput={setImageUrl}/>
        <SubmitButton text={"Update Sneakers"}/>
      </form>
    </div>
  );
};

export default EditSneakerForm;
