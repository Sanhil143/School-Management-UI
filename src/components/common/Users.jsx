import React, { useEffect, useState } from "react";
import UserDetails from "./UserDetails";

const Users = ({ schoolId, fetchFunction, handleSubmit }) => {
  const [user, setUser] = useState([]);
  const [selectUser, setSelectUser] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await fetchFunction(schoolId);
      if (response.data) {
        setUser(response.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchUser();
  }, [handleSubmit]);

  const handleCancelButton = () => {
    setSelectUser(null);
  };

  const handleSelectUser = (user) => {
    setSelectUser(user);
  };

  user.Id = user.studentId;

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "50%",
          height: "100vh",
          margin: "auto",
        }}
      >
        {user.map((users) => (
          <div
            key={users.studentId || users.teacherId}
            onClick={() => handleSelectUser(users)}
            style={{
              width: "150px",
              height: "150px",
              marginTop: "35px",
              marginLeft: "20px",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <img
              style={{
                width: "80%",
                height: "100%",
                borderRadius: "10px",
              }}
              src="/san.jpg"
              alt="studentImage"
            />
            <h5 style={{ marginTop: "5px" }}>
              {users.firstName} {users.lastName}
            </h5>
          </div>
        ))}
      </div>
      <UserDetails user={selectUser} cancel={handleCancelButton} />
    </div>
  );
};

export default Users;
