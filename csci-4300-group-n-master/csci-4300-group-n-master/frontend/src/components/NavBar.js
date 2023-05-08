import {Button, Navbar} from "flowbite-react";
import toast from "react-hot-toast";

const NavBar = ({isLoggedIn, setIsSignedIn}) => {

  const handleSignIn = () => {
    setIsSignedIn(true);
    window.location.href = "/signin";
  }

  const handleSignUp = () => {
    // Use Link to navigate to the sign-up page
    window.location.href = "/signup";
  };

  const handleLogOut = () => {
    setIsSignedIn(false);
    localStorage.removeItem("token");
    toast.success("You have signed out successfully!");
  }

  return (
    <Navbar className="!bg-black rounded-none" fluid={true} rounded={true}>
      <Navbar.Brand href="http://localhost:3000/">
        <img
          src="logo.png"
          className="mr-3 h-16"
          alt="Flowbite Logo"
        />
        <span
          className="text-white font-bebas-neue self-center whitespace-nowrap text-3xl font-semibold dark:text-white">
          SNEAK
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 gap-x-5">
        {!isLoggedIn && (
          <>
            <Button className="bg-gray-700 hover:bg-red-700/70 hover:bg-red-900" onClick={handleSignIn}>
              <h3 className={"text-xl font-barlow-condensed"}>Sign in</h3>
            </Button>
            <Button className="bg-gray-700 hover:bg-red-700/70 hover:bg-red-900" onClick={handleSignUp}>
              <h3 className={"text-xl font-barlow-condensed"}>Sign Up</h3>
            </Button>
          </>
        )}
        {isLoggedIn && (
          <Button className="bg-gray-700 text-white hover:bg-red-900" onClick={handleLogOut}>
            <h3 className={"text-xl font-barlow-condensed"}>Sign out</h3>
          </Button>
        )}
        <Navbar.Toggle/>
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active={true}>
          <h3
            className="text-white text-xl font-barlow-condensed hover:underline hover:underline-offset-8 hover:decoration-2">Men</h3>
        </Navbar.Link>
        <Navbar.Link href="/navbars">
          <h3
            className="text-white text-xl font-barlow-condensed  hover:underline hover:underline-offset-8 hover:decoration-2">Women</h3>
        </Navbar.Link>
        <Navbar.Link href="/navbars" className="text-white hover:underline hover:underline-offset-8">
          <h3
            className="text-white text-xl font-barlow-condensed  hover:underline hover:underline-offset-8 hover:decoration-2">Kids</h3>
        </Navbar.Link>
        <Navbar.Link href="/navbars" className="text-white">
          <h3
            className="text-white text-xl font-barlow-condensed  hover:underline hover:underline-offset-8 hover:decoration-2">Sale</h3>
        </Navbar.Link>
        <Navbar.Link href="/navbars" className="text-white">
          <h3
            className="text-white text-xl font-barlow-condensed  hover:underline hover:underline-offset-8">Contact</h3>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
