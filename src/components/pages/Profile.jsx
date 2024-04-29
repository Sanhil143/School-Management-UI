import React, { useState } from "react";
import { dateFormatter } from "../../utils/dateFormater";
const Profile = () => {
  const [showEditForm, setShowEditForm] = useState(false)
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  const email = localStorage.getItem("email");
  const createdAt = localStorage.getItem("createdAt");

  const toggleEditForm = () => {
    setShowEditForm(!showEditForm);
  }
  return (
    <div
      style={{
        margin: "auto",
        width: "50%",
        height: "calc(100vh - 60px)",
        border: "1px solid black",
      }}
    >
      <div
        style={{
          margin: "auto",
          marginTop: "40px",
          width: "75%",
          height: "65%",
          borderRadius: "30px",
          textAlign: "center",
          backgroundColor: "gainsboro",
          boxShadow: "1px 1px 10px 2px grey",
        }}
      >
        <div
          style={{
            height: "140px",
          }}
        >
          <img
            style={{
              marginTop: "20px",
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "top center",
            }}
            src="/san.jpg"
            alt="profilePic"
          />
        </div>
        <h4
          style={{
            marginTop: "20px",
          }}
        >
          {firstName} {lastName}
        </h4>
        <p
          style={{
            marginTop: "10px",
          }}
        >
          {email}
        </p>
        <div
          style={{
            height: "40px",
            marginTop: "80px",
          }}
        >
          <button
            style={{
              height: "25px",
              width: "120px",
              borderRadius: "10px",
              backgroundColor: "black",
              color: "white",
              cursor: "pointer",
              border: "none",
            }}
          >
            edit profile
          </button>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        <p>Joined:{dateFormatter(createdAt)}</p>
      </div>
    </div>
  );
};

export default Profile;