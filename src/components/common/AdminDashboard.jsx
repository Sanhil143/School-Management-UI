import React, { useState } from "react";
import Students from "../pages/Students";
import Navbar from "./Navbar";
import Teachers from "../pages/Teachers";
import Classes from "../pages/Classes";
import School from "../pages/School";

const AdminDashboard = () => {
  const [page, setPage] = useState("school");
  const [schoolId, setSchoolId] = useState(0);
  const school = <School setSchoolId={setSchoolId} />;

  const renderPage = () => {
    switch (page) {
      case "students":
        return <Students schoolId={schoolId}/>;
      case "teachers":
        return <Teachers />;
      case "classes":
        return <Classes />;
      case "school":
        return school;
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
