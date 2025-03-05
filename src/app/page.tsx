import React from "react";

export default function Page() {
  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-blue-400 to-purple-600 w-full min-h-screen p-5">
      <div className="flex flex-col w-full max-w-[500px] rounded-lg gap-4 p-5 bg-white shadow-lg">
        <h2 className="font-semibold text-gray-600 text-2xl mb-2">
          เรื่องราววันนี้
        </h2>
        <textarea
          className="w-full border border-gray-300 h-[110px] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          placeholder="เขียนโพสต์ของคุณ..."
        ></textarea>
        <button className="py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-all active:scale-95 shadow-md">
          โพสต์
        </button>
      </div>
    </div>
  );
}
