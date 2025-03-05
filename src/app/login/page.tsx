import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-blue-400 to-purple-600">
      <div className="flex flex-col gap-4 bg-white rounded-2xl p-8 shadow-2xl w-96">
        <div className="text-2xl text-gray-800 font-bold text-center mb-4">
          Welcome to <span className="text-blue-600">Twitty</span>
        </div>
        <button className="flex items-center justify-center gap-3 text-black bg-white text-sm p-3 rounded-full border border-gray-300 hover:bg-black hover:text-white shadow-md transition-all duration-300 transform hover:scale-105">
          <FcGoogle className="text-xl" />
          Login with Google
        </button>
      </div>
    </div>
  );
}
