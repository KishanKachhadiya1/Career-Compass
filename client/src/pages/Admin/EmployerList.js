import React, { useEffect, useState } from "react";
import AdminHeader from "../../components/AdminHeader";
import "../../styles/employerlist.css";
import "../../styles/candidatelist.css";
// https://unsplash.com/photos/a-man-wearing-glasses-and-a-black-shirt-iEEBWgY_6lA
import candidateProfile from "../../images/candidateProfile.jpg";

const EmployerList = () => {
  const [employers, setEmployers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchEmployers = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/v1/auth/employer-profiles"
        );
        const data = await response.json();
        setEmployers(data);
      } catch (error) {
        console.error("Error fetching employers:", error);
      }
    };

    fetchEmployers();
  }, []);

  const deleteEmployer = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/auth/employer-profile/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setEmployers(employers.filter((employer) => employer._id !== id));
      } else {
        console.error("Failed to delete employer");
      }
    } catch (error) {
      console.error("Error deleting employer:", error);
    }
  };

  const filteredEmployers = employers.filter((employer) =>
    employer.companyName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <AdminHeader />
      <section className="container candList">
        <h2 className="title textPrimary">Employers List</h2>
        <div className="candSearch dFlex">
          <span className="rounded-6 dFlex justifyCenter alignCenter">
            <i className="fa-solid fa-magnifying-glass textPrimary"></i>
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="formControl"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="candDataTable">
          <table
            border="1"
            cellPadding="10"
            cellSpacing="0"
            style={{ width: "100%", borderCollapse: "collapse" }}
          >
            <thead>
              <tr>
                <th>Logo</th>
                <th>Employer Name</th>
                <th>Employer Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployers.map((employer) => (
                <tr key={employer._id}>
                  <td>
                    <img
                      src={candidateProfile}
                      alt={`${employer.companyName} logo`}
                    />
                  </td>
                  <td>{employer.companyName}</td>
                  <td>{employer.email}</td>
                  <td>
                    <i className="fa-solid fa-pen-to-square textPrimary editIcon"></i>
                    <span onClick={() => deleteEmployer(employer._id)} className="cursorPointer">
                      <i className="fa-solid fa-trash-can textDanger"></i>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default EmployerList;
