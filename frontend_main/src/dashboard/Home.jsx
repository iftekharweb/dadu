import React, { useEffect, useState } from 'react'
import NavbarDashboard from './NavbarDashboard';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './Sidebar';
import UserList from './UserList';

const Home = () => {
  //
  const _users = [
    {
        "id": 2,
        "username": "admin",
        "first_name": "",
        "last_name": "",
        "email": "admin@gmail.com",
        "role": 1,
        "role_name": "System Admin"
    },
    {
        "id": 3,
        "username": "shadik",
        "first_name": "SHADIK",
        "last_name": "HASAN",
        "email": "shadik.sk420@gmail.com",
        "role": 2,
        "role_name": "LandFiled Manager"
    },
    {
      "id": 4,
      "username": "shadik",
      "first_name": "SHADIK",
      "last_name": "HASAN",
      "email": "shadik.sk420@gmail.com",
      "role": 2,
      "role_name": "LandFiled Manager"
  }
  ]
  //
  function calculateTimeDifference(created_at) {
    const createdAtDate = new Date(created_at);
    const currentDate = new Date();
    const timeDifference = currentDate - createdAtDate;
    const days = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24)
    );
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    return { days, hours, minutes };
  }

  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [uid, setUid] = useState("");
  const [rolename, setRolename] = useState("");
  const [created_at, setCreated_at] = useState({});

  const decodeToken = (token) => {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((char) => "%" + ("00" + char.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload);
  };

  async function populateProfile() {
    try {
      const response = await axios.get("http://127.0.0.1:8000/profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = response.data[0];
      setEmail(() => data.email);
      setFirstname(() => data.first_name);
      setLastname(() => data.last_name);
      setUsername(() => data.username);
      setRolename(() => data.role_name);
      setCreated_at(() => calculateTimeDifference(data.created_at));
      setUid(() => data.id);
    } catch (error) {
      localStorage.removeItem("token");
      navigate("/auth/login");
      console.log(error.message);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = decodeToken(token);
      if (!user) {
        localStorage.removeItem("token");
        navigate("/auth/login");
      } else {
        populateProfile();
      }
    } else {
      navigate("/auth/login");
    }
    // Fecth from /users/

  }, []);

  const handleClick = () => {
    localStorage.removeItem("token");
    navigate("/auth/login");
  };

  return (
    <div className='h-screen w-screen'>
      <div>
        <NavbarDashboard username={username} onClick={handleClick}/>
      </div>
      <div className='h-full flex flex-row'>
        <Sidebar/>
        <UserList users={_users}/>
      </div>
    </div >
  )
}

export default Home
