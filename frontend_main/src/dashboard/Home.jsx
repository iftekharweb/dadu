import React, { useEffect, useState } from 'react'
import NavbarDashboard from './NavbarDashboard';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './Sidebar';

const Home = () => {
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
      <div className='h-full'>
        <Sidebar/>
      </div>
    </div >
  )
}

export default Home
