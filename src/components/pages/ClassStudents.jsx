import axios from "axios";
import React from "react";
import Users from "../common/Users";

const ClassStudents = ({ selectedClass }) => {
  const token = localStorage.getItem("accessToken");
  const fetchClassStudent = async () => {
    try {
      return await axios.get(
        `http://localhost:3000/api/v1/class/getClassStudent/${selectedClass.classId}/${selectedClass.schoolId}`,{
          headers:{
            Authorization:`bearer ${token}`
          }
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <div>
      <h2 style={{
        marginTop:"20px",
        textAlign:"center"
      }}>{selectedClass.className}</h2>
      </div>
      <Users schoolId={selectedClass.schoolId} fetchFunction={fetchClassStudent}/>
    </div>
  )
};

export default ClassStudents;
