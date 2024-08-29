import React from 'react';
import FeaturedItem from './FeaturedItem';
import ItemGrid from './ItemGrid';

function MainContent() {
  return (
    <div className="flex flex-col px-5 w-full ">
      <br />
      <br />

      <h2 className="text-4xl font-semibold text-black max-md:max-w-full m-8">What's Hot</h2>
      <FeaturedItem />
      <h2 className="self-center mt-28 text-4xl font-semibold text-black max-md:mt-10 text-4xl m-8">All Items</h2>
      
    </div>
  );
}

export default MainContent;