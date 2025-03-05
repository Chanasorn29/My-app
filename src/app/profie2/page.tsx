import React from "react";

export default function page() {
  return (
    <div className="bg-gray-200 w-full h-screen justify-center flex items-center">
        <div className="h-screen w-3/4 mx-auto bg-white">
                <div className="h-1/5 w-m mx-auto bg-white overflow-hidden">
                    <img 
                        src="https://th.bing.com/th/id/OIP.OP1FwBxi1dq932v0hIT5XQHaEJ?rs=1&pid=ImgDetMain" 
                        alt="" />
                <div className="absolute left-1/2 top-40 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gray-300 rounded-full border-4 border-white  overflow-hidden">
                    <img 
                        src="https://i1.sndcdn.com/artworks-000075432569-xedsn3-t500x500.jpg" 
                        alt="Random Unsplash Image" className="w-full h-full object-cover"/>
                </div>
                </div>
                <div className="mt-[120px] text-center ">Mr.Chanasorn(หลิว)</div>
            <div className="h-1 w-full bg-gray-200 mt-11"></div>
           
                
            <div className="flex space-x-4 mt-7 ml-7 text-center">
            <div>
                <div className="w-24 h-32 bg-red-500 rounded-md"></div>
                <p className="mt-2">ข้อความ 1</p>
            </div>
            <div>
                <div className="w-24 h-32 bg-green-500 rounded-md"></div>
                <p className="mt-2">ข้อความ 2</p>
            </div>
            <div>
                <div className="w-24 h-32 bg-blue-500 rounded-md"></div>
                <p className="mt-2">ข้อความ 3</p>
            </div>
            </div>

            <div className="h-1 w-full bg-gray-200 mt-11"></div>
        </div>
    </div>
  );
}
