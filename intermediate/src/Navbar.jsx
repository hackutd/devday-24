import React from 'react';

function Header() {
  return (
    <div className="mx-auto flex flex-row justify-between py-4 items-center ">
      <a href="/" className="text-4xl font-bold text-orange-300 hover:cursor-pointer">
        UTDFreebies
      </a>
      <nav className="flex gap-5 justify-between mt-2 text-2xl font-semibold text-center text-black max-md:flex-wrap max-md:max-w-full">
        
        <a href="#new" className="hover:text-orange-300 duration-300">new</a>
        <a href="#browse" className="hover:text-orange-300 duration-300">browse</a>
        <a href="#upload" className="hover:text-orange-300 duration-300">upload</a>
      </nav>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e1e065923dd9ccfc314dd9a117501820d674983f235b360f01a1a8de12ac85f?apiKey=d08054905a0441d59c9d2928d3fefa33&" className="shrink-0 max-w-full aspect-[3.57] w-[114px]" alt="" />
    </div>
  );
}

export default Header;