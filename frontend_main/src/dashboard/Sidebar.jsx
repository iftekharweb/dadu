import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-full bg-gray-900 text-white w-64 flex-none">
      <div className="p-6">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <ul className="mt-6">
          <li className="mb-4">
            <Link to="/" className="text-lg hover:text-gray-300">
              Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/user-list" className="text-lg hover:text-gray-300">
              User List
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/admin-panel" className="text-lg hover:text-gray-300">
              Admin Panel
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/profile" className="text-lg hover:text-gray-300">
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

