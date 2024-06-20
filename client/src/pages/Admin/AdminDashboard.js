import React from "react";
import AdminHeader from "../../components/AdminHeader";
import "../../styles/admindashboard.css";

const EmployerDashboard = () => {
  return (
    <>
      <AdminHeader />
      <section className="container adminDashboard">
        <h2 className="title textPrimary">Dashboard</h2>
        <div className="rounded-6 adminMain">
          <div className="adminGrid">
            <div className="adminCard rounded-6 dFlex justifyBetween alignCenter">
              <div className="adminCardIcon dFlex justifyCenter alignCenter">
                <i class="fa-solid fa-briefcase textPrimary"></i>
              </div>
              <div className="adminCounter dFlex">
                <p className="textPlaceHolder fwBold fs20">2</p>
                <h3 class="textPrimary">Total Jobs</h3>
              </div>
            </div>
            <div className="adminCard rounded-6 dFlex justifyBetween alignCenter">
              <div className="adminCardIcon dFlex justifyCenter alignCenter">
                <i class="fa-solid fa-user-tie textPrimary"></i>
              </div>
              <div className="adminCounter dFlex">
                <p className="textPlaceHolder fwBold fs20">4</p>
                <h3 class="textPrimary">Total Employer</h3>
              </div>
            </div>
            <div className="adminCard rounded-6 dFlex justifyBetween alignCenter">
              <div className="adminCardIcon dFlex justifyCenter alignCenter">
                <i class="fa-solid fa-users textPrimary"></i>
              </div>
              <div className="adminCounter dFlex">
                <p className="textPlaceHolder fwBold fs20">5</p>
                <h3 class="textPrimary">Total Candidate</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmployerDashboard;
