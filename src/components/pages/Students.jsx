import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Students = ({schoolId}) => {
  const [student,setStudent] = useState([])
  const token = localStorage.getItem('accessToken')

  const fetchStudent = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/student/getStudentBySchoolId/${schoolId}`,{
        headers:{
          Authorization:`bearer ${token}`
        }
      })
      if(response.data){
        console.log(response.data);
        setStudent(response.data)
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchStudent()
  },[]);
  
  return (
    <div style={{
      display:'flex',
      width:"100%",
      height:"100vh"
    }}>
     {student.map((stu) => (
      <div key={stu.studentId} style={{
        width:"100px",
        height:"100px",
        border:"1px solid black"
      }}>
        <h5>{stu.firstName} {stu.lastName}</h5>
      </div>
     ))}
    </div>
  )
}

export default Students
