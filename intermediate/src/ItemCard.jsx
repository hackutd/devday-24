import React from 'react';

function ItemCard({ image, title, price, status }) {
  return (
    <div className="p-4 flex flex-col mx-auto w-full font-semibold  bg-white rounded-3xl border border-black border-solid ">
      <div className="bg-rose-300 rounded-3xl w-[350px] h-[200px]" role="img" aria-label={title} />
      <h3 className="text-3xl text-black">{title}</h3>
      <div className="flex gap-5 justify-between mx-3 mt-10 text-xl">
        <div className={`my-auto ${status === 'SOLD' ? 'text-red-500' : 'text-lime-500'}`}>{price}</div>
        <button className="justify-center hover:bg-gray-200 px-7 py-5 text-amber-500 rounded-3xl border-4 border-amber-200 border-solid max-md:px-5">
          BID <br />
        </button>
      </div>
    </div>
  )
}

export default ItemCard;