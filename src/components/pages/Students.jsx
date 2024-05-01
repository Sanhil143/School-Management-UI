import axios from "axios";
import React, { useState } from "react";
import Users from "../common/Users";

const Students = ({ schoolId }) => {
  const [newStudent, setNewStudent] = useState({
    firstName: "",
    lastName: "",
  });
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
    setNewStudent({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      if (newStudent.firstName !== null) {
        formData.append("firstName", newStudent.firstName);
      }
      if (newStudent.lastName !== null) {
        formData.append("lastName", newStudent.lastName);
      }
      formData.append("schoolId", schoolId);
      if (newStudent.firstName && newStudent.lastName) {
        const response = await axios.post(
          `http://localhost:3000/api/v1/student/createStudent`,
          formData,
          {
            headers: {
              Authorization: `bearer ${token}`,
            },
          }
        );
        if (response.data) {
          setAddStudentForm(!addStudentForm);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const inputCss = {
    border: "none",
    borderBottom: "1px solid black",
    height: "40px",
    marginTop: "30px",
    marginLeft: "15px",
    width: "250px",
    outline: "none",
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
              height: "380px",
              width: "350px",
              top: "55%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#f0f0f0",
              padding: "20px",
              borderRadius: "10px",
              zIndex: 1,
            }}
          >
            <form
              onSubmit={handleSubmit}
              style={{
                height: "70%",
                width: "90%",
                margin: "auto",
                marginTop: "40px",
                border: "0.1px solid teal",
              }}
            >
              <input
                style={inputCss}
                placeholder="firstName"
                name="firstName"
                value={newStudent.firstName}
                onChange={handleChange}
              />
              <input
                style={inputCss}
                placeholder="lastName"
                name="lastName"
                value={newStudent.lastName}
                onChange={handleChange}
              />
              <div
                style={{
                  width: "100px",
                  height: "30px",
                  margin: "auto",
                  marginTop: "30px",
                }}
              >
                <button
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "0.5px solid teal",
                    cursor: "pointer",
                  }}
                >
                  submit
                </button>
              </div>
            </form>
          </div>
        </>
      )}
      <Users
        schoolId={schoolId}
        fetchFunction={fetchStudent}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default Students;
