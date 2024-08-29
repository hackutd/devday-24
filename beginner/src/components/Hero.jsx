import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { TbMessages } from "react-icons/tb";
import { AiOutlineDollar } from "react-icons/ai";

const Hero = () => {
    return (
        <div>
            <div className="flex flex-row justify-evenly items-center p-16">
                <div className="flex flex-col">
                    <h1 className="font-bold text-5xl py-8">
                        <span className="px-2 bg-yellow-400">your</span> trash
                        is
                    </h1>
                    <h1 className="font-bold text-5xl">
                        their{" "}
                        <span className="px-2 bg-yellow-400">treasure</span>
                    </h1>
                    <h1 className=" text-center font-semibold text-3xl py-2 rounded-3xl h-12 w-56 mx-auto my-10 bg-yellow-400 hover:bg-black hover:text-yellow-400">
                        shop now
                    </h1>
                </div>
                <div>
                    <img src="https://img.freepik.com/premium-photo/sunglasses-beach-with-sea-reflection_756748-26855.jpg" />
                </div>
            </div>
            <div className="flex justify-between items-center w-8/12 mx-auto ">
                <div className="border-2 border-black border-opacity-40 w-[250px] h-[210px] text-center text-2xl py-6">
                    <AiOutlineCloudUpload
                        size={"8rem"}
                        style={{
                            verticalAlign: "middle",
                            margin: "0 auto",
                            display: "block",
                        }}
                    />
                    upload
                </div>
                <div className="border-2 border-black border-opacity-40 w-[250px] h-[210px] text-center text-2xl py-6">
                    <TbMessages
                        size={"8rem"}
                        style={{
                            verticalAlign: "middle",
                            margin: "0 auto",
                            display: "block",
                        }}
                    />
                    settle
                </div>
                <div className="border-2 border-black border-opacity-40 w-[250px] h-[210px] text-center text-2xl py-6">
                    <AiOutlineDollar
                        size={"8rem"}
                        style={{
                            verticalAlign: "middle",
                            margin: "0 auto",
                            display: "block",
                        }}
                    />
                    sell
                </div>
            </div>
        </div>
    );
};

export default Hero;
