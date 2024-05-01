import React, { useState } from "react";
import { dateFormatter } from "../../utils/dateFormater";
import UpdateProfile from "./UpdateProfile";
import axios from "axios";

const Profile = () => {
  const [showEditForm, setShowEditForm] = useState(false);
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("accessToken");
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  const email = localStorage.getItem("email");
  const createdAt = localStorage.getItem("createdAt");

  const user = {
    firstName: firstName,
    lastName: lastName,
    email: email,
  };
  const toggleEditForm = () => {
    setShowEditForm(!showEditForm);
  };

  const handleUpdateProfile = async (updatedData) => {
    try {
      const formdata = new FormData();
      if (updatedData.firstName !== "") {
        formdata.append("firstName", updatedData.firstName);
        localStorage.setItem("firstName",updatedData.firstName)
      }
      if (updatedData.lastName !== "") {
        formdata.append("lastName", updatedData.lastName);
        localStorage.setItem("lastName",updatedData.lastName)
      }
      if (updatedData.email !== "") {
        formdata.append("email", updatedData.email);
        localStorage.setItem("email",updatedData.email)
      }
      if (updatedData.firstName !== "" || updatedData.lastName !== "" || updatedData.email !== "") {
        const response = await axios.patch(
          `http://localhost:3000/api/v1/user/updateProfile/${userId}`,
          formdata,
          {
            headers: {
              Authorization: `bearer ${token}`,
            },
          }
        );
        if (response.data) {
          // alert("profile updated");
          setShowEditForm(false);
        }
      } else {
        console.log("please use with some data");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleCancel = () => {
    setShowEditForm(false);
  };
  return (
    <div>
      <div
        style={{
          margin: "auto",
          width: "50%",
          height: "calc(100vh - 60px)",
          border: "1px solid black",
        }}
      >
        <div
          style={{
            margin: "auto",
            marginTop: "40px",
            width: "75%",
            height: "65%",
            borderRadius: "30px",
            textAlign: "center",
            backgroundColor: "gainsboro",
            boxShadow: "1px 1px 10px 2px grey",
          }}
        >
          <div
            style={{
              height: "140px",
            }}
          >
            <img
              style={{
                marginTop: "20px",
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: "top center",
              }}
              src="/san.jpg"
              alt="profilePic"
            />
          </div>
          <h4
            style={{
              marginTop: "20px",
            }}
          >
            {firstName} {lastName}
          </h4>
          <p
            style={{
              marginTop: "10px",
            }}
          >
            {email}
          </p>
          <div
            style={{
              height: "40px",
              marginTop: "80px",
            }}
          >
            <button
              onClick={() => toggleEditForm()}
              style={{
                height: "25px",
                width: "120px",
                borderRadius: "10px",
                backgroundColor: "black",
                color: "white",
                cursor: "pointer",
                border: "none",
              }}
            >
              Edit Profile
            </button>
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: "50px",
          }}
        >
          <p>Joined:{dateFormatter(createdAt)}</p>
        </div>
      </div>
      {showEditForm && (
        <UpdateProfile
          user={user}
          updatedData={handleUpdateProfile}
          cancel={handleCancel}
        />
      )}
    </div>
  );
};

export default Profile;
