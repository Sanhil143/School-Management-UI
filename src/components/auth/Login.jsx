import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const formdata = new FormData();
  formdata.append("email", user.email);
  formdata.append("password", user.password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3000/api/v1/user/login`,
        formdata
      );
      if (response.data) {
        localStorage.setItem("accessToken", response.data.token);
        localStorage.setItem("userId", response.data.user[0].userId);
        localStorage.setItem("email", response.data.user[0].email);
        localStorage.setItem("firstName", response.data.user[0].firstName);
        localStorage.setItem("lastName", response.data.user[0].lastName);
        localStorage.setItem("createdAt", response.data.user[0].createdAt);
        if (response.data.user[0].role === "Admin") {
          navigate("/adminDashboard");
        } else {
          navigate("/dashboard");
        }
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const inputCss = {
    border: "none",
    borderBottom: "1px solid black",
    height: "40px",
    marginTop: "10px",
    width: "250px",
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
        boxSizing: "border-box",
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
        <h1 style={{ marginTop: "50px" }}>Welcome Back</h1>
        <form
          onSubmit={handleSubmit}
          style={{
            margin: "auto",
            marginTop: "50px",
            height: "300px",
            width: "300px",
          }}
        >
          <div
            style={{
              marginTop: "50px",
            }}
          >
            <input
              style={inputCss}
              type="email"
              placeholder="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
            />
            <br></br>
            <input
              style={inputCss}
              type="password"
              placeholder="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              required
            />
          </div>
          <div
            style={{
              marginTop: "40px",
              height: "50px",
            }}
          >
            <button
              style={{
                padding: "7px 0px 7px 0px",
                width: "250px",
                borderRadius: "40px",
                cursor: "pointer",
              }}
            >
              LOGIN
            </button>
          </div>
        </form>
        <p>
          Don't have an account?
          <Link
            style={{
              textDecoration: "none",
            }}
            to="/signup"
          >
            signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
