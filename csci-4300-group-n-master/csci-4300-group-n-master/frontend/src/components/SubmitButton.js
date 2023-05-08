import {Button} from "flowbite-react";

const SubmitButton = ({text}) => {
  return <Button type="submit" className="bg-primary hover:bg-red-900">
    <p className="text-lg text-white font-anuphan font-semibold">{text}</p>
  </Button>
};

export default SubmitButton;
