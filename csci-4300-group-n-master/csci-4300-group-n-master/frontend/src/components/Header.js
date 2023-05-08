import React from 'react';
import backgroundImage from '../Images/Header.png';

const Header = () => {
  const handleShopNowClick = () => {
    window.scrollTo({top: window.innerHeight * 1.12, behavior: 'smooth'});
  };

  return (
    <div className="bg-black flex flex-col justify-center items-center h-screen">
      <div className="w-2/3 flex-col justify-center flex items-center ml-10 mt-8">
        <img className="h-120 w-96 object-cover object-center" src={backgroundImage} alt="Background"/>
      </div>
      <div className="flex-1 text-white py-12 px-8 flex-col justify-center items-center mt-auto">
        <h1 className="text-5xl font-bold font-barlow-condensed mb-4 text-center">Shop our latest sneakers collection
          now</h1>
        <p className="text-xl font-barlow-condensed text-center">Discover our wide range of shoes, from stylish boots to
          comfortable sneakers, and find the perfect pair to complete your look.</p>
        <div className="flex justify-center mt-8">
          <button className="bg-white text-black font-semibold font-barlow-condensed py-3 px-6 rounded"
                  onClick={handleShopNowClick}>Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
