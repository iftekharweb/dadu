import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-full bg-green-100 text-white w-1/5 flex-none">
        <h2 className=" w-full text-3xl font-bold font-mono text-green-950 pb-4 pt-2 border-b-2 border-white flex justify-center items-center shadow-lg">EcoSync</h2>
      <div className="p-6 w-full">
        <ul className="mt-6 w-full">
          <li className="mb-4 w-full">
            <Link  className="w-full text-lg text-gray-800 hover:text-green-900 hover:font-bold hover:text-2xl hover:border-b-2">
              Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/user-list" className="text-lg text-gray-800 hover:text-green-900 hover:font-bold hover:text-2xl hover:border-b-2">
              User List
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/admin-panel" className="text-lg text-gray-800 hover:text-green-900 hover:font-bold hover:text-2xl hover:border-b-2">
              Admin Panel
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/profile" className="text-lg text-gray-800 hover:text-green-900 hover:font-bold hover:text-2xl hover:border-b-2">
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

