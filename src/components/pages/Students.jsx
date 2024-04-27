import axios from "axios";
import React, { useEffect, useState } from "react";
import StudentDetail from "./StudentDetail";

const Students = ({ schoolId }) => {
  const [student, setStudent] = useState([]);
  const [selectStudent, setSelectStudent] = useState(null);
  const token = localStorage.getItem("accessToken");

  const fetchStudent = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/student/getStudentBySchoolId/${schoolId}`,
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      );
      if (response.data) {
        console.log(response.data);
        setStudent(response.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchStudent();
  }, []);

  const handleSelectStudent = (selectStudent) => {
    setSelectStudent(selectStudent);
  };

  const handleCancelButton = () => {
    setSelectStudent(null);
  };

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
        {student.map((stu) => (
          <div
            key={stu.studentId}
            onClick={() => handleSelectStudent(stu)}
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
              {stu.firstName} {stu.lastName}
            </h5>
          </div>
        ))}
      </div>
      <StudentDetail students={selectStudent} cancel={handleCancelButton} />
    </div>
  );
};

export default Students;
