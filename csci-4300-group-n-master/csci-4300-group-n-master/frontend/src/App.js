import {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import NavBar from "./components/NavBar";
import Home from "./Home";
import AddSneakers from "./AddSneakers";
import EditSneakers from "./EditSneakers";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import {useFetch} from "./hooks/useFetch";

const App = () => {
  const {get} = useFetch();
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    autoSignIn();
  }, []);

  const autoSignIn = async () => {
    try {
      const response = await get(
        "/auth/auto-sign-in",
        {
          headers: {
            Authorization: "JWT " + localStorage.getItem("token"),
          },
        }
      );
      if (response.status === 200) {
        setIsSignedIn(true);
      } else {
        setIsSignedIn(false);
      }
    } catch (err) {
      console.log(err.response.status);
      setIsSignedIn(false);
    }
  };

  return (<>
      <NavBar isLoggedIn={isSignedIn} setIsSignedIn={setIsSignedIn}/>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home isLoggedIn={isSignedIn}/>}></Route>
          <Route path={"/add"} element={<AddSneakers/>}></Route>
          <Route path={"/edit/:id"} element={<EditSneakers/>}></Route>
          <Route path={"/signup"} element={<SignUp/>}></Route>
          <Route path={"/signin"} element={<SignIn setIsLoggedIn={setIsSignedIn}/>}></Route>
        </Routes>
      </BrowserRouter>
      <Toaster position="bottom-center"/>
    </>
  );
}

export default App;
