import React, { useEffect, useState } from "react";
import EmployerHeader from "../../components/EmployerHeader";
import "../../styles/candidatedashboard.css";
import axios from "axios";

const EmployerDashboard = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const [counts, setCounts] = useState({
    jobs: 0,
    candidates: 0,
    employerName: "",
    employerEmail: "",
  });

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/auth/admin-dashboard",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setCounts(response.data);
      } catch (error) {
        console.error("Error fetching counts", error);
      }
    };

    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUserName(`${user.firstName} ${user.lastName}`);
      setUserEmail(`${user.email}`);
    }

    fetchCounts();
  }, []);

  return (
    <>
      <EmployerHeader />
      <section className="container candidateDashboard">
        <h2 className="title textPrimary">Dashboard</h2>
        <div className="candidateDbCard rounded-6">
          <div className="candidateDbGrid">
            <div className="candidateDbProfile dbCardOne rounded-6 dFlex justifyCenter alignCenter">
              <div className="candidateDbIcon bgOne dFlex alignCenter justifyCenter">
                <i className="fa-solid fa-user textPrimary"></i>
              </div>
              <h3 className="textPrimary">{userName}</h3>
              <p>
                <i className="fa-solid fa-envelope textPrimary"></i>
                <span className="textPlaceHolder">{userEmail}</span>
              </p>
            </div>
            <div className="candidateDbProfile dbCardTwo rounded-6 dFlex justifyCenter alignCenter">
              <div className="candidateDbIcon bgTwo dFlex alignCenter justifyCenter">
                <i className="fa-solid fa-briefcase textPrimary"></i>
              </div>
              <h3 className="textPrimary">Total Jobs</h3>
              <p className="textPlaceHolder fwBold fs20">{counts.jobs}</p>
            </div>
            <div className="candidateDbProfile dbCardThree rounded-6 dFlex justifyCenter alignCenter">
              <div className="candidateDbIcon bgThree dFlex alignCenter justifyCenter">
                <i className="fa-solid fa-bookmark textPrimary"></i>
              </div>
              <h3 className="textPrimary">Number of Candidates</h3>
              <p className="textPlaceHolder fwBold fs20">{counts.candidates}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmployerDashboard;
