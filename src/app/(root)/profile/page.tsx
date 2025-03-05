import React from "react";

export default function page() {
  return (
    <div className="bg-slate-100 w-full h-screen justify-center flex items-center">
      <div className="flex flex-col gap-1 bg-slate-100 p-7 rounded-md">
        <div className="flex flex-col gap-1 bg-white p-8 rounded-md border border-gray-300 shaow-md">
          <img
            src="https://i1.sndcdn.com/artworks-000075432569-xedsn3-t500x500.jpg"
            alt="Random Unsplash Image"
            className="w-22 h-48 object-cover rounded-md shadow-lg mb-3"
          />
          <h2 className="flex text-black h-4 justify-center text-sm font-bold ">
            John Doe
          </h2>
          <h2 className="flex text-gray-400 justify-center text-sm ">
            johndoe@gmail.com
          </h2>
        </div>
      </div>
    </div>
  );
}
