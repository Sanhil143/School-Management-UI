import React, { useState } from "react";

const UpdateProfile = ({ user, updatedData, cancel }) => {
  const [newData, setNewData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewData({ ...newData, [name]: value });
  };

  const handleButton = () => {
   updatedData(newData)
  }

  const inputStyle = {
    width: "100%",
    height: "30px",
    border: "none",
    outline: "none",
    marginTop: "20px",
  };
  return (
    <>
      <div
        onClick={cancel}
        style={{
          width: "100%",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          backdropFilter: "blur(5px)",
          zIndex: 1,
        }}
      ></div>
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "400px",
          height: "450px",
          border: "1px solid teal",
          borderRadius: "15px",
          backgroundColor: "gainsboro",
          zIndex: 2,
        }}
      >
        <div
          style={{
            width: "150px",
            height: "150px",
            margin: "auto",
            marginTop: "20px",
            // border:"1px solid black"
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "top center",
            }}
            src="/san.jpg"
            alt="profile"
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "160px",
            margin: "auto",
            // marginTop:"20px",
            // border:"1px solid black",
            textAlign: "center",
          }}
        >
            <input
              style={inputStyle}
              placeholder={user.firstName}
              name="firstName"
              value={updatedData.firstName}
              onChange={handleChange}
            />
            <input
              style={inputStyle}
              placeholder={user.lastName}
              name="lastName"
              value={updatedData.lastName}
              onChange={handleChange}
            />
            <input
              style={inputStyle}
              placeholder={user.email}
              name="email"
              value={updatedData.email}
              onChange={handleChange}
            />
        </div>
        <div
          style={{
            width: "140px",
            height: "30px",
            margin: "auto",
            marginTop: "10px",
            // border:"1px solid black"
          }}
        >
          <button
          onClick={handleButton}
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "10px",
              border: "1px solid teal",
              cursor: "pointer",
            }}
          >
            update
          </button>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
