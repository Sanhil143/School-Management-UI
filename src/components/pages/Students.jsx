import axios from "axios";
import React, { useState } from "react";
import Users from "../common/Users";

const Students = ({ schoolId }) => {
  const [addStudentForm, setAddStudentForm] = useState(false);
  const token = localStorage.getItem("accessToken");

  const fetchStudent = async (schoolId) => {
    try {
      return await axios.get(
        `http://localhost:3000/api/v1/student/getStudentBySchoolId/${schoolId}`,
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleAddStudent = () => {
    setAddStudentForm(!addStudentForm);
  };

  return (
    <>
      <div
        style={{
          height: "30px",
          width: "180px",
          margin: "auto",
          marginTop: "20px",
        }}
      >
        <button
          onClick={handleAddStudent}
          style={{
            height: "100%",
            width: "100%",
            border: "0.5px solid teal",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          add Student
        </button>
      </div>
      {addStudentForm && (
        <>
          <div
            onClick={handleAddStudent}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
              backdropFilter: "blur(5px)",
              zIndex: 0,
            }}
          ></div>
          <div
            style={{
              position: "fixed",
              height: "400px",
              width: "350px",
              top: "55%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#f0f0f0",
              padding: "20px",
              borderRadius: "10px",
              zIndex: 1,
            }}
          ></div>
        </>
      )}
      <Users schoolId={schoolId} fetchFunction={fetchStudent} />
    </>
  );
};

export default Students;
