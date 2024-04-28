import axios from "axios";
import React from "react";
import Users from "../common/Users";

const Teachers = ({ schoolId }) => {
  const token = localStorage.getItem("accessToken");
  const fetchTeachers = async (schoolId) => {
    try {
      return await axios.get(
        `http://localhost:3000/api/v1/school/getMySchoolTeacher/${schoolId}`,
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
  return <Users schoolId={schoolId} fetchFunction={fetchTeachers} />;
};

export default Teachers;
