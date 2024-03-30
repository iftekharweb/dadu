import React from "react";

const UserCard = ({ user }) => {
  console.log(user);
  return (
    <div className=" p-4 rounded shadow m-7 flex bg-green-100">
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
          <span className="pr-2">:</span>{user.id}
        </p>
        <p className="text-gray-600 w-full h-6 pb-1 pl-1">
          <span className="pr-2">:</span>{user.username}
        </p>
        <p className="text-gray-600 w-full h-6 pb-1 pl-1">
          <span className="pr-2">:</span>{`${user.first_name} ${user.last_name}`}
        </p>
        <p className="text-gray-600 w-full h-6 pb-1 pl-1">
          <span className="pr-2">:</span>{user.email}
        </p>
        <p className="text-gray-600 w-full h-6 pb-1 pl-1">
          <span className="pr-2">:</span>{user.role_name}
        </p>
      </div>

      <div className="flex-none w-24 h-full bg-slate-400 p-2">
        <button>delete</button>
        <button>edit</button>
      </div>
    </div>
  );
};

export default UserCard;
