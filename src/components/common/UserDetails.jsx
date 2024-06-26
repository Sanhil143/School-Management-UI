import React from "react";
import { dateFormatter } from "../../utils/dateFormater";

const UserDetails = ({ user, cancel }) => {
  if (!user) {
    return null;
  }
  return (
    <>
      <div
        onClick={cancel}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
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
          backgroundColor: "white",
          border: "1px solid teal",
          borderRadius: "20px",
          padding: "1 rem",
          height: "500px",
          width: "500px",
          textAlign: "center",
          zIndex: "2",
        }}
      >
        <div
          style={{
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
            width: "95%",
          }}
        >
          <span
            style={{
              fontWeight: "bold",
            }}
          >
            UniqueId:{user.studentId || user.teacherId}
          </span>
          <span
            style={{
              fontWeight: "bold",
            }}
          >
            Joined:{dateFormatter(user.createdAt)}
          </span>
        </div>
        <div style={{ marginTop: "20px" }}>
          <h2>{user.schoolName}</h2>
          <img
            style={{
              width: "200px",
              height: "150",
              border: "1px solid teal",
              borderRadius: "20px",
              marginTop: "20px",
            }}
            src="/san.jpg"
            alt="stuPic"
          />
        </div>
        <h3>
          {user.firstName} {user.lastName}
        </h3>
        <div
          style={{
            marginTop: "40px",
          }}
        >
          <button
            style={{
              width: "100px",
              height: "25px",
              backgroundColor: "red",
              color: "white",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            onClick={cancel}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
