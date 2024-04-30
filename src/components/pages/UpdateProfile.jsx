import React from "react";

const UpdateProfile = ({ cancel }) => {

  const inputStyle = {
    width:"100%",
    height:"30px",
    // backgroundColor:"transparent",
    border: "none",
    // borderBottom: "1px solid black",
    outline:"none",
    marginTop:"20px"
  }
  return (
    <>
      <div
        onClick={cancel}
        style={{
          width: "100%",
          height: "100vh",
          position:"fixed",
          top:0,
          left:0,
          backdropFilter: "blur(5px)",
          zIndex:1
        }}
      ></div>
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "400px",
          height: "450px",
          border: "1px solid teal",
          borderRadius:"15px",
          backgroundColor:"gainsboro",
          zIndex:2
        }}
      >
        <div style={{
          width:"150px",
          height:"150px",
          margin:"auto",
          marginTop:"20px",
          // border:"1px solid black"
        }}>
        <img style={{
          width:"100%",
          height:"100%",
          borderRadius:"50%",
          objectFit: "cover",
          objectPosition: "top center"
        }} src="/san.jpg" alt="profile"/>
        </div>
        <div style={{
          width:"200px",
          height:"160px",
          margin:"auto",
          // marginTop:"20px",
          // border:"1px solid black",
          textAlign:"center"
        }}>
          <input style={inputStyle} placeholder="firstName"/>
          <input style={inputStyle} placeholder="lastName"/>
          <input style={inputStyle} placeholder="email"/>        
        </div>
        <div style={{
          width:"140px",
          height:"30px",
          margin:"auto",
          marginTop:"10px",
          // border:"1px solid black"
        }}>
        <button style={{
          height:"100%",
          width:"100%",
          borderRadius:"10px",
          border:"1px solid teal",
          cursor:"pointer"
        }}>update</button>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
