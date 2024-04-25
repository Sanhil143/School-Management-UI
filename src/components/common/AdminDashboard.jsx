import React, { useState } from "react";
import Students from "../pages/Students";
import Navbar from "./Navbar";
import Teachers from "../pages/Teachers";
import Classes from "../pages/Classes";
import School from "../pages/School";

const AdminDashboard = () => {
  const [page, setPage] = useState("school");

  const renderPage = () => {
    switch (page) {
      case "students":
        return <Students />;
      case "teachers":
        return <Teachers/>
      case "classes":
        return <Classes/>
      case "school":
        return <School/>
      default:
        return <School/>
    }
  };
  return (
    <div>
      <Navbar setPage={setPage}/>
      {renderPage()}
    </div>
  );
};

export default AdminDashboard;
