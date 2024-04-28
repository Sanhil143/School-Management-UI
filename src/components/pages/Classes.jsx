import axios from "axios";
import React, { useEffect, useState } from "react";
import ClassStudents from "./ClassStudents";

const Classes = ({ schoolId, setPage, page }) => {
  const [classes, setClasses] = useState([]);
  const [selectClass, setSelectClass] = useState({});
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("accessToken");

  const fetchClass = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/class/getClasses/${userId}/${schoolId}`,
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      );
      if (response.data) {
        console.log(response.data);
        setClasses(response.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  
  useEffect(() => {
    fetchClass();
    if(page==="classes")
    {
     setSelectClass({})
    }
  }, [page]);

  const handleClassStudent = (selectedClass) => {
    setSelectClass(selectedClass);
    setPage("class-details")

  };



  return (
    <div>
      {Object.keys(selectClass).length === 0 ? (
        <div
          style={{
            margin: "auto",
            width: "60%",
            height: "100vh",
          }}
        >
          {classes.map((cls) => (
            <div
              key={cls.classId}
              onClick={() => handleClassStudent(cls)}
              style={{
                width: "100%",
                height: "40px",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  background: "whitesmoke",
                  border: "1px solid teal",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    width: "50%",
                  }}
                >
                  <h3
                    style={{
                      marginLeft: "20px",
                    }}
                  >
                    {cls.className}
                  </h3>
                </div>

                <div
                  style={{
                    width: "50%",
                  }}
                >
                  <h3>Total Students🧑‍🤝‍🧑 : {cls.classMembers}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <ClassStudents selectedClass={selectClass} />
      )}
    </div>
  );
};

export default Classes;
