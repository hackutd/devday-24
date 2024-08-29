import React from 'react';

function FeaturedItem() {
  return (
    <div className="p-11 bg-white rounded-3xl border border-black border-solid">

      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        {/* ITEM IMAGE */}
        <div className="flex flex-col">
          <div className="h-[250px] w-[400px] my-8 max-w-full bg-orange-200 rounded-2xl" role="img" aria-label="Featured item image" />
        </div>
        {/* ITEM TEXT */}
        <div className="flex flex-col">

          <div className="flex flex-col text-xl font-semibold items-center text-black">
            <h2 className="text-4xl max-md:max-w-full">used brick</h2>
              <p className='py-2'>selling | 3 interested</p>
            <hr className="max-w-full my-2 w-full bg-black border border-black border-solid" />
            <p>
              I only used it once and am looking to get rid of it as I no longer have a need for it. Was used on a dude btw.
            </p>
            <button className="px-4 py-4 my-8 w-44 items-center text-2xl text-amber-500 rounded-3xl border-4 border-amber-200 border-solid hover:bg-amber-300  hover:text-white duration-300">
              BID <br />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedItem;