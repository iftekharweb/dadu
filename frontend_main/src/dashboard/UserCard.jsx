import React from "react";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";

const UserCard = ({ user }) => {
  
  return (
    <div className="p-4 rounded shadow m-7 flex bg-green-100">
      
      <div className="flex-none w-24 h-full p-2">
        <p className="text-gray-600 w-full h-6 pb-1 pl-1">
          <span className="uppercase font-semibold">ID</span>
        </p>
        <p className="text-gray-600 w-full h-6 pb-1 pl-1">
          <span className="uppercase font-semibold">Username</span>
        </p>
        <p className="text-gray-600 w-full h-6 pb-1 pl-1">
          <span className="uppercase font-semibold">Name</span>
        </p>
        <p className="text-gray-600 w-full h-6 pb-1 pl-1">
          <span className="uppercase font-semibold">Email</span>
        </p>
        <p className="text-gray-600 w-full h-6 pb-1 pl-1">
          <span className="uppercase font-semibold">Role</span>
        </p>
      </div>

      <div className="grow p-2">
        <p className="text-gray-600 w-full h-6 pb-1 pl-1">
          <span className="pr-2">:</span>
          {user.id}
        </p>
        <p className="text-gray-600 w-full h-6 pb-1 pl-1">
          <span className="pr-2">:</span>
          {user.username}
        </p>
        <p className="text-gray-600 w-full h-6 pb-1 pl-1">
          <span className="pr-2">:</span>
          {`${user.first_name} ${user.last_name}`}
        </p>
        <p className="text-gray-600 w-full h-6 pb-1 pl-1">
          <span className="pr-2">:</span>
          {user.email}
        </p>
        <p className="text-gray-600 w-full h-6 pb-1 pl-1">
          <span className="pr-2">:</span>
          {user.role_name}
        </p>
      </div>

      <div className="flex-col w-24 p-3 h-auto justify-between items-center">

        <div className="w-full h-full flex flex-col justify-between items-center">
          <button className="pb-2 pt-3 text-3xl hover:text-red-400">
            <MdDelete className="text-red-400 font-bold hover:text-red-700 hover:text-4xl" />
          </button>
          <button className="pb-2 pt-3 text-3xl">
            <BiEditAlt className="text-blue-400 font-bold hover:text-blue-700 hover:text-4xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
