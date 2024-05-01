import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const formData = new FormData();
  formData.append("firstName", user.firstname);
  formData.append("lastName", user.lastname);
  formData.append("email", user.email);
  formData.append("password", user.password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3000/api/v1/user/signup`,
        formData
      );

      if (response.data.message === "user account created successfully") {
        navigate("/");
      } else {
        alert("internal server error");
      }
    } catch (error) {
      alert("internal server error");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const inputCss = {
    height: "40px",
    border: "none",
    borderBottom: "1px solid black",
    marginTop: "10px",
    outline: "none",
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "400px",
          height: "500px",
          textAlign: "center",
          boxShadow: "1px 1px 10px 2px grey",
          borderRadius: "10px",
        }}
      >
        <h1
          style={{
            marginTop: "50px",
          }}
        >
          Welcome
        </h1>
        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "250px",
              margin: "auto",
              marginTop: "40px",
              height: "240px",
            }}
          >
            <input
              style={inputCss}
              placeholder="firstname"
              name="firstname"
              type="text"
              value={user.firstname}
              onChange={handleChange}
              required
            />
            <input
              style={inputCss}
              placeholder="lastname"
              name="lastname"
              type="text"
              value={user.lastname}
              onChange={handleChange}
              required
            />
            <input
              style={inputCss}
              placeholder="email"
              name="email"
              type="email"
              value={user.email}
              onChange={handleChange}
              required
            />
            <input
              style={inputCss}
              placeholder="password"
              name="password"
              type="password"
              value={user.password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <button
              style={{
                padding: "7px 0px 7px 0px",
                width: "250px",
                borderRadius: "40px",
                cursor: "pointer",
              }}
            >
              SIGNUP
            </button>
          </div>
        </form>
        <p
          style={{
            marginTop: "40px",
          }}
        >
          Already have an account?
          <Link
            style={{
              textDecoration: "none",
            }}
            to="/"
          >
            login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
