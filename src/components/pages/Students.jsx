import axios from "axios";
import React from "react";
import Users from "../common/Users";

const Students = ({ schoolId }) => {
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

  return <Users schoolId={schoolId} fetchFunction={fetchStudent} />;
};

export default Students;
