import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Students = () => {
  const [students,setStudents] = useState([]);
  const userId = localStorage.getItem('userId')
  const token = localStorage.getItem('accessToken')
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/school/getMySchool/${userId}`,{
        headers:{
          Authorization: `bearer ${token}`
        }
      });
      if(response.data){
        console.log(response.data);
      }
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    fetchData()
  },[]);
  return (
    <div>
      
    </div>
  )
}

export default Students
