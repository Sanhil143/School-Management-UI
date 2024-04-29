import React from "react";

const Profile = () => {
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
          border: "1px solid black",
          textAlign:"center"
        }}
      >
        <div
          style={{
            height:"140px",
            border: "1px solid black",
          }}
        >
          <img
            style={{
              marginTop: "10px",
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              objectFit:"cover",
              objectPosition:"top center",
            }}
            src="/san.jpg"
            alt="profilePic"
          />
        </div>
        <h4>My Name</h4>
        <h6 style={{
          marginTop:"20px"
        }}>email</h6>
      </div>
    </div>
  );
};

export default Profile;
