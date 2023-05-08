import InputField from "./InputField";
import {useState} from "react";
import SubmitButton from "./SubmitButton";
import {useFetch} from "../hooks/useFetch";
import {useNavigate} from "react-router-dom";
import PasswordField from "./PasswordField";
import toast from "react-hot-toast";

const SignInForm = ({setIsLoggedIn}) => {
  const navigate = useNavigate();
  const {post} = useFetch();
  const [title, setTitle] = useState("");
  const [password, setPassword] = useState("");

  const onSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await post('auth/sign-in', {
        username: title,
        password: password
      });
      if (response.data.token) {
        setIsLoggedIn(true);
        toast.success(response.data.message);
        localStorage.setItem("token", response.data.token);
        navigate("/");
      }
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={onSignIn} className="flex flex-col gap-y-10">
        <InputField label={"Username"} input={title} setInput={setTitle}/>
        <PasswordField label={"Password"} password={password} setPassword={setPassword}/>
        <SubmitButton text={"Sign In"}/>
      </form>
    </div>
  );
};

export default SignInForm;
