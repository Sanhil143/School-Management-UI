import React, { useState } from "react";
import Students from "../pages/Students";
import Navbar from "./Navbar";
import Teachers from "../pages/Teachers";
import Classes from "../pages/Classes";

const AdminDashboard = () => {
  const [page, setPage] = useState("students");

  const renderPage = () => {
    switch (page) {
      case "students":
        return <Students />;
      case "teachers":
        return <Teachers/>
      case "classes":
        return <Classes/>
      default:
        return <Students/>
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
