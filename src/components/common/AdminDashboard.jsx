import React, { useState } from "react";
import Students from "../pages/Students";
import Navbar from "./Navbar";
import Teachers from "../pages/Teachers";
import Classes from "../pages/Classes";
import School from "../pages/School";
import Profile from "../pages/Profile";

const AdminDashboard = () => {
  const [page, setPage] = useState("school");
  const [schoolId, setSchoolId] = useState(0);
  const school = <School setSchoolId={setSchoolId} />;

  const renderPage = () => {
    switch (page) {
      case "students":
        return <Students schoolId={schoolId} />;
      case "teachers":
        return <Teachers schoolId={schoolId} />;
      case "classes":
        return <Classes schoolId={schoolId} setPage={setPage} page={page} />;
      case "school":
        return school;
      case "class-details":
        return <Classes schoolId={schoolId} setPage={setPage} />;
      case "profile":
        return <Profile />;
      default:
        return school;
    }
  };
  return (
    <div>
      <Navbar setPage={setPage} />
      {renderPage()}
    </div>
  );
};

export default AdminDashboard;
