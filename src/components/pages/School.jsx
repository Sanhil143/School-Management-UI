import React from 'react'

const School = () => {
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
      <h1>school</h1>
      <img style={{
        marginTop:"10px",
        height:"400px",
        width:"600px"
      }} src='/school-image.avif' alt='schoolImage'/>
      </div>
    </div>
  )
}

export default School
