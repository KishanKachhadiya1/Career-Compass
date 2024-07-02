import React from "react";
import EmployerHeader from "../../components/EmployerHeader";
import "../../styles/candidatedashboard.css";

const EmployerDashboard = () => {
  return (
    <>
      <EmployerHeader />
      <section className="container candidateDashboard">
        <h2 className="title textPrimary">Dashboard</h2>
        <div className="candidateDbCard rounded-6">
          <div className="candidateDbGrid">
            <div className="candidateDbProfile dbCardOne rounded-6 dFlex justifyCenter alignCenter">
              <div className="candidateDbIcon bgOne dFlex alignCenter justifyCenter">
                <i class="fa-solid fa-user textPrimary"></i>
              </div>
              <h3 className="textPrimary">Employer Name</h3>
              <p>
                <i class="fa-solid fa-envelope textPrimary"></i>
                <span className="textPlaceHolder">candiate@gmail.com</span>
              </p>
            </div>
            <div className="candidateDbProfile dbCardTwo rounded-6 dFlex justifyCenter alignCenter">
              <div className="candidateDbIcon bgTwo dFlex alignCenter justifyCenter">
                <i class="fa-solid fa-briefcase textPrimary"></i>
              </div>
              <h3 className="textPrimary">Total Jobs</h3>
              <p className="textPlaceHolder fwBold fs20">1</p>
            </div>
            <div className="candidateDbProfile dbCardThree rounded-6 dFlex justifyCenter alignCenter">
              <div className="candidateDbIcon bgThree dFlex alignCenter justifyCenter">
                <i class="fa-solid fa-bookmark textPrimary"></i>
              </div>
              <h3 className="textPrimary">Number of Candidates</h3>
              <p className="textPlaceHolder fwBold fs20">2</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmployerDashboard;
