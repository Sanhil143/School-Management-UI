import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {dateFormatter} from '../../utils/dateFormater'

const School = () => {
  const [school,setSchool] = useState([])
  const userId = localStorage.getItem('userId')
  const token = localStorage.getItem('accessToken')
  const fetchSchool = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/school/getMySchool/${userId}`,{
        headers:{
          Authorization: `bearer ${token}`
        }
      });
      if(response.data){
        console.log(response.data);
        setSchool(response.data[0])
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    fetchSchool()
  },[])
  return (
    <div style={{
      height:"100vh",
      width:"100%",
      display:"flex",
      justifyContent:"center",
    }}>
      <div style={{
        width:"600px",
        height:"450px",
        marginTop:"80px",
        textAlign:"center"
      }}>
      <h1>{school.name}</h1>
      <img style={{
        marginTop:"10px",
        height:"400px",
        width:"600px"
      }} src='/school-image.avif' alt='schoolImage'/>
      <p style={{
        marginTop:"40px",
        fontWeight:"bold",
        textAlign:"left"
        }}>Established at : {dateFormatter(school.createdAt)}</p>
      </div>
    </div>
  )
}

export default School
