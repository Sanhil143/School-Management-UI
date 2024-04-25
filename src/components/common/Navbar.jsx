import React from "react";
import "../../css/Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = ({setPage}) => {
  const navigate = useNavigate()
  const handleClick = (page) => {
    setPage(page);    
  }

  const handleLogout = () => {
    localStorage.clear();
    navigate('/')
  }
  return (
    <div
      style={{
        width: "100%",
        height: "60px",
        display: "flex",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          boxShadow:"1px 1px 10px 2px grey",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              marginLeft: "20px",
              cursor:"pointer"
            }}
            onClick={() => handleClick("school")}
          >
            School Management
          </h2>
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              marginLeft: "160px",
            }}
          >
            <li className="navLi" onClick={() => handleClick("students")}>Students</li>
            <li className="navLi" onClick={() => handleClick("teachers")}>Teachers</li>
            <li className="navLi" onClick={() => handleClick("classes")}>Classes</li>
          </ul>
        </div>

        <ul
          style={{
            display: "flex",
            listStyle: "none",
            marginRight: "40px",
          }}
        >
          <li className="navLi">Profile</li>
          <li className="navLi" onClick={() => handleLogout()}>Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
