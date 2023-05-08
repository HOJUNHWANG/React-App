import React from 'react';
import SneakerCard from './SneakerCard';
import {Link} from 'react-router-dom';

const SneakerCards = ({sneakers, showOptions}) => {

  return (
    <div className="max-w-7xl my-10 mx-5 lg:mx-auto">
      {showOptions && <div className="flex justify-center mb-6">
        <Link to="/add"
              className="block mx-auto text-lg font-bold border-2 border-gray-400 rounded-lg py-3 px-6 text-center hover:bg-card">
          + Add Item
        </Link>
      </div>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {sneakers.map(sneaker => (
          <SneakerCard
            key={sneaker._id}
            sneaker={sneaker}
            showOptions={showOptions}
          />
        ))}
      </div>
    </div>
  );
};

export default SneakerCards;
