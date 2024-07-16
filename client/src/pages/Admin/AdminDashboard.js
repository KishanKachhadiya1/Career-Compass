import React, { useEffect, useState } from "react";
import AdminHeader from "../../components/AdminHeader";
import "../../styles/admindashboard.css";
import axios from "axios";

const EmployerDashboard = () => {
  const [counts, setCounts] = useState({
    jobs: 0,
    employers: 0,
    candidates: 0,
  });

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/auth/admin-dashboard");
        setCounts(response.data);
      } catch (error) {
        console.error("Error fetching counts", error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <>
      <AdminHeader />
      <section className="container adminDashboard">
        <h2 className="title textPrimary">Dashboard</h2>
        <div className="rounded-6 adminMain">
          <div className="adminGrid">
            <div className="adminCard rounded-6 dFlex justifyBetween alignCenter">
              <div className="adminCardIcon dFlex justifyCenter alignCenter">
                <i className="fa-solid fa-briefcase textPrimary"></i>
              </div>
              <div className="adminCounter dFlex">
                <p className="textPlaceHolder fwBold fs20">{counts.jobs}</p>
                <h3 className="textPrimary">Total Jobs</h3>
              </div>
            </div>
            <div className="adminCard rounded-6 dFlex justifyBetween alignCenter">
              <div className="adminCardIcon dFlex justifyCenter alignCenter">
                <i className="fa-solid fa-user-tie textPrimary"></i>
              </div>
              <div className="adminCounter dFlex">
                <p className="textPlaceHolder fwBold fs20">{counts.employers}</p>
                <h3 className="textPrimary">Total Employer</h3>
              </div>
            </div>
            <div className="adminCard rounded-6 dFlex justifyBetween alignCenter">
              <div className="adminCardIcon dFlex justifyCenter alignCenter">
                <i className="fa-solid fa-users textPrimary"></i>
              </div>
              <div className="adminCounter dFlex">
                <p className="textPlaceHolder fwBold fs20">{counts.candidates}</p>
                <h3 className="textPrimary">Total Candidate</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmployerDashboard;
