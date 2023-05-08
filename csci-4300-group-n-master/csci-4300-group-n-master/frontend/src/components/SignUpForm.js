import {useState} from "react";
import {useFetch} from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import InputField from "./InputField";
import PasswordField from "./PasswordField";
import SubmitButton from "./SubmitButton";

const SignUpForm = () => {
  const {post} = useFetch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await post('auth/sign-up', {
        username: username,
        password: password
      });
      toast.success(response.data.message);
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={onSignUp} className="flex flex-col gap-y-10">
        <InputField label={"Username"} input={username} setInput={setUsername}/>
        <PasswordField label={"Password"} password={password} setPassword={setPassword}/>
        <PasswordField label={"Confirm Password"} password={confirmPassword} setPassword={setConfirmPassword}/>
        <SubmitButton text={"Sign Up"}/>
      </form>
    </div>
  );
};

export default SignUpForm;
