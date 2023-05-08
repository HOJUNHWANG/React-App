import SignInForm from "./components/SignInForm";

const SignIn = ({setIsLoggedIn}) => {
  return <div>
    <div className="bg-white py-10">
      <h1 className="text-4xl text-black font-bold font-orbitron text-center">Sign In</h1>
    </div>
    <SignInForm setIsLoggedIn={setIsLoggedIn} />
  </div>
};

export default SignIn;
