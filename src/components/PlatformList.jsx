import React from "react";

function PlatformList({ platformLists }) {
  return (
    <div className="mt-5 hidden md:block">
      <h2 className="font-bold text-[30px] mb-3">Game Platforms</h2>
      <div className="hidden md:grid md:grid-cols-4 lg:grid-cols-5 gap-5">
        {platformLists.map((item, index) => index < 20 && (
            <div key={index} className="bg-slate-800 rounded-lg group hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer flex justify-center items-center p-2">
                <h2 className="text-[16px] font-bold p-2 text-center">
                  {item.name}
                </h2>
                {/* <img
                  src={item.image_background}
                  alt=""
                  className="h-[300px] object-cover rounded-t-lg"
                /> */}
            </div>
        ))}
      </div>
      <h2 className="mt-5 font-bold text-[25px] text-center">And many more...</h2>
    </div>
  );
}

export default PlatformList;
