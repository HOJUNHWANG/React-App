import {useState} from "react";
import {useNavigate} from "react-router-dom";
import InputField from "./InputField";
import NumberField from "./NumberField";
import SelectMenu from "./SelectMenu";
import SubmitButton from "./SubmitButton";
import {useFetch} from "../hooks/useFetch";
import {sneakersTypes} from "../utils/config";
import toast from "react-hot-toast";

const AddSneakersForm = () => {
  const {post} = useFetch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState(sneakersTypes[0]);
  const [imageUrl, setImageUrl] = useState("");

  const onAdd = async (e) => {
    e.preventDefault();
    try {
      const response = await post('sneakers/add', {
        name: title,
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
      toast.error(err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-10">
      <form onSubmit={onAdd} className="flex flex-col gap-y-10">
        <InputField label={"Sneakers Name"} input={title} setInput={setTitle}/>
        <NumberField label={"Prices"} input={price} setInput={setPrice} step={0.01} max={10000}/>
        <SelectMenu label={"Sneakers Type"} options={sneakersTypes} selected={type} setSelected={setType}/>
        <InputField label={"Image URL"} input={imageUrl} setInput={setImageUrl}/>
        <SubmitButton text={"Add Sneakers"}/>
      </form>
    </div>
  );
};

export default AddSneakersForm;
