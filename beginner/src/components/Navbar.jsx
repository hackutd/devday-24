import React from "react";
import { PiBellSimpleRinging } from "react-icons/pi";
import { VscAccount } from "react-icons/vsc";

const Navbar = () => {
    return (
        <div>
            <div>
                <div className="w-5/6 mx-auto">
                    <div className="flex py-8 justify-between items-center">
                        <h1 className="flex text-yellow-600 font-semibold text-4xl">
                            UTDFreebies
                        </h1>
                        <ul className="flex text-black font-semibold text-2xl space-x-10 w-7/12">
                            <li>home</li>
                            <li>new</li>
                            <li>browse</li>
                            <li>upload</li>
                        </ul>
                        <div className="flex space-x-8">
                            <PiBellSimpleRinging size={"2rem"} />
                            <VscAccount size={"2rem"} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t-2 border-gray-400 border-opacity-50 w-full"></div>
        </div>
    );
};

export default Navbar;
